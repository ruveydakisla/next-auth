
import RegisterForm from '@/components/register-form';

export default function Page() {
    return (
        <>
            <div className="mt-4">
                <p className="text-gray-400 text-sm">Welcome !!!</p>
                <div className="text-black text-3xl font-bold">Sign up</div>
            </div>
            <RegisterForm />
            <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                    You already have account?{' '}
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
