import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Users, User } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "SchoolWay",
      type: "3rd Year Group Project",
      year: "Ongoing",
      description:
        "A system connecting parents, students, and van services for safe and reliable school transportation. Features include real-time GPS tracking, QR-based attendance, optimized van routing, online payments, and role-based access for all users.",
      technologies: ["React.js", "React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"],
      status: "ongoing",
      teamType: "group",
      image: "/school-transportation-app-interface-with-gps-track.png",
      githubUrl: "https://github.com/duleepa-a/schoolway-frontend.git",
    },
    {
      title: "Oasis",
      type: "Individual Project",
      year: "2025",
      description:
        "A competition platform for algorithmic and buildathon challenges. Competitors register with unique names and join into teams, solve algorithmic problems first, and unlock buildathon tasks via flag submission. Admins manage challenges, submissions, and leaderboards.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Judge0 CE API"],
      status: "completed",
      teamType: "individual",
      image: "/coding-competition-platform-with-leaderboard-and-c.png",
      githubUrl: "https://github.com/duleepa-a/duothan.git",
    },
    {
      title: "BookMart",
      type: "2nd Year Group Project",
      year: "2024",
      description:
        "A centralized platform connecting local bookstores, booksellers, buyers, and couriers to facilitate buying and selling of new and second-hand books. Features include search/filter, role-based access, online payments, inventory management, auctions, order tracking, reviews, chat, advertisements, and delivery coordination with OTP verification.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache", "Google Maps API", "Stripe", "SMTP"],
      status: "completed",
      teamType: "group",
      image: "/online-bookstore-marketplace-with-book-listings-an.png",
      githubUrl: "https://github.com/duleepa-a/BookMart.git",
    },
    {
      title: "P2P Chat App",
      type: "Hackathon Project",
      year: "Ongoing",
      description:
        "A peer-to-peer decentralized chat app with real-time messaging using WebRTC. A Ballerina-based signaling server establishes secure P2P connections, ensuring privacy and low latency.",
      technologies: ["React Native", "Ballerina", "WebRTC", "Expo"],
      status: "ongoing",
      teamType: "group",
      image: "/peer-to-peer-chat-app-interface-with-secure-messag.png",
      githubUrl: "https://github.com/Def119/p2pchat-backend.git",
    },
    {
      title: "ZellMart",
      type: "University Assignment",
      year: "2024",
      description:
        "A full-stack e-commerce platform with two user roles: Managers and Customers. Managers handle inventory, product management, and orders, while customers browse, view details, and place orders.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      status: "completed",
      teamType: "individual",
      image: "/e-commerce-platform-with-product-catalog-and-shopp.png",
      githubUrl: "https://github.com/kaveeshanirmal/zellmart.git",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, mobile apps, and system design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.status === "ongoing" && (
                    <Badge className="bg-accent/90 text-accent-foreground">Ongoing</Badge>
                  )}
                  <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                    {project.year}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  {project.teamType === "group" ? (
                    <Users className="w-5 h-5 text-white/80" />
                  ) : (
                    <User className="w-5 h-5 text-white/80" />
                  )}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading font-bold text-xl text-foreground">{project.title}</CardTitle>
                </div>
                <p className="text-sm text-accent font-medium">{project.type}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-foreground leading-relaxed line-clamp-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-accent/30 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs border-accent/30 text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-end pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
