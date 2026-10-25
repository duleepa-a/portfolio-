import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Users } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "PHP", "R", "Octave"],
      color: "from-accent to-secondary",
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["Next.js", "React.js", "MERN Stack", "React Native", "Tailwind CSS"],
      color: "from-secondary to-accent",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "from-accent/80 to-secondary/80",
    },
    {
      title: "Technologies & Tools",
      icon: Wrench,
      skills: ["Git", "Prisma ORM", "Postman", "Linux", "Canva", "Figma"],
      color: "from-secondary/80 to-accent/80",
    },
  ]

  const softSkills = [
    "Problem-Solving",
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and soft skills developed through academic projects and hands-on experience
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 font-heading font-bold text-xl text-foreground">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 font-heading font-bold text-xl text-foreground">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-accent/30 text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Visualization */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-foreground">5+ Programming Languages</span>
            </div>
            <div className="w-px h-4 bg-accent/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Multiple Frameworks</span>
            </div>
            <div className="w-px h-4 bg-accent/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent/70 rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
