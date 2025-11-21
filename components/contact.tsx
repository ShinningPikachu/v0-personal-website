import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">Get In Touch</h2>
        <h3 className="mb-6 text-balance text-3xl font-light text-foreground sm:text-4xl">Let's work together</h3>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I'm always interested in hearing about new opportunities, collaborations, or just having a chat about
          technology and innovation.
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:jinhengl2001@gmail.com">
                <Mail className="h-5 w-5" />
                jinhengl2001@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              +34 640 57 39 00
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent" asChild>
              <a href="https://github.com/ShinningPikachu" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/jinheng-lin/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
