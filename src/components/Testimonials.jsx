const testimonials = [
    {
        stars: '⭐⭐⭐⭐⭐',
        text: '"Sistem ERP yang dibangun oleh UnityERP sangat membantu operasional perusahaan kami. Prosesnya cepat dan hasilnya luar biasa."',
        avatar: 'A',
        av: 'av-1',
        name: 'Ahmad Hidayat',
        delay: 'delay-1',
    },
    {
        stars: '⭐⭐⭐⭐⭐',
        text: '"Website e-commerce kami meningkat 300% dalam penjualan setelah dikembangkan oleh tim UnityERP. Sangat recommended!"',
        avatar: 'S',
        av: 'av-2',
        name: 'Sari Dewi',
        delay: 'delay-2',
    },
    {
        stars: '⭐⭐⭐⭐⭐',
        text: '"Profesional, komunikatif, dan hasilnya memuaskan. Tim UnityERP benar-benar memahami kebutuhan bisnis kami."',
        avatar: 'R',
        av: 'av-3',
        name: 'Rizky Pratama',
        delay: 'delay-3',
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimoni">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Testimoni</div>
                    <h2 className="section-title">Apa Kata Klien Kami</h2>
                    <p className="section-subtitle">Kepuasan klien adalah prioritas utama kami</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div className={`testimonial-card reveal ${t.delay}`} key={t.name}>
                            <div className="testimonial-stars">{t.stars}</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className={`testimonial-avatar ${t.av}`}>{t.avatar}</div>
                                <div>
                                    <div className="testimonial-name">{t.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
