"use client"

import { Mail, Phone, Globe, Linkedin, Github, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Mail, href: "mailto:duleepa24@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+94783152739", label: "Phone" },
    { icon: Globe, href: "https://mysite.com", label: "Website" },
    { icon: Linkedin, href: "https://linkedin.com/in/duleepa-edirisinghe", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/duleepa-a", label: "GitHub" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Name and Title */}
          <div className="text-center">
            <h3 className="font-heading font-black text-2xl text-foreground mb-2">Duleepa Edirisinghe</h3>
            <p className="text-muted-foreground">
              Computer Science Undergraduate | University of Colombo School of Computing
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8 w-full">
            <p>© 2025 Duleepa Edirisinghe. All rights reserved.</p>
            <p className="mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
