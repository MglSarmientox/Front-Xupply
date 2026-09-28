import { toast } from 'sonner'

import { XpArrowRight, XpCheck, XpPackage, XpStore } from '@/components/icons'
import { SectionHeading } from '@/components/shared/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { audiences } from '@/data/marketing'

const audienceIcons = { XpStore, XpPackage } as const

export function Audiences() {
  const notify = (title: string) =>
    toast.success(title, {
      description: 'Un asesor de Xupply te escribe hoy mismo para completar el registro.',
    })

  return (
    <section id="audiencias" className="bg-muted/30 section border-y">
      <div className="container-page flex flex-col gap-16 lg:gap-20">
        <SectionHeading
          eyebrow="Dos lados, una sola plataforma"
          title="Restaurantes y proveedores trabajan mejor juntos"
          description="Si compras alimentos ahorras tiempo y dinero. Si los vendes, abres tu mercado a toda la ciudad."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {audiences.map((item) => {
            const Icon = audienceIcons[item.icon]
            return (
              <Card
                key={item.id}
                id={item.id}
                className="relative gap-0 overflow-hidden [--card-spacing:--spacing(8)] transition-shadow hover:shadow-xl hover:shadow-brand/10"
              >
                <div
                  aria-hidden
                  className="from-brand/12 pointer-events-none absolute inset-x-0 -top-28 h-52 bg-linear-to-b to-transparent"
                />
                <CardHeader className="gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-brand inline-flex size-12 items-center justify-center rounded-2xl text-white shadow-md shadow-brand/25">
                      <Icon size={22} />
                    </span>
                    <Badge variant="secondary">{item.eyebrow}</Badge>
                  </div>
                  <CardTitle className="max-w-sm text-2xl leading-snug sm:text-[1.7rem]">
                    {item.title}
                  </CardTitle>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                  <ul className="flex flex-col gap-4">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3.5">
                        <span className="bg-fresh/12 text-fresh mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full">
                          <XpCheck size={14} />
                        </span>
                        <span className="text-foreground/85 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="brand"
                    size="lg"
                    data-icon="inline-end"
                    className="self-start"
                    onClick={() => notify(item.cta)}
                  >
                    {item.cta}
                    <XpArrowRight size={18} />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
