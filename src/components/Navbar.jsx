import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="container">
                <a href="#" className="nav-logo">
                    <div className="logo-icon">U</div>
                    <span>UnityERP</span>
                </a>
                <div className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
                    <a href="#tentang" onClick={closeMenu}>Tentang</a>
                    <a href="#layanan" onClick={closeMenu}>Layanan</a>
                    <a href="#portofolio" onClick={closeMenu}>Portofolio</a>
                    <a href="#teknologi" onClick={closeMenu}>Teknologi</a>
                    <a href="#testimoni" onClick={closeMenu}>Testimoni</a>
                    <a href="#kontak" className="nav-cta" onClick={closeMenu}>Hubungi Kami</a>
                </div>
                <button
                    className={`mobile-toggle${menuOpen ? ' active' : ''}`}
                    id="mobileToggle"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    )
}
