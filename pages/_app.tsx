import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '../lib/UserContext';
import LiveChatWidget from '../components/LiveChatWidget';
import ConsentBanner from '../components/ConsentBanner'; // 1. Import the new banner
import { useState, useEffect } from 'react';

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
          <ConsentBanner /> {/* 2. Add the banner here */}
        </>
      )}
    </UserContextProvider>
  );
}

export default MyApp;