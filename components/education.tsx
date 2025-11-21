import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    period: "2019 — 2024",
    degree: "Bachelor Degree in Informatics Engineering",
    institution: "Polytechnic University of Catalonia (UPC)",
    description:
      "Comprehensive education in computer engineering with strong theoretical background and practical experience in software development. Gained expertise in algorithms, data structures, software engineering, and modern development tools.",
    achievements: ["Software Development", "System Design", "Algorithm Optimization", "Team Collaboration"],
  },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-muted-foreground">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-medium text-foreground">{edu.degree}</h3>
                        <p className="text-base text-muted-foreground">{edu.institution}</p>
                      </div>
                      <p className="text-sm text-muted-foreground sm:text-right">{edu.period}</p>
                    </div>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{edu.description}</p>
                    <ul className="space-y-1 pt-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
