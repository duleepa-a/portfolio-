import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  const stats = [
    { label: "GPA", value: "3.82/4.0", icon: GraduationCap },
    { label: "Year of Study", value: "3rd Year", icon: TrendingUp },
    { label: "Projects", value: "5+", icon: Target },
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center">
                <img
                  src="/professional-headshot-of-computer-science-student.png"
                  alt="Duleepa Edirisinghe"
                  className="w-72 h-72 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hi, I’m Duleepa, a final-year Computer Science undergraduate at UCSC. I like building things that work well and learning new tools quickly, and I’m always looking for ways to grow while contributing to the teams I work with
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Right now my research is on reducing code bloat in operating system kernels. I’m drawn to the low-level side of software, especially performance optimization and system security, and I enjoy digging into how things work under the hood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
