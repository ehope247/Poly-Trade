import styles from './ChatIcon.module.css';

const ChatIcon = () => {
  // We will add an onClick handler here later to open the chat window
  const handleIconClick = () => {
    console.log("Chat icon clicked!"); // Placeholder action
  };

  return (
    <div className={styles.chatIconContainer} onClick={handleIconClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256">
        <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.37,14.66A16,16,0,0,0,40,240a15.91,15.91,0,0,0,10.29-3.88L85.33,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Z"></path>
      </svg>
    </div>
  );
};

export default ChatIcon;