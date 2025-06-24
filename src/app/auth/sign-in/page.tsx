
import LoginForm from '@/components/login-form';

export default function Page() {
    return (
        <>
            <div className="mt-4">
                <p className="text-gray-400 text-sm">Welcome Back !!!</p>
                <div className="text-black text-3xl font-bold">Sign in</div>
            </div>
            <LoginForm />
            <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                    Don&apos;t have an account?
                    <a
                        href="/auth/sign-up"
                        className="text-[#FF6B6B] font-semibold"
                    >
                        Sign Up
                    </a>
                </p>
            </div>

        </>
    );
}
