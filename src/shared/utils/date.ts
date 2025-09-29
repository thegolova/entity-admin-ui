export const toDateInputValue = (raw?: string | null): string => {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export const fromDateInputValue = (v: string): string | null => {
  if (!v) return null;
  return new Date(`${v}T00:00:00`).toISOString();
}