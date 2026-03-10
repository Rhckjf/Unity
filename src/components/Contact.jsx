import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', service: '', message: '' })
    }

    return (
        <section className="contact" id="kontak">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Kontak</div>
                    <h2 className="section-title">Hubungi Kami</h2>
                    <p className="section-subtitle">
                        Kami siap membantu mewujudkan solusi digital terbaik untuk bisnis Anda
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info reveal-left">
                        <h3>Mari Berkolaborasi</h3>
                        <p>
                            Hubungi kami untuk konsultasi gratis. Tim kami akan membantu Anda
                            menemukan solusi terbaik sesuai kebutuhan dan budget.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon"><i className="ph-fill ph-envelope-simple"></i></div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">unityerp61@gmail.com</div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="ph-fill ph-whatsapp-logo"></i></div>
                                <div>
                                    <div className="contact-label">WhatsApp</div>
                                    <div className="contact-value">+62 812 3456 7890</div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="ph-fill ph-map-pin"></i></div>
                                <div>
                                    <div className="contact-label">Lokasi</div>
                                    <div className="contact-value">Jakarta, Indonesia</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram"><i className="ph-fill ph-instagram-logo"></i></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><i className="ph-fill ph-linkedin-logo"></i></a>
                            <a href="#" className="social-link" aria-label="GitHub"><i className="ph-fill ph-github-logo"></i></a>
                            <a href="#" className="social-link" aria-label="Twitter"><i className="ph-fill ph-twitter-logo"></i></a>
                        </div>
                    </div>

                    <div className="contact-form reveal-right">
                        {submitted && (
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
                                border: '1px solid rgba(139,92,246,0.4)',
                                borderRadius: '12px',
                                padding: '16px',
                                marginBottom: '20px',
                                color: '#a78bfa',
                                textAlign: 'center',
                                fontWeight: 600,
                            }}>
                                ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                            </div>
                        )}
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nama Lengkap</label>
                                <input type="text" id="name" placeholder="Masukkan nama Anda" required
                                    value={form.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="email@contoh.com" required
                                    value={form.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Layanan yang Diinginkan</label>
                                <select id="service" required value={form.service} onChange={handleChange}>
                                    <option value="" disabled>Pilih layanan</option>
                                    <option value="erp">Sistem ERP</option>
                                    <option value="simple-web">Website Sederhana</option>
                                    <option value="pro-web">Website Profesional</option>
                                    <option value="custom">Custom Development</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Pesan</label>
                                <textarea id="message" placeholder="Ceritakan kebutuhan project Anda..." required
                                    value={form.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn-submit">Kirim Pesan ⟶</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
