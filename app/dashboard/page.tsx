'use client';

import { useAuth } from "@clerk/nextjs";

export default function Dashboard() {
  const { userId, isSignedIn } = useAuth(); // ✅ No need to await anything

  return (
    <div>
      {isSignedIn ? <p>Welcome, {userId}</p> : <p>Please sign in</p>}
    </div>
  );
}
