export default function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-center">
        <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">
          local_fire_department
        </span>
        <span className="text-label-sm font-label-bold uppercase tracking-wider">
          <span className="text-on-surface-variant">Consulta disponibilidad</span>
        </span>
        <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">
          local_fire_department
        </span>
      </div>
    </div>
  );
}
