'use client'

import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  zoom?: number
  /**
   * Some hosted Spline scenes ship with an initial camera zoom animation.
   * We can't edit the remote timeline, but we can override it by forcing
   * the zoom value for a short period right after load/start.
   */
  forceZoomMs?: number
}

export function SplineScene({
  scene,
  className,
  zoom,
  forceZoomMs = 1400,
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const splineAppRef = useRef<Application | null>(null)
  const [isSized, setIsSized] = useState(false)

  // Wait until the container has a non-trivial size before mounting Spline.
  // This avoids an initial bad aspect-ratio render that can distort proportions.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect()
      setIsSized(width > 40 && height > 40)
    })

    ro.observe(el)
    // Initial sync
    const { width, height } = el.getBoundingClientRect()
    setIsSized(width > 40 && height > 40)

    return () => ro.disconnect()
  }, [])

  const forceZoom = useCallback(
    (splineApp: Application) => {
      if (typeof zoom !== 'number') return

      // Apply immediately
      splineApp.setZoom(zoom)

      // Keep re-applying briefly to override any built-in start animation.
      const start = performance.now()
      const tick = () => {
        splineApp.setZoom(zoom)
        if (performance.now() - start < forceZoomMs) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    [forceZoomMs, zoom],
  )

  const handleLoad = useCallback(
    (app: Application) => {
      splineAppRef.current = app
      forceZoom(app)
      // One more pass next frame after layout/paint settles.
      requestAnimationFrame(() => {
        if (splineAppRef.current) forceZoom(splineAppRef.current)
      })
    },
    [forceZoom],
  )

  const wrapperClassName = useMemo(
    () => `spline-wrap ${className ?? ''}`.trim(),
    [className],
  )

  return (
    <div ref={containerRef} className={wrapperClassName}>
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <span className="loader" />
          </div>
        }
      >
        {isSized ? (
          <Spline
            scene={scene}
            className="h-full w-full"
            onLoad={handleLoad}
            onSplineStart={() => {
              if (splineAppRef.current) forceZoom(splineAppRef.current)
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="loader" />
          </div>
        )}
      </Suspense>
    </div>
  )
}

