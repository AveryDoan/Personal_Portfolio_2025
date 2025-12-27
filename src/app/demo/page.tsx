import PortfolioHero from "@/components/ui/portfolio-hero";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import Link from "next/link";

const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "backend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "UI UX design",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "video editing",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function DemoPage() {
  return (
    <div className="flex flex-col gap-20 bg-background text-foreground">
      <div className="w-full">
        <PortfolioHero />
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Animated Slideshow</h2>
        <div className="rounded-3xl border border-dashed border-border p-8 min-h-[600px] flex items-center justify-center">
          <HoverSlider className="w-full">
            <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
              <div className="flex flex-col space-y-2 md:space-y-4">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="h-96 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                {SLIDES.map((slide, index) => (
                  <HoverSliderImage
                    key={slide.id}
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="size-full object-cover"
                    loading="eager"
                  />
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </div>
      </section>

      <div className="px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Explore more components or{" "}
          <Link className="underline" href="/">
            Return home
          </Link>
        </p>
      </div>
    </div>
  );
}
