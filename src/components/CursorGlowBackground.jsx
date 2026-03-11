import { useEffect, useRef } from "react"

export default function CursorGlowBackground({ variant = "warm" }) {
  const glowRef = useRef(null)

  useEffect(() => {
    const element = glowRef.current

    if (!element || window.matchMedia("(pointer: coarse)").matches) {
      return undefined
    }

    let currentX = window.innerWidth * 0.5
    let currentY = window.innerHeight * 0.3
    let targetX = currentX
    let targetY = currentY
    let frameId = 0

    const updatePointer = (event) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12

      element.style.setProperty("--cursor-glow-x", `${currentX}px`)
      element.style.setProperty("--cursor-glow-y", `${currentY}px`)

      frameId = window.requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", updatePointer)
    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", updatePointer)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return <div ref={glowRef} aria-hidden="true" className={`cursor-glow cursor-glow-${variant}`} />
}
