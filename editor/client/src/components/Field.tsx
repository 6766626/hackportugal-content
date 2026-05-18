import type { ReactNode } from 'react'

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs uppercase tracking-wide text-ink/60 font-medium">{label}</span>
        {hint && <span className="text-xs text-ink/40">{hint}</span>}
      </div>
      {children}
    </label>
  )
}
