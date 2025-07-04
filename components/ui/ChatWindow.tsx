// ChatWindow.tsx
'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ChatWindowProps {
    onClose: () => void;
}

interface Message {
    text: string;
    from: 'bot' | 'user'; // ✅ Explicitly restrict the type
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hi! How can I assist you today?", from: "bot" }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, from: 'user' }; // ✅ Correct type
        setMessages([...messages, userMessage]);
        setInput('');
        setTyping(true);

        setTimeout(() => {
            const botMessage: Message = { text: "Thank you for your query! Our team will get back to you shortly.", from: 'bot' }; // ✅ Correct type
            setMessages(prev => [...prev, botMessage]);
            setTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-20 right-5 w-80 bg-white/10 backdrop-blur-xl border border-gray-300 text-white rounded-2xl p-4 shadow-lg z-50">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-silver">Priyonix Assistant</h2>
                <button onClick={onClose} title='Close Chat'><X size={20} /></button>
            </div>
            <div className="h-64 overflow-y-auto mb-4 space-y-2">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`p-2 rounded-lg max-w-xs ${msg.from === 'bot' ? 'bg-gray-600 text-white self-start' : 'bg-gray-300 text-black self-end'}`}>
                        {msg.text}
                    </div>
                ))}
                {typing && <p className="text-silver italic animate-pulse">Typing...</p>}
            </div>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 rounded-lg border border-gray-400 bg-transparent text-white focus:outline-none"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSend}
                    className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
