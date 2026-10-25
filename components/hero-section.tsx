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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-foreground">
              Duleepa Edirisinghe
            </h2>
            <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-accent">
              Computer Science Undergraduate
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              University of Colombo School of Computing
            </p>
          </div>

          <div className="py-1">
            <div className="h-16 flex items-center justify-center">
              <p
                className={`text-lg sm:text-xl font-medium text-accent italic transition-opacity duration-500 max-w-2xl mx-auto ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                "{quotes[currentQuoteIndex]}"
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          <div className="flex justify-center space-x-6 pt-8">
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
