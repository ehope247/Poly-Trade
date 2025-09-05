import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '../lib/UserContext';
import LiveChatWidget from '../components/LiveChatWidget';
import ConsentBanner from '../components/ConsentBanner';
import { useState, useEffect } from 'react';
import Script from 'next/script';

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

      {/* The Script tag stays here, but the div is gone */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
      />

    </UserContextProvider>
  );
}

export default MyApp;