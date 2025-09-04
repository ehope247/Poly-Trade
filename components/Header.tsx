import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../lib/UserContext';
import { supabase } from '../lib/supabaseClient';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

const Header = () => {
  const { session } = useUser();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // --- THIS IS THE NEW LOGIC ---
  // This useEffect hook runs whenever the router's query changes
  useEffect(() => {
    if (router.query.signup === 'true') {
      setIsSignUpModalOpen(true);
      // Clean up the URL so the query doesn't stay there
      router.replace('/', undefined, { shallow: true });
    }
  }, [router.query, router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsMenuOpen(false);
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <header className={styles.header} ref={menuRef}>
        <Link href="/" className={styles.brandLink}>
          <div className={styles.brand}>
            <svg className={styles.logoIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,58.3,37.1a8,8,0,0,1,10.2,12.2,88.1,88.1,0,1,0,119,0,8,8,0,0,1,10.2-12.2A104.11,104.11,0,0,1,232,128Zm-41.21-4.8a8,8,0,0,0-11,2.15L160.42,152H95.58l-19.37-26.65a8,8,0,0,0-13.16,9.56L84.83,168h86.34l21.78-30a8,8,0,0,0-2.16-11.19Z"></path></svg>
            <span>Poly-Trade</span>
          </div>
        </Link>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,60a12,12,0,1,1-12-12A12,12,0,0,1,128,60Zm0,68a12,12,0,1,1-12-12A12,12,0,0,1,128,128Zm0,68a12,12,0,1,1-12-12A12,12,0,0,1,128,196Z"></path></svg>
        </div>

        <nav className={`${styles.menuPanel} ${isMenuOpen ? styles.open : ''}`}>
          {session ? (
            <>
              <div className={styles.userInfo}>Signed in as<br /><strong>{session.user.email}</strong></div>
              <div className={styles.divider}></div>
              <Link href="/dashboard" className={styles.menuLink}>Dashboard</Link>
              <div className={styles.menuLink} onClick={handleSignOut}>Sign Out</div>
            </>
          ) : (
            <>
              <div className={styles.menuLink} onClick={() => { setIsSignUpModalOpen(true); setIsMenuOpen(false); }}>Sign Up</div>
              <div className={styles.menuLink} onClick={() => { setIsLoginModalOpen(true); setIsMenuOpen(false); }}>Login</div>
            </>
          )}
        </nav>
      </header>

      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;