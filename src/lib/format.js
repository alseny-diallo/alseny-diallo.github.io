const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

// '2023-02' => "Feb 2023" (en) / "Févr. 2023" (fr)
export function formatMonth(value, lang) {
  const [year, month] = value.split('-').map(Number)
  const date = new Date(year, month - 1)
  return capitalize(new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(date))
}

// "start — end" period; an empty `end` shows `presentLabel` instead
export function formatPeriod(start, end, presentLabel, formatDate = String) {
  return `${formatDate(start)} — ${end ? formatDate(end) : presentLabel}`
}

// 0 => "01"
export const padIndex = (index) => String(index + 1).padStart(2, '0')
