import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/sobre", label: "Sobre nós" },
  { to: "/clientes", label: "Para empresas" },
  { to: "/parceiros", label: "Seja parceiro" },
  { to: "/gestores", label: "Gestores" },
  { to: "/faq", label: "FAQ" },
];

export function NavBlue() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/10 bg-[#060d1f]/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link to="/" className="flex items-baseline gap-0.5" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold tracking-tight text-white">Ótmow</span>
          <span className="size-1.5 translate-y-[-2px] rounded-full bg-[#3674EF]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-medium tracking-wide text-slate-300 transition-colors hover:text-white [&.active]:text-[#4EB7FF]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.otmow.com/pt-BR/loan/intake/details"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#3674EF] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[#2f63d6]"
          >
            Antecipe agora
          </a>
        </div>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#060d1f]/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://app.otmow.com/pt-BR/loan/intake/details"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#3674EF] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Antecipe agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
