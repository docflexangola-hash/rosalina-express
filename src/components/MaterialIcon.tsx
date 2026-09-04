export function MaterialIcon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined select-none ${filled ? "material-symbols-filled" : ""} ${className}`}
    >
      {name}
    </span>
  );
}
