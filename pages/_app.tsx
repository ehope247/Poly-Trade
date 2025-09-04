import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '../lib/UserContext';
import ChatIcon from '../components/ChatIcon'; // 1. Import our new component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      {/* This structure allows the Component (the current page) and the ChatIcon to exist at the same time */}
      <Component {...pageProps} />
      <ChatIcon /> {/* 2. Add the ChatIcon here */}
    </UserContextProvider>
  );
}

export default MyApp;