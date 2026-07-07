"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * GalleryGrid (Client Component)
 *
 * Renders clickable image placeholders and manages lightbox state.
 * Lightbox: shadcn Dialog with keyboard navigation (ESC, ← →).
 */
function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const selectedIndex = selected
    ? GALLERY_ITEMS.findIndex((item) => item.id === selected.id)
    : -1;

  const navigate = useCallback(
    (dir: "prev" | "next") => {
      if (selectedIndex === -1) return;
      const next =
        dir === "prev"
          ? (selectedIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
          : (selectedIndex + 1) % GALLERY_ITEMS.length;
      setSelected(GALLERY_ITEMS[next]);
    },
    [selectedIndex]
  );

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {GALLERY_ITEMS.map((item, index) => (
          <AnimatedWrapper
            key={item.id}
            delay={Math.min(index * 0.06, 0.3)}
          >
            <button
              onClick={() => setSelected(item)}
              className={cn(
                "group relative w-full aspect-[4/3] rounded-xl overflow-hidden",
                "border border-border/60 bg-slate-50",
                "hover:border-primary/30 hover:shadow-md",
                "transition-all duration-250 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              )}
              aria-label={`View ${item.label} — ${item.category}`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className={cn("object-cover", item.objectPositionClass)}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Category badge */}
              <div className="absolute top-2 left-2">
                <span className="inline-block px-2 py-0.5 rounded-md bg-white/80 backdrop-blur-sm text-[9px] font-semibold text-slate-500 border border-slate-200/60">
                  {item.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </AnimatedWrapper>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent
          className="max-w-[95vw] md:max-w-[80vw] h-[80vh] md:h-[85vh] w-full p-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl [&>button]:text-white/70 [&>button]:hover:text-white [&>button]:top-4 [&>button]:right-4 [&>button]:bg-black/40 [&>button]:backdrop-blur-md [&>button]:rounded-full [&>button]:p-2 [&>button]:w-10 [&>button]:h-10 [&>button>svg]:w-5 [&>button>svg]:h-5 transition-all duration-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") navigate("prev");
            if (e.key === "ArrowRight") navigate("next");
          }}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>
              {selected?.label ?? "Gallery"} — {selected?.category}
            </DialogTitle>
          </DialogHeader>

          {/* Image area */}
          <div className="relative w-full h-full flex items-center justify-center bg-zinc-950">
            {selected && (
              <Image
                src={selected.image}
                alt={selected.label}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>

          {/* Nav controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/70 hover:scale-105 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/70 hover:scale-105 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium tracking-wide">
              {selectedIndex + 1} / {GALLERY_ITEMS.length}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/**
 * GallerySection — Section 6
 *
 * "Inside Our Clinic" — grid of image placeholders with lightbox.
 * The section is a Server Component; GalleryGrid is the Client Component
 * that manages interactive lightbox state.
 */
export function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding bg-slate-50"
      aria-labelledby="gallery-heading"
    >
      <div className="container-padded">

        <AnimatedWrapper>
          <SectionHeading
            label="Inside Our Clinic"
            heading="A Clean, Welcoming Space"
            subheading="Designed for your comfort — from the moment you walk in."
            id="gallery-heading"
          />
        </AnimatedWrapper>

        <div className="mt-14">
          <GalleryGrid />
        </div>

      </div>
    </section>
  );
}
