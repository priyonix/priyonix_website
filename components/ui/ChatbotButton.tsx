'use client';
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWindow from '@/components/ui/ChatWindow';

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="fixed bottom-5 right-5 bg-white/60 text-white p-4 rounded-full shadow-lg hover:opacity-80 z-50"
                onClick={() => setIsOpen(!isOpen)}
                title='click'
            >
                <MessageCircle size={24} />
            </button>

            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
        </>
    );
}
