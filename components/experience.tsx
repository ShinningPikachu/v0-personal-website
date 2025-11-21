import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "Feb 2024 — Oct 2025",
    title: "Software Developer",
    company: "Peersyst",
    description:
      "Developed TypeScript applications, implementing domain layers and UI components for mobile platforms. Gained experience in blockchain concepts such as staking, deposits, and smart contracts.",
    skills: ["TypeScript", "Mobile Development", "Blockchain", "Smart Contracts", "UI Components"],
  },
  {
    period: "Sep 2022 — Jan 2024",
    title: "LLM Research Intern",
    company: "UPC University",
    description:
      "Developed a system to classify cultural entities using large language models (LLMs). Explored prompt engineering, retrieval-augmented generation (RAG), and fine-tuning techniques. Implemented and evaluated Python-based applications comparing local and cloud LLMs. Enhanced model performance using embeddings, LoRA fine-tuning, and the LangChain framework.",
    skills: ["Python", "LLMs", "Prompt Engineering", "RAG", "Fine-tuning", "LangChain", "Machine Learning"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-l-2 border-l-accent bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{exp.title}</h3>
                    <p className="text-base text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground sm:text-right">{exp.period}</p>
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
