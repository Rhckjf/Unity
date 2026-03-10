const services = [
    {
        color: 'purple',
        img: '/images/erp-dashboard.png',
        alt: 'Sistem ERP Icon',
        title: 'Sistem ERP',
        desc: 'Sistem ERP terintegrasi untuk mengelola seluruh proses bisnis Anda — dari keuangan, inventaris, HR, hingga supply chain dalam satu platform.',
        features: ['Modul Keuangan & Akuntansi', 'Manajemen Inventaris', 'HRM & Payroll', 'Supply Chain Management', 'Laporan & Dashboard Real-Time'],
        delay: 'delay-1',
    },
    {
        color: 'blue',
        img: '/images/web-development.png',
        alt: 'Website Sederhana Icon',
        title: 'Website Sederhana',
        desc: 'Website profesional untuk UMKM dan personal branding. Desain modern, responsif, dan SEO-friendly dengan harga terjangkau.',
        features: ['Landing Page', 'Company Profile', 'Blog & Portfolio', 'Responsive Design', 'SEO Optimization'],
        delay: 'delay-2',
    },
    {
        color: 'cyan',
        img: '/images/enterprise-web.png',
        alt: 'Website Profesional Icon',
        title: 'Website Profesional',
        desc: 'Platform web berskala besar dengan fitur lengkap — e-commerce, dashboard admin, integrasi API, dan kemampuan skalabilitas tinggi.',
        features: ['E-Commerce Platform', 'Custom CMS', 'Payment Gateway', 'Multi-User System', 'API Integration'],
        delay: 'delay-3',
    },
    {
        color: 'pink',
        img: '/images/custom-dev.png',
        alt: 'Custom Development Icon',
        title: 'Custom Development',
        desc: 'Pengembangan software khusus sesuai kebutuhan unik bisnis Anda. Dari aplikasi web, mobile app, hingga sistem automation.',
        features: ['Web Application', 'Mobile Application', 'Automation System', 'Data Analytics', 'Cloud Infrastructure'],
        delay: 'delay-4',
    },
]

export default function Services() {
    return (
        <section className="services" id="layanan">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Layanan Kami</div>
                    <h2 className="section-title">Layanan yang Kami Tawarkan</h2>
                    <p className="section-subtitle">Solusi lengkap untuk kebutuhan digital bisnis Anda</p>
                </div>

                <div className="services-grid">
                    {services.map((s) => (
                        <div className={`service-card reveal ${s.delay}`} key={s.title}>
                            <div className={`service-icon ${s.color}`}>
                                <img src={s.img} alt={s.alt} style={{ width: '100%', borderRadius: '8px' }} />
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <ul className="service-features">
                                {s.features.map((f) => (
                                    <li key={f}><span className="check">✓</span> {f}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
