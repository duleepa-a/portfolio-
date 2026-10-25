import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Edit, Heart } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2025 - Present",
      position: "Editor, Executive Committee",
      organization: "Rotaract Club of UCSC",
      description:
        "Managed editorial content, publications, and communications; enhanced visibility and impact of the club.",
      status: "current",
      icon: Edit,
      type: "leadership",
    },
    {
      period: "2024 - 2025",
      position: "Member, Community Services Avenue",
      organization: "Rotaract Club of UCSC",
      description:
        "Participated in planning and executing community service initiatives creating positive social impact.",
      status: "completed",
      icon: Heart,
      type: "service",
    },
    {
      period: "2023 - 2024",
      position: "Member, Professional Development Avenue",
      organization: "Rotaract Club of UCSC",
      description: "Organized a podcast series promoting knowledge-sharing and professional growth.",
      status: "completed",
      icon: Users,
      type: "development",
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "current" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "from-accent to-secondary"
      case "service":
        return "from-secondary to-accent"
      case "development":
        return "from-accent/80 to-secondary/80"
      default:
        return "from-accent to-secondary"
    }
  }

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Leadership & Volunteer Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Active involvement in community service and professional development through leadership roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-16 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(exp.type)} flex items-center justify-center`}
                        >
                          <exp.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div>
                            <h3 className="font-heading font-bold text-xl text-foreground mb-2">{exp.position}</h3>
                            <p className="text-accent font-medium mb-1">{exp.organization}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getStatusColor(exp.status)}>
                              {exp.status === "current" ? "Current" : "Completed"}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>

                        <p className="text-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="font-heading font-bold text-2xl text-foreground mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-heading font-bold text-2xl text-foreground mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="w-6 h-6 text-accent" />
              </div>
              <div className="font-heading font-bold text-2xl text-foreground mb-2">Current</div>
              <div className="text-sm text-muted-foreground">Executive Role</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
