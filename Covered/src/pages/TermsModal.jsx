import { useState, useRef } from 'react'

export default function TermsModal({ onAccept, onClose }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)
  const [checked, setChecked] = useState(false)
  const bodyRef = useRef(null)

  function handleScroll() {
    const el = bodyRef.current
    if (!el) return
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setScrolledToBottom(true)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden" style={{ maxHeight: '90vh' }}>
        {/* Header */}
        <div className="bg-[#1a4d2e] px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-white font-bold text-base">Terms of Use & Acceptable Use Policy</h2>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition text-xl leading-none">&times;</button>
        </div>

        {/* Scroll hint */}
        {!scrolledToBottom && (
          <div className="bg-amber-50 border-b border-amber-200 px-5 py-2 flex items-center gap-2 flex-shrink-0">
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <p className="text-amber-700 text-xs">Please scroll down to read the full terms before accepting.</p>
          </div>
        )}

        {/* Scrollable content */}
        <div
          ref={bodyRef}
          onScroll={handleScroll}
          className="overflow-y-auto px-6 py-5 text-sm text-gray-700 leading-relaxed space-y-4 flex-1"
        >
          <div>
            <p className="font-bold text-[#1a4d2e] text-base mb-1">CvSU Bacoor Campus Free WiFi Program</p>
            <p className="text-gray-500 text-xs">Effective Date: Academic Year 2025–2026 | Campus Network Services</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Purpose of the Service</p>
            <p>The CvSU Bacoor Campus Free WiFi Program ("Service") is provided exclusively to currently enrolled students of Cavite State University – Bacoor Campus. The Service is intended to support academic activities, research, and educational communications only.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">2. Registration and Eligibility</p>
            <p>By registering, you confirm that you are a currently enrolled student of CvSU Bacoor Campus. You agree to provide accurate personal information including your full name and a valid email address. Misrepresentation of identity is grounds for immediate termination of access.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">3. Acceptable Use</p>
            <p>You agree to use the network only for lawful and academic purposes. The following are strictly prohibited:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600">
              <li>Accessing or distributing illegal content</li>
              <li>Unauthorized access to other systems or networks</li>
              <li>Streaming or downloading large non-academic media files</li>
              <li>Using the network to engage in harassment, fraud, or deception</li>
              <li>Any activity that violates the Cybercrime Prevention Act of 2012 (RA 10175)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Data Collection and Privacy</p>
            <p>By registering, you consent to the collection of the following information: your name, email address, and device information (user agent string). This data is used solely to verify network access eligibility and monitor usage. It will not be shared with third parties without your consent, except as required by law.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">5. Network Monitoring</p>
            <p>All activity on this network is subject to monitoring by Campus Network Services. Users should have no expectation of privacy while connected to CvSU_StudentsNet. Logs may be reviewed to ensure compliance with these terms.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">6. Limitation of Access</p>
            <p>The university reserves the right to suspend or permanently revoke access for any violation of this policy without prior notice. Bandwidth may be throttled during peak usage hours to ensure fair access for all users.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">7. Disclaimer of Liability</p>
            <p>CvSU Bacoor Campus provides this service on an "as is" basis. The university is not liable for any loss, damage, or interruption of service arising from your use of the network. You use the service at your own risk.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">8. Amendments</p>
            <p>The university reserves the right to modify these terms at any time. Continued use of the network constitutes acceptance of any revised terms.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">9. Governing Law</p>
            <p>These terms are governed by the laws of the Republic of the Philippines, including but not limited to the Data Privacy Act of 2012 (RA 10173) and the Cybercrime Prevention Act of 2012 (RA 10175).</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500">
            For concerns or inquiries, contact Campus Network Services at <span className="text-[#1a4d2e] font-medium">itsupport@cvsu-bacoor.edu.ph</span> or visit the ICT Office at the Main Building, Ground Floor.
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4 flex-shrink-0 space-y-3">
          <label className={`flex items-start gap-3 cursor-pointer group ${!scrolledToBottom ? 'opacity-40 pointer-events-none' : ''}`}>
            <input
              type="checkbox"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#1a4d2e] flex-shrink-0 cursor-pointer"
            />
            <span className="text-sm text-gray-700 leading-snug">
              I have read and understood the Terms of Use and Acceptable Use Policy. I agree to comply with all conditions stated above.
            </span>
          </label>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-2.5 text-sm font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => checked && onAccept()}
              disabled={!checked || !scrolledToBottom}
              className="flex-1 bg-[#1a4d2e] text-white rounded-xl py-2.5 text-sm font-bold transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#143d25] active:scale-95"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
