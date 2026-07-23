import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/30 mb-6">
          <span className="material-symbols-outlined text-primary text-[40px]">
            search_off
          </span>
        </div>
        <h1 className="font-headline text-headline-lg font-weight-headline-lg text-on-surface mb-3">
          Página no encontrada
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-8 py-4 font-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">home</span>
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
