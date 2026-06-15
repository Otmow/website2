import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lightweight YouTube facade. Renders only the thumbnail image + a play button
 * until the user clicks — at which point the real (heavy) YouTube iframe is
 * injected with autoplay. This keeps ~1 MB+ of YouTube player JS off the initial
 * page load, the same lazy approach as LazyVideo.
 *
 * SSR-safe: the thumbnail is a plain <img>; the iframe only exists after a
 * client-side click.
 */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproduzir vídeo: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3674EF] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="size-7 translate-x-0.5 fill-white text-white" />
          </span>
        </button>
      )}
    </div>
  );
}
