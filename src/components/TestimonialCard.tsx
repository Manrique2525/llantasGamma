interface TestimonialCardProps {
  name: string;
  company: string;
  role?: string;
  text: string;
  rating?: number;
  avatarUrl?: string;
  metric?: string;
  metricLabel?: string;
}

export default function TestimonialCard({
  name,
  company,
  role,
  text,
  rating = 5,
  metric,
  metricLabel,
}: TestimonialCardProps) {
  return (
    <div className="p-lg bg-surface-container ghost-border flex flex-col relative group hover:border-primary/50 transition-all duration-300">
      {metric && (
        <div className="absolute -top-3 right-4 bg-primary text-on-primary px-3 py-1 text-label-sm font-label-bold uppercase tracking-wider">
          {metric}
        </div>
      )}
      <div className="flex items-center gap-1 mb-md">
        {[...Array(rating)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-primary text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
        <span className="text-label-sm text-on-surface-variant ml-1">
          {rating}.0
        </span>
      </div>
      <p className="text-body-md text-on-surface-variant mb-lg flex-1 leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      {metricLabel && (
        <div className="mb-md p-3 bg-surface-container-low border-l-2 border-primary">
          <span className="text-label-sm font-label-bold text-primary">
            Resultado: {metricLabel}
          </span>
        </div>
      )}
      <div className="flex items-center gap-3 pt-md border-t border-outline-variant/30">
        <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary font-headline font-bold text-lg flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="font-label-bold text-on-surface truncate">
            {name}
          </div>
          <div className="text-label-sm text-on-surface-variant truncate">
            {role ? `${role}, ` : ""}
            {company}
          </div>
        </div>
      </div>
    </div>
  );
}
