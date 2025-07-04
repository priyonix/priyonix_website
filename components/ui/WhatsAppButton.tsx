'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-20 right-5 z-999">
      <a
        href="https://wa.me/917845854585?text=Hi%20Priyonix%2C%20I%20have%20a%20query."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        title="Chat with us on WhatsApp"
        >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

    </div>
  );
}
