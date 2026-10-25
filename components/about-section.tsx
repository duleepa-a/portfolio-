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
                A self-motivated and hardworking third-year undergraduate with a GPA of 3.82 who strives to gain
                valuable experience while contributing to organizational goals. Passionate about creating innovative
                applications and eager to quickly learn and adapt to emerging technologies.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Currently preparing for research in the area of code bloating in operating system kernels, with a strong
                interest in exploring performance optimization and system-level security.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-background border-border hover:border-accent transition-colors">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="font-heading font-bold text-2xl text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Current Focus</h3>
              <p className="text-foreground">
                Research in OS kernel optimization, performance analysis, and system-level security implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
