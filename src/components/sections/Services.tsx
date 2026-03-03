import { motion } from "framer-motion";
import { Calculator, FileText, BadgeCheck, ShieldCheck } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Liquidación de Sueldos",
        description: "Procesamiento exacto y a tiempo de haberes para los agentes de la administración pública provincial.",
        icon: Calculator,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        id: 2,
        title: "Legajo Digital",
        description: "Gestión centralizada y segura de la documentación y trayectoria laboral de cada empleado.",
        icon: FileText,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        id: 3,
        title: "Certificaciones",
        description: "Emisión ágil de certificados de servicios, haberes y otros documentos oficiales requeridos.",
        icon: BadgeCheck,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        id: 4,
        title: "Auditoría de Personal",
        description: "Control continuo y transparente de los procesos administrativos y asistencia en las dependencias.",
        icon: ShieldCheck,
        color: "text-brand-red",
        bgColor: "bg-brand-red/10",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function Services() {
    return (
        <section id="servicios" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Servicios Principales
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Nuestra plataforma integra las funciones clave para garantizar eficiencia y transparencia en la gestión de recursos humanos de Misiones.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-950 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor}`}>
                                <service.icon className={`h-7 w-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
