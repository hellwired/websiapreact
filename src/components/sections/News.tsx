import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

const newsItems = [
    {
        id: 1,
        title: "Cronograma de Pagos - Sector Docente",
        date: "Acreditación desde el día Jueves 15",
        category: "Haberes",
        snippet: "Se informa que ya se encuentran disponibles los recibos de sueldo para el personal docente correspondiente a las liquidaciones suplementarias.",
    },
    {
        id: 2,
        title: "Actualización de Legajos Digitales",
        date: "Nuevo procedimiento a partir de Marzo",
        category: "Administrativo",
        snippet: "Nueva normativa para la carga de títulos y capacitaciones. Ahora el trámite se realiza de forma 100% online a través del portal de autogestión del SIAP.",
    },
    {
        id: 3,
        title: "Cronograma de Pagos - Administración Central",
        date: "Acreditación Jueves 30",
        category: "Haberes",
        snippet: "El Ministerio de Hacienda comunica el cronograma de pago de sueldos para los empleados de la Administración Pública Provincial.",
    }
];

export function News() {
    return (
        <section id="novedades" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Novedades y Circulares
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Manténgase informado con los últimos avisos, cronogramas de pagos y comunicaciones oficiales de la administración.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0 w-full md:w-auto">
                        Ver todas las novedades
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all dark:bg-slate-900 group"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue dark:bg-blue-500/10 dark:text-blue-400 uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-brand-red font-medium mb-4">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>{item.date}</span>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                                    {item.snippet}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-semibold text-brand-blue dark:text-blue-400 hover:text-brand-blue/80 dark:hover:text-blue-300"
                                >
                                    Leer comunicado
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
