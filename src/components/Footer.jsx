export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="nav-logo">
                            <div className="logo-icon">U</div>
                            <span>UnityERP</span>
                        </a>
                        <p>
                            Solusi digital terpercaya untuk membangun sistem ERP dan website profesional
                            yang mendorong pertumbuhan bisnis Anda.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Layanan</h4>
                        <ul>
                            <li><a href="#layanan">Sistem ERP</a></li>
                            <li><a href="#layanan">Website Sederhana</a></li>
                            <li><a href="#layanan">Website Profesional</a></li>
                            <li><a href="#layanan">Custom Development</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Perusahaan</h4>
                        <ul>
                            <li><a href="#tentang">Tentang Kami</a></li>
                            <li><a href="#portofolio">Portfolio</a></li>
                            <li><a href="#testimoni">Testimoni</a></li>
                            <li><a href="#kontak">Kontak</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Lainnya</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Karir</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 UnityERP. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
