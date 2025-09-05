import { useState, useEffect, useRef } from 'react';
import styles from './LiveChatWidget.module.css';
import { supabase } from '../lib/supabaseClient';
import { useUser } from '../lib/UserContext';

const LiveChatWidget = () => {
  const { session } = useUser();
  const [isOpen, setIsOpen] = useState(false); // Manages its own state
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    if (!session) return;
    const { data } = await supabase.from('messages').select('*').eq('user_id', session.user.id).order('created_at');
    if (data) setMessages(data);
  };

  useEffect(() => {
    if (isOpen && session) { fetchMessages(); }
  }, [isOpen, session]);

  useEffect(() => {
    if (!session) return;
    const channel = supabase.channel(`public:messages:user_id=eq.${session.user.id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, () => fetchMessages())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [session]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !session) return;
    await supabase.from('messages').insert({ user_id: session.user.id, content: newMessage, sent_by_admin: false });
    setNewMessage('');
  };

  return (
    <>
      {/* The Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        <header className={styles.chatHeader}>
          <h3>Chat with Support</h3>
          <button onClick={() => setIsOpen(false)} className={styles.closeButton}>×</button>
        </header>
        <main className={styles.messageArea}>
          {session ? (
            <>
              {messages.map(msg => (
                <div key={msg.id} className={`${styles.message} ${msg.sent_by_admin ? styles.adminMessage : styles.userMessage}`}>
                  <p>{msg.content}</p>
                </div>
              ))}
              <div ref={chatEndRef} />
            </>
          ) : <div className={styles.loginPrompt}>Please log in to start a chat.</div> }
        </main>
        {session && (
          <footer className={styles.inputArea}>
            <form onSubmit={handleSendMessage}>
              <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." />
              <button type="submit">Send</button>
            </form>
          </footer>
        )}
      </div>

      {/* The Chat Icon */}
      <div className={styles.chatIconContainer} onClick={() => setIsOpen(!isOpen)}>
        {/* This is a new icon that changes when the window is open */}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.37,14.66A16,16,0,0,0,40,240a15.91,15.91,0,0,0,10.29-3.88L85.33,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Z"></path></svg>
        )}
      </div>
    </>
  );
};
export default LiveChatWidget;