import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#projects">Solutions</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Expertise</h3>
                    <ul className={styles.links}>
                        <li><a href="#experience">Scroll Animation</a></li>
                        <li><a href="#experience">Custom Websites Building</a></li>
                        <li><a href="#experience">Themes Customization</a></li>
                        <li><a href="#experience">Plugin Development</a></li>
                        <li><a href="#experience">WordPress</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Get In Touch</h3>
                    <p>Email: <a href="mailto:robertsinghdeveloper@gmail.com" className={styles.footerLink}>robertsinghdeveloper@gmail.com</a></p>
                    <p>Mobile: <a href="tel:+916379112143" className={styles.footerLink}>+91 6379112143</a></p>
                    <p>Location: Bangalore, India</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/robert-singh-w/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>in/robert-singh-w</a></p>
                    <p>GitHub: <a href="https://github.com/Robert-singh-dev" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>github.com/Robert-singh-dev</a></p>
                    <p className={styles.freelanceText}>Available for B2B contracts & freelance opportunities</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomSocials}>
                    <a href="https://www.linkedin.com/in/robert-singh-w/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/Robert-singh-dev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="mailto:robertsinghdeveloper@gmail.com" className={styles.socialIcon} aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
                <p>Made with ❤️ by Robert Singh</p>
            </div>
        </footer>
    )
}