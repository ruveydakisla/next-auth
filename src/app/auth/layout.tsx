import Image from "next/image";

export default function AuthLayout({ children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-8">
            <div className="col-span-1 lg:col-span-5 bg-white flex items-center justify-center p-6">
                <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
                    <Image width={80}
                        height={80} src="/logo.png" alt="logo" className="w-20 h-20" />
                    {children}
                </div>
            </div>

            {/* Image Section */}
            <div className="hidden lg:flex col-span-3 bg-[#FFEDE1] items-end justify-center p-4">
                <div className="relative w-[90%] h-[80%]  max-h-[80%] right-32">
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