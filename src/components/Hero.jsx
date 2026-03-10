import { useEffect, useRef } from 'react'

function useCountUp(target, duration = 2000) {
    const ref = useRef(null)
    useEffect(() => {
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                start = target
                clearInterval(timer)
            }
            if (ref.current) ref.current.textContent = Math.floor(start) + '+'
        }, 16)
        return () => clearInterval(timer)
    }, [target, duration])
    return ref
}

export default function Hero() {
    const stat1 = useCountUp(50)
    const stat2 = useCountUp(35)
    const stat3 = useCountUp(5)

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>
            <div className="hero-grid"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <div className="pulse"></div>
                        Tersedia untuk project baru
                    </div>

                    <h1 className="hero-title">
                        Bangun Sistem <span className="gradient-text">ERP</span> &amp;{' '}
                        <span className="gradient-text">Website</span> Impian Anda
                    </h1>

                    <p className="hero-description">
                        Kami menghadirkan solusi digital kelas enterprise — mulai dari sistem ERP terintegrasi
                        hingga website modern yang mendorong pertumbuhan bisnis Anda.
                    </p>

                    <div className="hero-actions">
                        <a href="#kontak" className="btn-primary">Mulai Project ⟶</a>
                        <a href="#layanan" className="btn-secondary">Lihat Layanan</a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-number" ref={stat1}>0+</div>
                            <div className="stat-label">Project Selesai</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number" ref={stat2}>0+</div>
                            <div className="stat-label">Klien Puas</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number" ref={stat3}>0+</div>
                            <div className="stat-label">Tahun Pengalaman</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-illustration">
                        <div className="floating-card card-1">
                            <div className="card-icon purple"><i className="ph-bold ph-chart-bar"></i></div>
                            <h4>Dashboard ERP</h4>
                            <p>Real-time analytics</p>
                            <div className="mini-chart">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>

                        <div className="floating-card card-2">
                            <div className="card-icon blue"><i className="ph-bold ph-globe-hemisphere-west"></i></div>
                            <h4>Web Modern</h4>
                            <p>Responsive &amp; cepat</p>
                            <div style={{ marginTop: '10px', display: 'flex', gap: '4px' }}>
                                <div style={{ flex: 1, height: '6px', background: 'var(--gradient-main)', borderRadius: '3px' }}></div>
                                <div style={{ flex: 0.7, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}></div>
                            </div>
                        </div>

                        <div className="floating-card card-3">
                            <div className="card-icon cyan"><i className="ph-bold ph-lightning"></i></div>
                            <h4>Performa Tinggi</h4>
                            <p>Uptime 99.9%</p>
                            <div style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 800, background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                99.9%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
