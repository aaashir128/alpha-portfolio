import React, { useEffect, useState } from "react";
import MessageSection from "../components/MessageSection";
import Title from "../components/Title";
import db from "../config/firebase";
import "./MessagePanel.css";

function MessagePanel() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="messagePanel">
      <Title title="Message Panel" span="Message Panel" />
      <div className="messagePanel__messages">
        {messages.map((message) => (
          <MessageSection
            name={message.name}
            email={message.email}
            subject={message.subject}
            message={message.message}
            timestamp={message.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default MessagePanel;
