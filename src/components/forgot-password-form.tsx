'use client';

import { changePasswordWithAuth0 } from '@/lib/auth0';
import forgotPasswordSchema from '@/schemas/forgot-password-schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import PrimaryButton from './primary-button';

export default function ForgotPasswordForm() {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (
        values: { email: string },
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        setMessage(null);
        setError(null);

        try {
            const res = await changePasswordWithAuth0(values.email);

            console.log(res);

            setMessage('Password reset email sent. Please check your inbox.');
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        }

        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={forgotPasswordSchema}
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
                            placeholder="Enter your email"
                            className="w-full p-2 text-gray-900 bg-[#FFF6F4] rounded mt-2"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-xs text-red-500 mt-1"
                        />
                    </div>

                    {message && <p className="text-green-600 text-sm">{message}</p>}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <PrimaryButton
                        text={isSubmitting ? 'Sending...' : 'Send Reset Email'}
                        icon={null}
                    />
                </Form>
            )}
        </Formik>
    );
}
