import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../lib/UserContext';
import { supabase } from '../lib/supabaseClient';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

// Icons for the new menu
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,96a8,8,0,0,1-8,8H144v64h16a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h16V104H40a8,8,0,0,1,0-16h72V40H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16h-16V88h72A8,8,0,0,1,224,96Z"></path></svg>;
const IconSignOut = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56a8,8,0,0,1,8,8Zm109.66-93.66-48-48a8,8,0,0,0-11.32,11.32L196.69,120H88a8,8,0,0,0,0,16h108.69l-34.35,34.34a8,8,0,0,0,11.32,11.32l48-48a8,8,0,0,0,0-11.32Z"></path></svg>;
const IconSignUp = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h64V56a8,8,0,0,1,16,0v64h96A8,8,0,0,1,224,128Z"></path></svg>;
const IconLogin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M148,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h92.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L140.69,136H40a8,8,0,0,1,0-16h100A8,8,0,0,1,148,128ZM216,40H48a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V56H208V200H56V176a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V48A16,16,0,0,0,216,40Z"></path></svg>;

const Header = () => {
  const { session } = useUser();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.isReady) {
      if ((router.query.ref || router.query.signup === 'true') && !session) {
        setIsSignUpModalOpen(true);
        router.replace('/', undefined, { shallow: true });
      }
    }
  }, [router.isReady, router.query, session]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    return () => { document.removeEventListener('mousedown', handleClickOutside); };
  }, [menuRef]);

  return (
    <>
      <header className={styles.header} ref={menuRef}>
        {/* --- THIS IS THE FIX --- */}
        <Link href="/" className={styles.brandLink}>
          <div className={styles.brand}>
            <svg className={styles.logoIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,58.3,37.1a8,8,0,0,1,10.2,12.2,88.1,88.1,0,1,0,119,0,8,8,0,0,1,10.2-12.2A104.11,104.11,0,0,1,232,128Zm-41.21-4.8a8,8,0,0,0-11,2.15L160.42,152H95.58l-19.37-26.65a8,8,0,0,0-13.16,9.56L84.83,168h86.34l21.78-30a8,8,0,0,0-2.16-11.19Z"></path></svg>
            <span>Poly-Trade</span>
          </div>
        </Link>
        
        <div className={styles.rightSection}>
          <div className="elfsight-app-97b72468-9bdf-40b2-afeb-a129abee5d0a" data-elfsight-app-lazy></div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,60a12,12,0,1,1-12-12A12,12,0,0,1,128,60Zm0,68a12,12,0,1,1-12-12A12,12,0,0,1,128,128Zm0,68a12,12,0,1,1-12-12A12,12,0,0,1,128,196Z"></path></svg>
          </div>
        </div>

        <nav className={`${styles.menuPanel} ${isMenuOpen ? styles.open : ''}`}>
          {session ? (
            <>
              <div className={styles.userInfo}>
                <span className={styles.userInfoLabel}>Signed in as</span>
                <span className={styles.userInfoEmail}>{session.user.email}</span>
              </div>
              <div className={styles.divider}></div>
              <Link href="/dashboard" className={styles.menuLink}>
                <IconDashboard /><span>Dashboard</span>
              </Link>
              <div className={styles.menuLink} onClick={handleSignOut}>
                <IconSignOut /><span>Sign Out</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.menuLink} onClick={() => { setIsSignUpModalOpen(true); setIsMenuOpen(false); }}>
                <IconSignUp /><span>Sign Up</span>
              </div>
              <div className={styles.menuLink} onClick={() => { setIsLoginModalOpen(true); setIsMenuOpen(false); }}>
                <IconLogin /><span>Login</span>
              </div>
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
