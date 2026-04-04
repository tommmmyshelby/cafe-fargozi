"use client";
import { ReactLenis } from 'lenis/react' // Updated import

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // lerp: 0.05 makes it even smoother (Liquid Feel)
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}