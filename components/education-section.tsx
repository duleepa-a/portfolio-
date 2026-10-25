import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"
import Image from "next/image"

export function EducationSection() {
  const education = [
    {
      period: "2023 - Present",
      degree: "Bachelor of Science Honours in Computer Science",
      institution: "University of Colombo School of Computing (UCSC)",
      gpa: "GPA: 3.83/4.0",
      status: "ongoing",
      icon: GraduationCap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucsc%20logo.jpg-UKeFOcglRvLTpiq1Q0J2hpWUEO8B54.jpeg",
      logoAlt: "UCSC Logo",
    },
    {
      period: "2022",
      degree: "GCE Advanced Level (2021/2022)",
      institution: "Ananda College, Colombo",
      gpa: "Grades: 3A's (Z-Score: 2.34)",
      status: "completed",
      icon: Award,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ananda%20college%20logo-mZpwhDSWxkcMCQ900SetKe40zYUuS5.png",
      logoAlt: "Ananda College Logo",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-16 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                          <edu.icon className="w-8 h-8 text-accent" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-accent">{edu.period}</span>
                            {edu.status === "ongoing" && (
                              <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">Ongoing</span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-2">{edu.degree}</h3>
                          <p className="text-muted-foreground mb-3">{edu.institution}</p>
                          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                            {edu.gpa}
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0 hidden sm:block">
                        <div className="w-20 h-20 relative">
                          <Image
                            src={edu.logo || "/placeholder.svg"}
                            alt={edu.logoAlt}
                            fill
                            className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
