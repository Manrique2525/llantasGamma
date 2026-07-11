interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  badgeIcon = "star",
  title,
  titleHighlight,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl mb-xl ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm`}
        >
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {badgeIcon}
          </span>
          <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-on-surface-variant">{subtitle}</p>
      )}
    </div>
  );
}
