import { MapPin, Phone, Clock, FileText } from "lucide-react";
import { Button } from "../ui/Button";

export function Contact() {
    return (
        <section id="contacto" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Atención Institucional
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Información centralizada sobre nuestras oficinas y vías de comunicación oficial para trámites administrativos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">

                    {/* Información y Vías */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-brand-blue dark:text-blue-400 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                                Vías de Comunicación
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-slate-200 dark:bg-slate-800 p-2.5 rounded-lg text-slate-700 dark:text-slate-300">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Dirección Central</h4>
                                        <a href="https://maps.app.goo.gl/xXfcchbcn8mBVL3c6" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 mt-1 hover:text-brand-blue dark:hover:text-blue-400 block transition-colors">
                                            Sarmiento 1835<br />
                                            Posadas, Misiones, Argentina. CP N3301
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-slate-200 dark:bg-slate-800 p-2.5 rounded-lg text-slate-700 dark:text-slate-300">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Central Telefónica</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            0800-XXX-SIAP (Línea gratuita)<br />
                                            0376-4XXXXXX (Línea directa)
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-slate-200 dark:bg-slate-800 p-2.5 rounded-lg text-slate-700 dark:text-slate-300">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">Horario de Trámites</h4>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            Lunes a Viernes de 07:00 a 13:00 hs.<br />
                                            Días hábiles administrativos.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                                <Button asChild className="w-full bg-brand-red hover:bg-[#a01f1f] text-white">
                                    <a href="https://sueldos.siap.misiones.gob.ar/Ingreso/" target="_blank" rel="noopener noreferrer">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Ir al Portal de Recibos
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mapa Interactivo */}
                    <div className="lg:col-span-7 h-full min-h-[400px]">
                        <div className="h-full w-full bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 relative shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.8332223304808!2d-55.8938172!3d-27.365317299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be337817df63%3A0x7ab729198f57392b!2sSarmiento%201835%2C%20N3301%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1772569672196!5m2!1ses!2sar"
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Central SIAP Misiones en Google Maps"
                            >
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
