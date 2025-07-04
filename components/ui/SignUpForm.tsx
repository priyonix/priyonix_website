// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { useSignUp } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

// export default function SignUpForm({
//   onClose,
//   onSwitch,
// }: {
//   onClose: () => void;
//   onSwitch: () => void;
// }) {
//   const { signUp, setActive, isLoaded } = useSignUp();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [agree, setAgree] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     if (!agree) {
//       setError('You must agree to the terms and conditions!');
//       return;
//     }

//     if (!isLoaded) return;

//     try {
//       const result = await signUp.create({
//         emailAddress: email,
//         password: password,
//       });

//       // Send email verification
//       await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

//       alert('Verification email sent. Please check your inbox.');

//       // Optionally you can redirect or close the form
//       onClose();

//     } catch (err: any) {
//       console.error('Error:', err);
//       setError(err.errors ? err.errors[0].message : 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
//       <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative animate-fade-in">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           &times;
//         </button>

//         {/* Logo */}
//         <div className="flex justify-center mb-3">
//           <Image src="/LOGO_PRIYONIX1.png" alt="Logo" width={40} height={40} className='h-15 w-15' />
//         </div>

//         {/* Heading */}
//         <h2 className="text-xl font-bold text-center mb-3 text-black">Create your account</h2>

//         {error && <p className="text-red-500 text-center mb-2">{error}</p>}

//         {/* Form */}
//         <form className="space-y-3" onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Re-type your password"
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-start space-x-2">
//             <input
//               type="checkbox"
//               className="mt-1"
//               checked={agree}
//               onChange={() => setAgree(!agree)}
//               required
//             />
//             <span className="text-gray-600 text-xs">
//               I agree to the{' '}
//               <a href="#" className="text-blue-500 underline">
//                 terms and conditions
//               </a>
//             </span>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
//           >
//             Sign up
//           </button>
//         </form>

//         {/* Social Icons */}
//         <div className="my-4 flex items-center justify-center">
//           <span className="border-t w-1/4"></span>
//           <span className="mx-2 text-gray-500">or continue with</span>
//           <span className="border-t w-1/4"></span>
//         </div>

//         <div className="flex justify-center space-x-6">
//           <button className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition" title='google'>
//             <Image src="/Google_logo.png" alt="Google Logo" width={40} height={40} />
//           </button>
//           <button className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition" title='linkedin'>
//             <Image src="/linkedin-logo.jpg" alt="linkedin Logo" width={40} height={40} />
//           </button>
//         </div>

//         <p className="text-center text-gray-600 mt-3 text-sm">
//           Already have an account?{' '}
//           <span
//             className="text-indigo-600 cursor-pointer hover:underline"
//             onClick={onSwitch}
//           >
//             Sign in
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
