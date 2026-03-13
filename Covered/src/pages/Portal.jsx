import { useState } from 'react'
import { supabase } from '../lib/supabase'
import TermsModal from './TermsModal'

const WIFI_PASSWORD = 'cvsu2026'

export default function Portal() {
  const [form, setForm] = useState({ firstname: '', lastname: '', mi: '', email: '' })
  const [status, setStatus] = useState('idle')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'mi' && value.length > 1) return
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    await supabase.from('entries').insert({
      firstname: form.firstname,
      lastname: form.lastname,
      mi: form.mi || '—',
      email: form.email,
      device: navigator.userAgent.substring(0, 150),
    })

    setTimeout(() => setStatus('success'), 1600)
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#0a3622] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#198754] flex items-center justify-center mb-5 shadow-lg">
          <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
            <path d="M10 22l9 9 15-16" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-white text-2xl font-extrabold mb-2">Registration Complete!</h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
          Your account has been verified. Connect to <span className="text-white font-semibold">CvSU_StudentsNet</span> using the password below.
        </p>

        <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 max-w-xs w-full mb-4">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">WiFi Password</p>
          <p className="text-white font-mono font-black text-3xl tracking-widest">{WIFI_PASSWORD}</p>
          <p className="text-white/30 text-[11px] mt-3">Enter this in your WiFi settings to connect</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-xs w-full">
          <p className="text-white/40 text-xs leading-relaxed">
            Go to <span className="text-white/60">Settings → WiFi → CvSU_StudentsNet</span><br/>
            and enter the password above to start your session.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/campus bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* dark overlay so text stays readable */}
      <div className="min-h-screen flex flex-col bg-black/40">

        <header className="bg-[#1a4d2e]/90 backdrop-blur-sm px-5 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <img src="/cvsu logo.png" alt="CvSU Logo" className="w-9 h-9 object-contain flex-shrink-0" />
            <div>
              <p className="text-white font-black text-base leading-none tracking-tight">CvSU Bacoor</p>
              <p className="text-white/50 text-[10px] leading-none mt-0.5">Campus Free WiFi Program</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[#f5c518] font-black text-sm tracking-widest">FREE</span>
            <p className="text-white/50 text-[10px] leading-none mt-0.5 hidden sm:block">Students Network</p>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#1a4d2e] via-[#2d7a4f] to-[#f5c518]" />
            <div className="px-6 sm:px-10 py-8">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                  <img src="/cvsu logo.png" alt="CvSU" className="w-12 h-12 object-contain" />
                </div>
              </div>
              <h1 className="text-center text-[#1a4d2e] font-extrabold text-2xl sm:text-3xl mb-1">Connect to Free WiFi</h1>
              <p className="text-center text-gray-500 text-sm mb-7">
                Network: <span className="text-[#1a4d2e] font-semibold">CvSU_StudentsNet</span>
              </p>
              <hr className="border-gray-100 mb-6" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input
                      type="text" name="firstname" value={form.firstname} onChange={handleChange}
                      placeholder="Juan" required autoComplete="off"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 outline-none focus:border-[#1a4d2e] focus:bg-white transition placeholder-gray-400"
                    />
                  </div>
                  <div className="w-16">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">M.I.</label>
                    <input
                      type="text" name="mi" value={form.mi} onChange={handleChange}
                      placeholder="D." autoComplete="off"
                      className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-800 bg-gray-50 outline-none focus:border-[#1a4d2e] focus:bg-white transition placeholder-gray-400 text-center"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text" name="lastname" value={form.lastname} onChange={handleChange}
                    placeholder="dela Cruz" required autoComplete="off"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 outline-none focus:border-[#1a4d2e] focus:bg-white transition placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="school or personal email" required autoComplete="off"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 outline-none focus:border-[#1a4d2e] focus:bg-white transition placeholder-gray-400"
                  />
                  <p className="text-[11px] text-gray-400 mt-1.5">You may use your school or personal email address.</p>
                </div>

                <button
                  type="submit" disabled={status !== 'idle' || !termsAccepted}
                  className="w-full bg-[#1a4d2e] hover:bg-[#143d25] text-white font-bold rounded-xl py-3.5 text-base tracking-wide transition active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                >
                  {status === 'loading' && (
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                  )}
                  {status === 'idle' ? 'Get WiFi Access' : 'Verifying...'}
                </button>
              </form>

              <div className="mt-4 space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => !termsAccepted ? setShowTerms(true) : setTermsAccepted(false)}
                    className="mt-0.5 w-4 h-4 accent-[#1a4d2e] flex-shrink-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-gray-500 leading-relaxed">
                    I agree to the{' '}
                    <button type="button" onClick={() => setShowTerms(true)} className="text-[#1a4d2e] underline underline-offset-2 font-semibold hover:text-[#143d25]">Terms of Use</button>
                    {' '}and{' '}
                    <button type="button" onClick={() => setShowTerms(true)} className="text-[#1a4d2e] underline underline-offset-2 font-semibold hover:text-[#143d25]">Acceptable Use Policy</button>.
                    Your information is used solely for network access verification.
                  </span>
                </label>
              </div>

              {showTerms && (
                <TermsModal
                  onAccept={() => { setTermsAccepted(true); setShowTerms(false) }}
                  onClose={() => setShowTerms(false)}
                />
              )}
            </div>
          </div>
        </main>

        <footer className="py-5 text-center text-xs text-white/40 px-4">
          <span className="text-white/60 font-semibold">Cavite State University — Bacoor Campus</span> · Campus Network Services
        </footer>

      </div>
    </div>
  )
}
