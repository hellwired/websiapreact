import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-20 pb-32">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="mx-auto max-w-4xl text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <span className="rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue dark:bg-blue-500/10 dark:text-blue-400 border border-brand-blue/20 dark:border-blue-500/20">
                            Transformación Digital en Misiones
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
                    >
                        Gestión Eficiente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-500">Recursos Humanos</span> y Liquidación de Haberes
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl"
                    >
                        Optimizando la administración pública en Posadas, Misiones, con tecnología ágil, seguridad y transparencia para todos los trabajadores provinciales.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white text-lg h-12 px-8">
                            Acceso a Autogestión
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8">
                            Conocer más
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
