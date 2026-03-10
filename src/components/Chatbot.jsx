import '../chatbot.css'
import { useState, useRef, useEffect } from 'react'

const BOT_NAME = 'Unity AI'

const FAQ = [
    {
        keywords: ['harga', 'biaya', 'tarif', 'cost', 'price', 'berapa'],
        answer: 'Harga kami sangat kompetitif dan disesuaikan dengan kebutuhan project Anda. Untuk website sederhana mulai dari Rp 2 jutaan, dan sistem ERP mulai dari Rp 15 jutaan. Silakan hubungi kami untuk konsultasi gratis dan penawaran yang lebih spesifik! 😊',
    },
    {
        keywords: ['erp', 'enterprise', 'sistem', 'system'],
        answer: 'Sistem ERP kami mencakup modul Keuangan & Akuntansi, Manajemen Inventaris, HRM & Payroll, Supply Chain, hingga Dashboard real-time. Kami bisa kustomisasi sesuai proses bisnis Anda. 🚀',
    },
    {
        keywords: ['website', 'web', 'landing', 'toko', 'online', 'ecommerce', 'e-commerce'],
        answer: 'Kami menyediakan 3 paket website:\n• **Website Sederhana** — Landing page, company profile, blog\n• **Website Profesional** — E-commerce, custom CMS, payment gateway\n• **Custom Dev** — Aplikasi web & mobile sesuai kebutuhan Anda 💻',
    },
    {
        keywords: ['lama', 'waktu', 'durasi', 'berapa lama', 'selesai', 'deadline'],
        answer: 'Estimasi waktu pengerjaan:\n• Website Sederhana: 1–2 minggu\n• Website Profesional: 3–6 minggu\n• Sistem ERP: 2–4 bulan\n\nTergantung kompleksitas dan ketersediaan konten. ⏱️',
    },
    {
        keywords: ['kontak', 'hubungi', 'whatsapp', 'wa', 'email', 'contact'],
        answer: 'Silakan hubungi kami melalui:\n📧 Email: unityerp61@gmail.com\n📱 WhatsApp: +62 812 3456 7890\n📍 Lokasi: Jakarta, Indonesia\n\nAtau isi form di bagian Kontak di halaman ini! 👇',
    },
    {
        keywords: ['teknologi', 'tech', 'stack', 'framework', 'bahasa', 'pakai', 'react', 'node', 'python'],
        answer: 'Kami menggunakan teknologi terkini:\nFrontend: React, Next.js, Vue.js\nBackend: Node.js, Python/Django\nDatabase: PostgreSQL, MongoDB\nInfrastruktur: AWS, Docker, Firebase 🛠️',
    },
    {
        keywords: ['support', 'maintenance', 'after', 'garansi', 'setelah'],
        answer: 'Kami menyediakan support 24/7 dan maintenance setelah project selesai. Setiap project dilengkapi garansi bug-fix selama 3 bulan. Kami juga menawarkan paket maintenance bulanan! 🛡️',
    },
    {
        keywords: ['portofolio', 'portfolio', 'project', 'contoh', 'karya'],
        answer: 'Beberapa project kami:\n• **HR-GA Agreement System** — Sistem persetujuan berbasis web\n• **Water Management System** — Monitoring & manajemen air\n• **Cybersecurity Risk System** — Penilaian risiko keamanan (Flask/Python)\n\nLihat selengkapnya di bagian Portofolio! 💼',
    },
    {
        keywords: ['halo', 'hai', 'hello', 'hi', 'hey', 'selamat', 'pagi', 'siang', 'malam', 'sore'],
        answer: 'Halo! Selamat datang di UnityERP 👋\nSaya Unity AI, asisten virtual kami. Saya siap membantu Anda seputar layanan, harga, teknologi, atau apapun yang ingin Anda tanyakan. Ada yang bisa saya bantu?',
    },
    {
        keywords: ['terima kasih', 'makasih', 'thanks', 'thank you', 'ok', 'oke', 'okay', 'siap'],
        answer: 'Sama-sama! Jika ada pertanyaan lain, jangan sungkan untuk bertanya ya. Kami siap membantu kapan saja! 😊✨',
    },
]

const QUICK_QUESTIONS = [
    '💰 Berapa harga layanan?',
    '⏱️ Berapa lama pengerjaan?',
    '🛠️ Teknologi apa yang dipakai?',
    '📞 Cara menghubungi tim?',
]

const WELCOME_MSG = {
    role: 'bot',
    text: 'Halo! Selamat datang di **UnityERP** 👋\nSaya **Unity AI**, asisten virtual kami. Tanyakan apapun seputar layanan, harga, atau teknologi kami!',
}

function getBotReply(input) {
    const lower = input.toLowerCase()
    for (const faq of FAQ) {
        if (faq.keywords.some(k => lower.includes(k))) return faq.answer
    }
    return 'Maaf, saya belum memahami pertanyaan Anda. Coba tanyakan tentang **harga**, **layanan**, **teknologi**, atau **kontak** kami. Atau langsung hubungi tim kami via WhatsApp! 🙏'
}

function formatText(text) {
    return text.split('\n').map((line, i) => {
        const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        return <p key={i} dangerouslySetInnerHTML={{ __html: bold }} style={{ margin: '2px 0' }} />
    })
}

export default function Chatbot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([WELCOME_MSG])
    const [input, setInput] = useState('')
    const [typing, setTyping] = useState(false)
    const [unread, setUnread] = useState(1)
    const endRef = useRef(null)

    useEffect(() => {
        if (open) {
            setUnread(0)
            setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
        }
    }, [open, messages])

    const sendMessage = (text) => {
        const userText = text || input.trim()
        if (!userText) return
        setInput('')
        setMessages(prev => [...prev, { role: 'user', text: userText }])
        setTyping(true)

        setTimeout(() => {
            const reply = getBotReply(userText)
            setMessages(prev => [...prev, { role: 'bot', text: reply }])
            setTyping(false)
        }, 800 + Math.random() * 600)
    }

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
    }

    return (
        <>
            {/* Floating Button */}
            <button className="chatbot-fab" onClick={() => setOpen(o => !o)} aria-label="Buka chat">
                {open
                    ? <i className="ph-bold ph-x"></i>
                    : <i className="ph-bold ph-chat-circle-dots"></i>
                }
                {!open && unread > 0 && <span className="chatbot-badge">{unread}</span>}
            </button>

            {/* Chat Window */}
            {open && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-avatar">
                            <i className="ph-fill ph-robot"></i>
                            <span className="chatbot-status-dot"></span>
                        </div>
                        <div className="chatbot-header-info">
                            <div className="chatbot-header-name">{BOT_NAME}</div>
                            <div className="chatbot-header-status">Online • Selalu siap membantu</div>
                        </div>
                        <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Tutup">
                            <i className="ph-bold ph-x"></i>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-body">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                                {msg.role === 'bot' && (
                                    <div className="chatbot-msg-avatar"><i className="ph-fill ph-robot"></i></div>
                                )}
                                <div className="chatbot-bubble">{formatText(msg.text)}</div>
                            </div>
                        ))}
                        {typing && (
                            <div className="chatbot-msg chatbot-msg--bot">
                                <div className="chatbot-msg-avatar"><i className="ph-fill ph-robot"></i></div>
                                <div className="chatbot-bubble chatbot-typing">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    {/* Quick Questions */}
                    <div className="chatbot-quick">
                        {QUICK_QUESTIONS.map(q => (
                            <button key={q} className="chatbot-quick-btn" onClick={() => sendMessage(q)}>
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="chatbot-footer">
                        <input
                            type="text"
                            className="chatbot-input"
                            placeholder="Ketik pesan..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            autoFocus
                        />
                        <button
                            className="chatbot-send"
                            onClick={() => sendMessage()}
                            disabled={!input.trim()}
                            aria-label="Kirim"
                        >
                            <i className="ph-bold ph-paper-plane-tilt"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
