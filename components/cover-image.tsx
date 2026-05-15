"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoverImageProps {
  src: string;
  alt: string;
}

export function CoverImage({ src, alt }: CoverImageProps) {
  const [isTall, setIsTall] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    if (imgRef.current) {
      // If natural height is significantly larger than the display height or a comfortable threshold
      if (imgRef.current.naturalHeight > 800) {
        setIsTall(true);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="w-full relative rounded-xl overflow-hidden border border-border bg-muted/30 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className="max-w-full max-h-[600px] object-contain w-auto h-auto"
        />
      </div>
      
      {isTall && (
        <div className="flex justify-center">
          <Button variant="outline" size="sm" asChild className="gap-2 text-muted-foreground hover:text-primary">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View Full Image
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
