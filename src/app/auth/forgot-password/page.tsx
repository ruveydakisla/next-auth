
import ForgotPasswordForm from '@/components/forgot-password-form';

export default function Page() {
    return (
        <>
            <div className="mt-4">
                <p className="text-gray-400 text-sm">Welcome Back !!!</p>
                <div className="text-black text-3xl font-bold">Forgot Password</div>
            </div>
            <ForgotPasswordForm />
            <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                   
                    <a
                        href="/auth/sign-in"
                        className="text-[#FF6B6B] font-semibold"
                    >
                        Sign In
                    </a>
                </p>
            </div>

        </>
    );
}
