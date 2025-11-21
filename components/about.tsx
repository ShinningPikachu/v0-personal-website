import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-muted-foreground">About</h2>
        <div className="mb-8 space-y-4">
          <h3 className="text-lg font-medium text-foreground">Languages</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2">
              Chinese: Native
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              English: IELTS 7.0
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Spanish: C1
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Catalan: C1
            </Badge>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-foreground">Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 rounded-lg border border-border bg-card p-4">
              <h4 className="font-medium text-foreground">Energy Optimization</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Developed an optimization system using local search algorithms to improve resource efficiency between
                energy generators and users.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border bg-card p-4">
              <h4 className="font-medium text-foreground">File Manager Program</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Implemented file creation, deletion, and search functionalities using efficient data structures with a
                modular architecture.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border bg-card p-4">
              <h4 className="font-medium text-foreground">Orbital Bullet Replication</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Developed a 3D level replication in Unity, focusing on character movement, enemy AI, and environmental
                physics on a cylindrical map.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border bg-card p-4">
              <h4 className="font-medium text-foreground">Agent Automation</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Designed a multi-agent system to achieve cooperative goals in distributed environments, exploring
                communication strategies.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-medium text-foreground">Extracurricular Activities</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">HackUPC 2024:</span> Created a random city map generator
                and visual travel simulator for the TravelPerk challenge.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Welcome Party for UPC Chinese Freshmen:</span> Coordinated
                a large-scale welcome event for 100+ students with support from the Chinese Consulate.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Blind Date Event:</span> Organized a two-week social event
                with 50 participants and 20 volunteers, ensuring smooth logistics and engagement.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
