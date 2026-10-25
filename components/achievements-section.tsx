import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Briefcase as Certificate, Calendar } from "lucide-react"

export function AchievementsSection() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2025",
      type: "certification",
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "AWS Educate",
      year: "2024",
      type: "certification",
    },
  ]

  const academicAchievements = [
    {
      title: "Director's List for Academic Excellence",
      issuer: "University of Colombo School of Computing",
      year: "2023-2024",
      description:
        "Recognized for outstanding academic performance in 2023 (1st Year – Semester 2) and 2024 (2nd Year – Semesters 1 & 2)",
      type: "academic",
    },
  ]

  const competitions = [
    {
      title: "Duothan 5.0",
      issuer: "IEEE Student Branch - NSBM Green University",
      year: "2025",
      result: "Finalist",
      description: "Hackathon to develop a system solving a real-world problem",
      technologies: ["Next.js", "PostgreSQL", "Neondb"],
      type: "competition",
    },
    {
      title: "GENESIZ'24",
      issuer: "Electronic, Robotic Innovation club of KDU",
      year: "2024",
      result: "Finalist",
      description: "Ideathon focused on generating and pitching innovative ideas",
      type: "competition",
    },
    {
      title: "HackX 9.0 (Inter-University Startup Challenge)",
      issuer: "IMSSA - University of Kelaniya",
      year: "2024",
      result: "Semi-Finalist",
      description: "Ideathon for brainstorming and presenting startup solutions",
      type: "competition",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "certification":
        return Certificate
      case "academic":
        return Award
      case "competition":
        return Trophy
      default:
        return Award
    }
  }

  const getResultColor = (result: string) => {
    switch (result) {
      case "Finalist":
        return "bg-accent text-accent-foreground"
      case "Semi-Finalist":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, academic excellence, and competition achievements
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Certifications */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Certificate className="w-6 h-6 text-accent" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-accent transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Certificate className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{cert.title}</h4>
                        <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="text-sm text-accent font-medium">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Academic Excellence
            </h3>
            <div className="space-y-4">
              {academicAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-accent transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h4 className="font-heading font-semibold text-lg text-foreground">{achievement.title}</h4>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-sm text-accent font-medium">{achievement.year}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{achievement.issuer}</p>
                        <p className="text-sm text-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Competition Results */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent" />
              Competition Results
            </h3>
            <div className="space-y-4">
              {competitions.map((competition, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-accent transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div>
                            <h4 className="font-heading font-semibold text-lg text-foreground mb-1">
                              {competition.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">{competition.issuer}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getResultColor(competition.result)}>{competition.result}</Badge>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-accent" />
                              <span className="text-sm text-accent font-medium">{competition.year}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-foreground mb-3">{competition.description}</p>
                        {competition.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {competition.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs border-accent/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
