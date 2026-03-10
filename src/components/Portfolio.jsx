const projects = [
    {
        img: '/images/hr-ga-portfolio.png',
        alt: 'HR-GA Agreement System',
        bg: 'bg-1',
        title: 'HR-GA Agreement System',
        desc: 'Sistem manajemen persetujuan HR/GA berbasis web',
        tags: ['Web App', 'System', 'Management'],
        url: 'https://github.com/Rhckjf/HR-GA-Agreement-System-Website',
        delay: 'delay-1',
    },
    {
        img: '/images/water-management-portfolio.png',
        alt: 'Water Management System',
        bg: 'bg-2',
        title: 'Water Management System',
        desc: 'Aplikasi web untuk manajemen air dan pemantauan',
        tags: ['Web App', 'Management', 'Monitoring'],
        url: 'https://github.com/Rhckjf/Water-Management-System',
        delay: 'delay-2',
    },
    {
        img: '/images/cybersecurity-portfolio.png',
        alt: 'Cybersecurity Risk System',
        bg: 'bg-3',
        title: 'Cybersecurity Risk System',
        desc: 'Mini project sistem penilaian risiko keamanan siber berbasis Flask (Python)',
        tags: ['Python', 'Flask', 'Security'],
        url: 'https://github.com/Rhckjf/-Cybersecurity-Risk-Assessment',
        delay: 'delay-3',
    },
]

export default function Portfolio() {
    return (
        <section className="portfolio" id="portofolio">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Portofolio</div>
                    <h2 className="section-title">Project Terbaru Kami</h2>
                    <p className="section-subtitle">Beberapa karya terbaik yang telah kami selesaikan</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((p) => (
                        <div className={`portfolio-card reveal ${p.delay}`} key={p.title}>
                            <div className="portfolio-thumbnail">
                                <div className={`thumb-bg ${p.bg}`}></div>
                                <img
                                    src={p.img}
                                    alt={p.alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                                />
                                <div className="portfolio-overlay">
                                    <span onClick={() => window.open(p.url, '_blank')}>Lihat di GitHub</span>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="portfolio-tags">
                                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
