'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin'); 
        }
    }, [status, router]);

    if (status === 'loading') {
        return <p className="p-4">Loading...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
            <p className="mt-2 text-gray-700">
                Hello, {session?.user?.email}! You are now logged in.
            </p>
            <button
                onClick={() => signOut({callbackUrl: '/auth/sign-in'})}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
               Log out
            </button>
        </div>
    );
}
