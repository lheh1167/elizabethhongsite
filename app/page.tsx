"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function HomePage() {
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
            <h1 className="text-xl md:text-2xl font-serif text-black">elizabeth hong</h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-16">
            <Link
              href="/articles"
              className="text-sm md:text-xl font-serif text-black hover:text-[#313e8c] hover:opacity-70 transition-all"
            >
              articles
            </Link>
            <Link
              href="/projects"
              className="text-sm md:text-xl font-serif text-black hover:text-[#313e8c] hover:opacity-70 transition-all"
            >
              projects
            </Link>
            <Link
              href="/interviews"
              className="text-sm md:text-xl font-serif text-black hover:text-[#313e8c] hover:opacity-70 transition-all"
            >
              interviews
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 pt-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Left Column - Bio */}
            <div className="md:col-span-3 order-1">
              <div className="space-y-3 md:space-y-4">
                <p className="font-serif text-black leading-relaxed text-xs md:text-sm">
                  Hey there! I'm Liz, a 23 year-old based in Sydney
                </p>
                <p className="font-serif text-black leading-relaxed text-xs md:text-sm">
                  Currently I'm 5/6 years through an MD and small confession - I'm not completely sure what I'd like to
                  do for the rest of my life.
                </p>

                <p className="font-serif text-black leading-relaxed text-xs md:text-sm">
                  I'm in the process of finding out what this is - through{" "}
                  <Link href="/articles" className="hover:text-[#313e8c] hover:opacity-70 transition-all underline">
                    writing
                  </Link>
                  ,{" "}
                  <Link href="/projects" className="hover:text-[#313e8c] hover:opacity-70 transition-all underline">
                    projects
                  </Link>{" "}
                  and by{" "}
                  <Link href="/interviews" className="hover:text-[#313e8c] hover:opacity-70 transition-all underline">
                    talking
                  </Link>{" "}
                  to a wide range of people I respect.
                  <br />
                  <br />
                  Join me here as I share what I see and learn as I go!
                </p>

                <p className="font-serif text-black leading-relaxed text-xs md:text-sm mt-3 md:mt-4">
                  Start with my{" "}
                  <Link
                    href="/interviews/prof-david-morris"
                    className="hover:text-[#313e8c] hover:opacity-70 transition-all underline"
                  >
                    interview with Prof. David Morris
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="md:col-span-1 order-2">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h2 className="font-serif text-black mb-2 text-sm md:text-base">get in touch</h2>
                  <a
                    href="mailto:lheh1167@gmail.com"
                    className="font-serif text-black hover:text-[#313e8c] hover:opacity-70 transition-all flex items-center text-xs md:text-sm"
                  >
                    email
                  </a>
                </div>

                <div>
                  <Link
                    href="#"
                    className="font-serif text-black hover:text-[#313e8c] hover:opacity-70 transition-all flex items-center text-xs md:text-sm"
                  >
                    linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cityscape Footer */}
      <div className="fixed bottom-8 md:bottom-16 left-0 w-full">
        <img
          src="/updated-cityscape.png"
          alt="Hand-drawn cityscape illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
