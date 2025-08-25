import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg mb-4">
          Thank you for booking your course with Priyonix.
        </p>
        <Link
          href="/"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

