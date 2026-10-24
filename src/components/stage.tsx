"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type StageImage = {
  key: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Photographs fill the stage; screens and wide group shots sit whole on the dark field. */
  fit: "cover" | "contain";
};

/**
 * The fixed half of the page. Every element in the reading column that carries a
 * `data-stage="<key>"` attribute asks for its picture; the last one above the middle of
 * the screen wins. Without script the first picture simply stays.
 */
export function Stage({ images }: { images: StageImage[] }) {
  const [active, setActive] = useState(images[0].key);
  const [ready, setReady] = useState(false);

  // Keep the first paint to one picture; fetch the rest once the page is idle.
  useEffect(() => {
    const onLoad = () => setReady(true);
    if (document.readyState === "complete") {
      const timer = setTimeout(onLoad, 0);
      return () => clearTimeout(timer);
    }
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.5;
      let key = images[0].key;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) key = node.dataset.stage ?? key;
      }
      setActive(key);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [images]);

  return (
    <aside
      aria-label="Photographs"
      className="relative h-[60svh] bg-field text-field-ink lg:sticky lg:top-0 lg:h-svh"
    >
      {images.map((image, index) => {
        if (index > 0 && !ready) return null;
        const isActive = image.key === active;
        return (
          <figure
            key={image.key}
            data-active={isActive}
            aria-hidden={!isActive}
            className={`stage-figure absolute inset-0 m-0 ${index > 0 ? "max-lg:hidden" : ""}`}
          >
            {image.fit === "cover" ? (
              <>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                  className="stage-photo object-cover object-[50%_20%]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/70 px-6 py-3 text-small text-field-ink sm:px-10 lg:px-8">
                  {image.caption}
                </figcaption>
              </>
            ) : (
              <div className="flex h-full flex-col justify-center gap-6">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-6 text-lead text-field-ink sm:px-10 lg:px-8">
                  {image.caption}
                </figcaption>
              </div>
            )}
          </figure>
        );
      })}
      <Link
        href="#top"
        aria-label="Avery Doan, back to the top"
        className="absolute left-6 top-6 z-10 block size-14 sm:left-10 lg:left-8"
      >
        <Image src="/images/monogram.webp" alt="" width={256} height={256} className="size-full" />
      </Link>
    </aside>
  );
}
