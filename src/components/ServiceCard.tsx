interface ServiceCardProps {
  icon: string;
  title: string;
  price: string;
  cta?: string;
}

export default function ServiceCard({
  icon,
  title,
  price,
  cta = "Agendar",
}: ServiceCardProps) {
  return (
    <div className="group bg-surface ghost-border p-lg text-center hover:bg-primary-container transition-all duration-300 cursor-pointer">
      <div className="w-16 h-16 mx-auto mb-3 bg-surface-variant flex items-center justify-center rounded-full group-hover:bg-on-primary transition-colors">
        <span className="material-symbols-outlined text-primary group-hover:text-primary-container text-4xl">
          {icon}
        </span>
      </div>
      <h4 className="font-headline text-[18px] group-hover:text-on-primary transition-colors">
        {title}
      </h4>
      <p className="text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant mt-1 group-hover:text-on-primary/70 transition-colors">
        {price}
      </p>
      <span className="inline-block mt-3 text-label-sm font-label-bold text-primary group-hover:text-on-primary uppercase transition-colors">
        {cta} →
      </span>
    </div>
  );
}
