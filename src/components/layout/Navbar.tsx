import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Quiénes Somos", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Novedades y Circulares", href: "#novedades" },
    { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80 transition-colors">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                {/* Brand / Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Logo SIAP Misiones"
                        className="h-10 w-auto object-contain cursor-pointer dark:brightness-0 dark:invert transition-all"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-6">
                        <ThemeToggle />
                        <Button asChild className="hidden lg:inline-flex bg-brand-secondary hover:bg-brand-secondary/90 text-white shadow-sm transition-colors">
                            <a href="https://sueldos.siap.misiones.gob.ar/Ingreso/" target="_blank" rel="noopener noreferrer">
                                Ver Mis Recibos
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <ul className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block hover:text-brand-primary dark:hover:text-brand-accent"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button asChild className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white">
                                <a href="https://sueldos.siap.misiones.gob.ar/Ingreso/" target="_blank" rel="noopener noreferrer">
                                    Ver Mis Recibos
                                </a>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
