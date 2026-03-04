import { motion } from "framer-motion";
import { Building2, CheckCircle2, Database, FileText, Gauge, Network, Users } from "lucide-react";

export function About() {
    return (
        <section id="nosotros" className="py-24 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-extrabold text-brand-primary dark:text-brand-accent sm:text-4xl">
                        ¿Qué es el <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">SIAP</span>?
                    </h2>
                    <div className="mt-4 h-1 w-20 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {/* Intro Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-brand-primary border-y border-r border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            Es un sistema diseñado para alcanzar la máxima eficacia y eficiencia en la <strong>planificación y el control del personal</strong>.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            El propósito es claro: vincular y articular a todos los organismos públicos en una red integrada, promoviendo una centralización normativa y, al mismo tiempo, una descentralización operativa. Esto fortalece a todas las entidades participantes y optimiza la gestión en cada nivel del sector público.
                        </p>
                    </motion.article>

                    {/* Pillars Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-brand-accent border-y border-r border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <h3 className="flex items-center gap-3 text-xl font-bold text-brand-secondary dark:text-blue-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="bg-brand-accent/10 p-2 rounded-lg text-brand-accent">
                                <Network className="h-5 w-5" />
                            </div>
                            Elementos Esenciales de Gestión
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">El SIAP administra y controla tres pilares fundamentales:</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                                <Network className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Estructura y Puestos</strong>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Administración de Unidades y Estructuras Organizativas.</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                                <Users className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Recursos Humanos</strong>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Gestión integral de las personas en la administración pública.</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                                <FileText className="h-6 w-6 text-brand-accent shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Liquidación</strong>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Procesamiento eficiente de la Liquidación de Haberes.</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                            El <strong>SIAP</strong> no es solo un liquidador de sueldos; es un sistema <strong>INTEGRAL</strong>. Va más allá de la cuestión numérica, centrándose en el análisis cualitativo del personal.
                        </p>
                    </motion.article>

                    {/* Structure Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-brand-primary border-y border-r border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <h3 className="flex items-center gap-3 text-xl font-bold text-brand-secondary dark:text-blue-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="bg-brand-primary/10 p-2 rounded-lg text-brand-primary dark:text-brand-accent">
                                <Building2 className="h-5 w-5" />
                            </div>
                            Estructura y Dependencia
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            La administración integral está a cargo de la <strong>Dirección General de Coordinación del Sector Público</strong>, dependiente de la Subsecretaría Legal y Técnica. Esta unidad actúa como organismo ejecutor, garantizando su correcta implementación.
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-100 dark:border-slate-800/50">
                            <p className="font-semibold text-slate-900 dark:text-white mb-4">La Unidad Coordinadora gestiona:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Administración de personal",
                                    "Estructura y procedimientos",
                                    "Licencias",
                                    "Liquidación de haberes",
                                    "Coordinación de sectores intervinientes"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <CheckCircle2 className="h-5 w-5 text-brand-primary dark:text-brand-accent shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.article>

                    {/* Impact Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-l-emerald-500 border-y border-r border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <h3 className="flex items-center gap-3 text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                                <Gauge className="h-5 w-5" />
                            </div>
                            Aportes a la Reforma del Estado
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            El sistema fue diseñado para contribuir directamente a la mejora de los Recursos Humanos con dos aportes principales:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                                <Gauge className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Mayor Eficiencia</strong>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">En el control y la planificación de los recursos humanos.</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                                <Database className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Información Confiable</strong>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Incremento en la validez y oportunidad de la información para la toma de decisiones políticas.</span>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                </div>

            </div>
        </section>
    );
}
