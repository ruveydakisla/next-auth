'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-8">
      <div className="col-span-1 lg:col-span-5 bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
          <Image width={80} height={80} src="/logo.png" alt="logo" className="w-20 h-20 mx-auto" />

          <div className="text-center text-2xl font-bold text-gray-800 mt-4">
            Welcome!
          </div>

          <div className="mt-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-2">If you already have an account:</p>
              <button
                onClick={() => router.push('/auth/sign-in')}
                className="w-full bg-[#FF6B6B] text-white py-2 px-4 rounded-full hover:bg-[#ff4c4c] transition"
              >
                Sign In
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-2">Don't have an account?</p>
              <button
                onClick={() => router.push('/auth/sign-up')}
                className="w-full bg-[#FFEDE1] text-[#FF6B6B] py-2 px-4 rounded-full border border-[#FF6B6B] hover:bg-[#ffdad0] transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex col-span-3 bg-[#FFEDE1] items-end justify-center p-4">
        <div className="relative w-[90%] h-[80%] max-h-[80%] right-32">
          <Image
            src="/login-bg.png"
            alt="Login Background"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
