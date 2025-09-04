import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from './supabaseClient';
import { Session } from '@supabase/supabase-js';

// Create the context
export const UserContext = createContext<{ session: Session | null }>({ session: null });

// Create a "Provider" component
export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Check for an existing session when the app loads
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes in authentication state (login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up the listener when the component unmounts
    return () => subscription.unsubscribe();
  }, []);

  const value = { session };
  return <UserContext.Provider value={value} {...props} />;
};

// Create a custom hook for easy access to the user session
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContextProvider.');
  }
  return context;
};