import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    <div className="space-y-4 md:col-span-2">
                        <div className="flex items-center gap-4">
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="Logo SIAP Misiones"
                                className="h-12 w-auto object-contain mb-4 dark:brightness-0 dark:invert grayscale opacity-80"
                            />
                        </div>
                        <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
                            Sistema Integrado de Administración de Personal.<br />
                            Gobierno de la Provincia de Misiones.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a href="#" className="hover:text-brand-primary dark:hover:text-brand-accent">Inicio</a></li>
                            <li><a href="#nosotros" className="hover:text-brand-primary dark:hover:text-brand-accent">Quiénes Somos</a></li>
                            <li><a href="#servicios" className="hover:text-brand-primary dark:hover:text-brand-accent">Servicios</a></li>
                            <li><a href="#novedades" className="hover:text-brand-primary dark:hover:text-brand-accent">Novedades y Circulares</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-secondary" />
                                <span>Posadas, Misiones, Argentina</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-brand-secondary" />
                                <span>3764446434</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-brand-secondary" />
                                <span>contacto@siap.misiones.gob.ar</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>&copy; {currentYear} Sistema Integrado de Administración de Personal - Misiones. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
