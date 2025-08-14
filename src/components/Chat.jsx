import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to VillageConnect Chat!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded w-72">
      <div className="max-h-40 overflow-y-auto mb-2">
        {messages.map(m => (
          <div key={m.id} className="p-1 border-b">{m.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-1 w-full mb-1"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="bg-green-700 text-white p-1 w-full">
        Send
      </button>
    </div>
  );
}
