import {
  XpArrowRight,
  XpCircleCheck,
  XpTruck,
  XpStar,
} from '@/components/icons'
import { HowItWorksDemo } from '@/components/landing/how-it-works-demo'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background gradients */}
      <div
        aria-hidden
        className="from-brand/12 via-brand-soft/40 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b to-transparent"
      />
      <div
        aria-hidden
        className="bg-brand/10 absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-fresh/10 absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent"
      />

      <div className="container-page relative flex flex-col items-center text-center gap-10 pt-12 pb-24 sm:pt-16 lg:pt-20 lg:pb-32">
        
        {/* Floating Element Left */}
        <div className="absolute left-0 xl:-left-12 top-28 hidden lg:flex flex-col gap-2 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/70 shadow-2xl p-4 -rotate-6 animate-in slide-in-from-left-8 fade-in duration-1000">
          <div className="flex items-center gap-3">
            <span className="bg-muted/80 flex size-10 items-center justify-center rounded-full text-xl shadow-inner">🍅</span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Precios mayoristas</span>
              <span className="text-xs text-muted-foreground">+1.200 productos</span>
            </div>
          </div>
        </div>

        {/* Floating Element Right */}
        <div className="absolute right-0 xl:-right-12 top-36 hidden lg:flex flex-col gap-2 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/70 shadow-2xl p-4 rotate-6 animate-in slide-in-from-right-8 fade-in duration-1000 delay-150">
          <div className="flex items-center gap-3">
            <span className="bg-brand/10 flex size-10 items-center justify-center rounded-full text-brand shadow-inner">
              <XpTruck size={20} />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Logística GPS</span>
              <span className="text-xs text-muted-foreground">Rutas en vivo</span>
            </div>
          </div>
        </div>

        {/* Floating Element Bottom Left */}
        <div className="absolute left-10 xl:left-0 bottom-32 hidden lg:flex items-center gap-3 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/70 shadow-xl p-3.5 rotate-3 animate-in fade-in zoom-in duration-1000 delay-300">
           <div className="flex -space-x-2">
            {['🍗', '🥬', '🧀'].map((emoji) => (
              <span key={emoji} className="bg-muted flex size-8 items-center justify-center rounded-full border border-background text-xs shadow-sm">
                {emoji}
              </span>
            ))}
          </div>
          <div className="flex flex-col text-left">
            <span className="flex items-center gap-1 text-sm font-semibold">
              4.8 <XpStar size={13} className="text-clay" fill="currentColor" />
            </span>
            <span className="text-muted-foreground text-xs">Proveedores top</span>
          </div>
        </div>

        {/* Floating Element Bottom Right */}
        <div className="absolute right-10 xl:right-0 bottom-24 hidden lg:flex items-center gap-3 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/70 shadow-xl p-4 -rotate-3 animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="flex items-center gap-3">
            <span className="bg-fresh/10 text-fresh flex size-10 items-center justify-center rounded-full shadow-inner">
              <XpCircleCheck size={20} />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Precios de mayorista</span>
              <span className="text-xs text-muted-foreground">Comparación en vivo</span>
            </div>
          </div>
        </div>

        <Badge variant="secondary" className="h-8 gap-2 px-4 text-sm relative z-10">
          <span className="bg-fresh size-2 rounded-full" />
          La plataforma para restaurantes y proveedores
        </Badge>

        <div className="flex flex-col items-center gap-6 w-full max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl leading-[1.15] font-bold tracking-tight sm:text-6xl lg:text-[5rem] lg:leading-[1.1]">
            Conectamos tu restaurante con los{' '}
            <span className="text-gradient">mejores proveedores</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg sm:text-xl leading-relaxed">
            Catálogo mayorista, pedidos, inventario, facturación electrónica y logística en un
            solo lugar. Olvídate de los pedidos por WhatsApp y del Excel que nadie actualiza.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-4 relative z-10">
          <Button
            asChild
            variant="brand"
            size="xl"
            data-icon="inline-end"
            className="w-full sm:w-auto"
          >
            <a href="#registro">
              Crear cuenta gratis
              <XpArrowRight size={18} />
            </a>
          </Button>
          <HowItWorksDemo />
        </div>

        <ul className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm mt-6 relative z-10">
          {['Sin tarjeta de crédito', '14 días de prueba', 'Soporte en Bucaramanga'].map((item) => (
            <li key={item} className="flex items-center gap-2 font-medium">
              <XpCircleCheck size={18} className="text-fresh" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
