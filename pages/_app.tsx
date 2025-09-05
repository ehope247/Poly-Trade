import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '../lib/UserContext';
import LiveChatWidget from '../components/LiveChatWidget';
import ConsentBanner from '../components/ConsentBanner';
import { useState, useEffect } from 'react';
import Script from 'next/script'; // Import the Next.js Script component

function MyApp({ Component, pageProps }: AppProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <UserContextProvider>
      <Component {...pageProps} />

      {hasMounted && (
        <>
          <LiveChatWidget />
          <ConsentBanner />
        </>
      )}

      {/* === YOUR ELFSIGHT WIDGET CODE IS HERE === */}

      {/* 1. The main Elfsight platform script */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" // This is a good strategy for non-critical scripts
      />

      {/* 2. The specific div for your widget */}
      <div 
        className="elfsight-app-97b72468-9bdf-40b2-afeb-a129abee5d0a" 
        data-elfsight-app-lazy
      ></div>

    </UserContextProvider>
  );
}

export default MyApp;