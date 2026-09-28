import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { XpSearch, XpSparkles, XpTruck } from '@/components/icons'
import { steps } from '@/data/marketing'

const stepIcons = [XpSearch, XpSparkles, XpTruck] as const

export function HowItWorks() {
  return (
    <section id="producto" className="section">
      <div className="container-page flex flex-col gap-16 lg:gap-20">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Del pedido a la puerta de tu cocina, en tres pasos"
          description="Xupply es el puente entre lo que tu restaurante necesita y lo que el proveedor tiene disponible hoy."
        />

        <ol className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <li key={step.title}>
                <Card className="h-full gap-0 transition-shadow hover:shadow-lg hover:shadow-brand/5">
                  <CardHeader className="gap-5">
                    <div className="flex items-center justify-between">
                      <span className="bg-brand-soft text-brand inline-flex size-12 items-center justify-center rounded-2xl">
                        <Icon size={22} />
                      </span>
                      <span className="text-muted-foreground font-heading text-3xl font-semibold">
                        0{index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
