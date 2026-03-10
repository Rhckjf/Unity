import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    // Scroll Reveal via IntersectionObserver
    useEffect(() => {
        const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active') }),
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        )
        revealEls.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    // Parallax mouse effect on hero orbs
    useEffect(() => {
        const handleMouseMove = (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.02
            const moveY = (e.clientY - window.innerHeight / 2) * 0.02
            document.querySelectorAll('.hero-orb').forEach((orb, i) => {
                const f = (i + 1) * 0.5
                orb.style.transform = `translate(${moveX * f}px, ${moveY * f}px)`
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Smooth scroll for anchor links
    useEffect(() => {
        const handleClick = (e) => {
            const a = e.target.closest('a[href^="#"]')
            if (!a) return
            const href = a.getAttribute('href')
            if (href === '#') return
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                const navHeight = document.getElementById('navbar')?.offsetHeight || 80
                window.scrollTo({ top: target.offsetTop - navHeight - 20, behavior: 'smooth' })
            }
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    // Tilt on service cards
    useEffect(() => {
        const addTilt = () => {
            document.querySelectorAll('.service-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const r = card.getBoundingClientRect()
                    const x = e.clientX - r.left, y = e.clientY - r.top
                    const rx = (y - r.height / 2) / 20, ry = (r.width / 2 - x) / 20
                    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
                })
                card.addEventListener('mouseleave', () => { card.style.transform = '' })
            })
        }
        // wait for render
        const t = setTimeout(addTilt, 300)
        return () => clearTimeout(t)
    }, [])

    // Portfolio card glow
    useEffect(() => {
        const addGlow = () => {
            document.querySelectorAll('.portfolio-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const r = card.getBoundingClientRect()
                    card.style.background = `radial-gradient(circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(139,92,246,0.1), var(--glass-bg))`
                })
                card.addEventListener('mouseleave', () => { card.style.background = '' })
            })
        }
        const t = setTimeout(addGlow, 300)
        return () => clearTimeout(t)
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <TechStack />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
        </>
    )
}
