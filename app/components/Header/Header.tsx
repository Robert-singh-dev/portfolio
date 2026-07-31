import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoContainer}>
                <img src="/logo.svg" alt="RS Dev Logo" className={styles.logoIcon} />
            </Link>
            
            <nav className={styles.nav}>
                <Link href="#about" className={styles.navLink}>About</Link>
                <Link href="#skills" className={styles.navLink}>Skills</Link>
                <Link href="#experience" className={styles.navLink}>Experience</Link>
                <Link href="#projects" className={styles.navLink}>Solutions</Link>
            </nav>

            <Link href="https://robertsingh-portfolio.vercel.app/assets/resume-robert-singh.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Resume</Link>
        </header>
    )
}

export default Header