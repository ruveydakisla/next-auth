'use client';

import CloseEye from '@/icons/close-eye';
import OpenEye from '@/icons/open-eye';
import RightArrow from '@/icons/righ-arrow';
import loginSchema from '@/schemas/login-schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PrimaryButton from './primary-button';

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        const res = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: '/dashboard'
        });

        if (res?.ok) {
            router.push('/dashboard');
        } else {
            setSubmitError('Login failed. Please check your credentials.');
        }

        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-4 mt-6">
                    <div>
                        <label htmlFor="email" className="text-sm text-gray-700">
                            Email
                        </label>
                        <Field
                            type="email"
                            name="email"
                            className="w-full p-2 text-gray-900 bg-[#FFF6F4] rounded mt-2"
                            placeholder="Enter your email"
                        />
                        <ErrorMessage name="email" component="div" className="text-xs text-red-500 mt-1" />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="text-sm text-gray-700">
                                Password
                            </label>
                            <a href="/auth/forgot-password" className="text-[#FF6B6B] text-sm">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="relative mt-2">
                            <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="w-full p-2 text-gray-900 bg-[#FFF6F4] rounded pr-10"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <CloseEye /> : <OpenEye />}
                            </button>
                        </div>
                        <ErrorMessage name="password" component="div" className="text-xs text-red-500 mt-1" />
                    </div>

                    {submitError && <p className="text-red-500 text-xs mt-2">{submitError}</p>}

                    <PrimaryButton
                        text={isSubmitting ? 'Signing in...' : 'SIGN IN'}
                        icon={<RightArrow width={20} height={20} color="#FFFFFF" />}
                    />
                </Form>
            )}
        </Formik>
    );
}
