import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-balance font-sans text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Jinheng Lin
        </h1>
        <p className="text-balance text-xl text-muted-foreground sm:text-2xl">Computer Engineering Graduate</p>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          As a computer engineering graduate with a strong theoretical background and practical experience, I am eager
          to apply my skills to diverse and innovative projects. Skilled in Git, Visual Studio, Unity, and OpenGL,
          regularly working with Linux and terminal tools, bringing efficiency, adaptability, and a commitment to
          continuous learning to every project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="#experience">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
