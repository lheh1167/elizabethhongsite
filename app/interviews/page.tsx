"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function InterviewsPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById("custom-cursor")
      if (cursor) {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      }
    }

    const handleMouseEnter = () => {
      const cursor = document.getElementById("custom-cursor")
      const cursorImg = cursor?.querySelector("img")
      if (cursorImg) {
        cursorImg.src = "/hover-cursor.png"
        cursorImg.alt = "Blue pointing hand cursor"
      }
    }

    const handleMouseLeave = () => {
      const cursor = document.getElementById("custom-cursor")
      const cursorImg = cursor?.querySelector("img")
      if (cursorImg) {
        cursorImg.src = "/mouse.png"
        cursorImg.alt = "Blue arrow cursor"
      }
    }

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative md:cursor-none">
      {/* Custom Cursor - Hidden on mobile */}
      <div
        id="custom-cursor"
        className="fixed w-auto h-6 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <img src="/mouse.png" alt="Blue arrow cursor" className="w-auto h-full object-contain" />
      </div>

      {/* Header */}
      <header className="px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <div>
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-serif text-black hover:text-gray-600 transition-colors">
                elizabeth hong
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-16">
            <Link
              href="/articles"
              className="text-sm md:text-xl font-serif text-black hover:text-gray-600 transition-colors"
            >
              articles
            </Link>
            <Link
              href="/projects"
              className="text-sm md:text-xl font-serif text-black hover:text-gray-600 transition-colors"
            >
              projects
            </Link>
            <Link href="/interviews" className="text-sm md:text-xl font-serif text-black underline">
              interviews
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 pt-4 flex-grow pb-[120px] md:pb-[200px]">
        <div className="max-w-6xl flex flex-col items-start ml-4 md:ml-8">
          <Link href="/interviews/prof-david-morris" className="flex flex-col items-center">
            <img src="/prof-david-morris.png" alt="Prof. David Morris" className="w-36 md:w-48 h-auto" />
          </Link>
        </div>
      </main>

      {/* Cityscape Footer */}
      <div className="fixed bottom-0 left-0 w-full">
        <img
          src="/updated-cityscape.png"
          alt="Hand-drawn cityscape illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
