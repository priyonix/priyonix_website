"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-8">
      <motion.h1
        className="text-5xl font-bold text-green-700 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Payment Successful!
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Thank you for booking your course with Priyonix. We’ll contact you shortly.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white py-3 px-8 rounded-full"
        onClick={() => router.push("/")}
      >
        Go to Home
      </motion.button>
    </div>
  );
}
