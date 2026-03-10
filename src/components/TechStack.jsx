const techs = [
    { icon: 'devicon-react-original colored', name: 'React' },
    { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
    { icon: 'devicon-python-plain colored', name: 'Python' },
    { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
    { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
    { icon: 'devicon-vuejs-plain colored', name: 'Vue.js' },
    { icon: 'devicon-docker-plain colored', name: 'Docker' },
    { icon: 'devicon-amazonwebservices-original colored', name: 'AWS' },
    { icon: 'devicon-firebase-plain colored', name: 'Firebase' },
    { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
    { icon: 'devicon-nextjs-plain', name: 'Next.js', style: { color: 'white' } },
]

export default function TechStack() {
    const doubled = [...techs, ...techs]

    return (
        <section className="tech" id="teknologi">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-badge">Teknologi</div>
                    <h2 className="section-title">Teknologi yang Kami Gunakan</h2>
                    <p className="section-subtitle">Stack teknologi modern untuk hasil terbaik</p>
                </div>
            </div>

            <div className="tech-marquee">
                <div className="tech-track" id="techTrack">
                    {doubled.map((t, i) => (
                        <div className="tech-item" key={i}>
                            <i className={`${t.icon} tech-icon`} style={t.style || {}}></i>
                            <span>{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
