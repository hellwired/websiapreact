import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
                {children}
            </main>
            <Footer />
        </div>
    );
}
