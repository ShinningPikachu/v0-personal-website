import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C/C++", "Python", "Java", "JavaScript", "Haskell", "Prolog", "MIPS", "MySQL"],
  },
  {
    category: "Development Tools",
    skills: ["Linux", "Git", "GitHub", "Visual Studio Code", "Docker", "Unity", "OpenGL"],
  },
  {
    category: "Languages",
    skills: ["Chinese (Native)", "English (IELTS 7.0)", "Spanish (C1)", "Catalan (C1)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-muted-foreground">Skills & Expertise</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
