import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { primaryButton } from './buttonStyles'

// Set at build time: from .env.development locally,
// and from the Cloudflare build variable in production
const API_URL = import.meta.env.VITE_API_URL

// The JSON that GET /api/hello sends back (see Program.cs in the API repo)
type HelloResponse = {
  message: string
  serverTime: string
}

// Every state the demo can be in. Each state carries only the data it needs:
// `data` exists only after a reply, `reason` only after a failure.
type PingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: HelloResponse; seconds: string }
  | { status: 'error'; reason: string }

export default function ApiPing() {
  const { t } = useTranslation()
  const [ping, setPing] = useState<PingState>({ status: 'idle' })

  // Runs on click, not when the page opens, so the free server is only
  // woken up when a visitor actually asks for it
  async function sendPing() {
    setPing({ status: 'loading' })
    const startedAt = performance.now() // a stopwatch, in milliseconds

    try {
      const response = await fetch(`${API_URL}/api/hello`, {
        headers: { Accept: 'application/json' }, // ask for JSON back
      })
      // fetch only throws when there's no reply at all, so check the status code too
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const data: HelloResponse = await response.json()
      const seconds = ((performance.now() - startedAt) / 1000).toFixed(1)
      setPing({ status: 'success', data, seconds })
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error)
      setPing({ status: 'error', reason })
    }
  }

  const isLoading = ping.status === 'loading'

  return (
    <div className="max-w-2xl rounded-xl bg-slate-50 p-6">
      <p className="leading-relaxed">{t('projects.pingIntro')}</p>
      <p className="mt-2 text-sm text-slate-500">{t('projects.pingNote')}</p>

      <button
        type="button"
        onClick={sendPing}
        disabled={isLoading}
        className={`mt-5 ${primaryButton} disabled:cursor-wait disabled:opacity-60`}
      >
        {isLoading ? t('projects.pinging') : t('projects.ping')}
      </button>

      {/* aria-live: screen readers read out whatever appears in here */}
      <div aria-live="polite" className="text-sm">
        {ping.status === 'success' && (
          <div className="mt-4">
            <p className="font-medium text-emerald-700">
              {t('projects.pingReply', { seconds: ping.seconds })}
            </p>
            {/* The JSON the API sent back, pretty-printed */}
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
              {JSON.stringify(ping.data, null, 2)}
            </pre>
          </div>
        )}
        {ping.status === 'error' && (
          <p className="mt-4 text-red-700">{t('projects.pingError', { reason: ping.reason })}</p>
        )}
      </div>
    </div>
  )
}
