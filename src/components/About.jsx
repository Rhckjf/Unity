export default function About() {
    return (
        <section className="about" id="tentang">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Tentang Kami</div>
                    <h2 className="section-title">Mengapa Memilih UnityERP?</h2>
                    <p className="section-subtitle">
                        Kami adalah tim profesional yang berdedikasi dalam menciptakan solusi digital terbaik
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-visual reveal-left">
                        <div className="about-image-wrapper">
                            <img
                                src="/images/tentang-kami.jpg"
                                alt="Tim profesional sedang bekerja di kantor"
                                className="about-graphic"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className="about-content reveal-right">
                        <h3>Solusi Digital End-to-End untuk Bisnis Anda</h3>
                        <p>
                            UnityERP hadir dengan misi menjembatani kebutuhan digitalisasi bisnis di Indonesia.
                            Dengan pengalaman bertahun-tahun di industri teknologi, kami telah dipercaya oleh
                            berbagai perusahaan dalam membangun sistem ERP yang terintegrasi dan website yang profesional.
                        </p>
                        <p>
                            Kami percaya bahwa setiap bisnis, baik kecil maupun besar, layak mendapatkan
                            solusi teknologi berkualitas tinggi dengan harga yang terjangkau.
                        </p>

                        <div className="about-features">
                            {[
                                { icon: 'ph-check-circle', label: 'Tim Berpengalaman' },
                                { icon: 'ph-shield-check', label: 'Keamanan Terjamin' },
                                { icon: 'ph-lightning', label: 'Pengerjaan Cepat' },
                                { icon: 'ph-wrench', label: 'Support 24/7' },
                                { icon: 'ph-device-mobile', label: 'Responsive Design' },
                                { icon: 'ph-lightbulb', label: 'Konsultasi Gratis' },
                            ].map(({ icon, label }) => (
                                <div className="about-feature" key={label}>
                                    <span className="feature-icon"><i className={`ph-fill ${icon}`}></i></span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
