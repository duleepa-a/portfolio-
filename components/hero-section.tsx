"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Globe, Linkedin, Github, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const quotes = [
    "Code is poetry written in logic.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Technology is best when it brings people together.",
    "Every great developer you know got there by solving problems they were unqualified to solve.",
    "The only way to do great work is to love what you do.",
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [quotes.length])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-[calc(100svh-4rem)] flex flex-col lg:flex-row lg:items-end relative overflow-hidden bg-white lg:bg-card">
      <div
        className="hero-background relative w-full aspect-[1677/938] shrink-0 lg:absolute lg:inset-0 lg:aspect-auto pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full px-20 sm:px-22 pt-4 lg:pt-0 pb-8 lg:pb-16 text-left relative z-10">
        <div className="space-y-5 lg:space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="hero-name font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.9] tracking-tight text-accent">
              Duleepa Edirisinghe
            </h1>
            <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-accent">
              Computer Science Undergraduate
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              University of Colombo School of Computing
            </p>
          </div>

          <div className="">
            <div className="min-h-16 flex items-center">
              <p
                className={`text-lg sm:text-xl font-medium text-accent italic transition-opacity duration-500 max-w-2xl ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                "{quotes[currentQuoteIndex]}"
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 bg-transparent"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Contact Icons */}
          <div className="flex space-x-6 pt-4 lg:pt-8">
            <a href="mailto:duleepa24@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+94783152739" className="text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/duleepa-edirisinghe"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/duleepa-a"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
