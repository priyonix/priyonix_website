// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { FaTimes } from 'react-icons/fa';
// import { useSignIn } from '@clerk/nextjs';
// import { useState } from 'react';

// export default function LoginPopup({
//   onClose,
//   onSwitch,
// }: {
//   onClose: () => void;
//   onSwitch: () => void;
// }) {
//   const { signIn, isLoaded } = useSignIn();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isLoaded) return;

//     try {
//       await signIn.create({
//         identifier: email,
//         password,
//       });
//       window.location.reload(); // Refresh page to update auth state
//     } catch (err: any) {
//       alert(err.errors[0]?.longMessage || 'Login failed!');
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <motion.div
//           className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center relative"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
//             title="Close"
//           >
//             <FaTimes />
//           </button>

//           {/* Heading */}
//           <h2 className="text-3xl font-bold mb-6 text-black">Welcome Back!</h2>

//           {/* Login Form */}
//           <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
//             >
//               Login
//             </button>
//           </form>

//           {/* Switch to Register */}
//           <p className="text-sm text-gray-500 mt-4">
//             Don't have an account?{' '}
//             <span
//               className="text-blue-600 cursor-pointer hover:underline"
//               onClick={onSwitch}
//             >
//               Register
//             </span>
//           </p>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
