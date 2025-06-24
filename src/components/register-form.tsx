'use client'

import RightArrow from '@/icons/righ-arrow';
import { signUpWithAuth0 } from '@/lib/auth0';
import userSchema from '@/schemas/user-schema'; 
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PrimaryButton from './primary-button';
import ShowHideButton from './show-hide-button';

export default function RegisterForm() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [submitError, setSubmitError] = useState<string | null>(null)

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        const res = await signUpWithAuth0(values.email, values.password);
        console.log(res);

        if (res?.ok) {
            router.push('/')
        } else {
            setSubmitError('Login failed. Please check your credentials.')
        }
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
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
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-xs text-red-500 mt-1"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm text-gray-700">
                            Password
                        </label>

                        <div className="relative mt-2">
                            <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="w-full p-2 text-gray-900 bg-[#FFF6F4] rounded pr-10"
                                placeholder="Enter your password"
                            />
                            <ShowHideButton setShowPassword={setShowPassword} showPassword={showPassword} />
                        </div>
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-xs text-red-500 mt-1"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="text-sm text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative mt-2">
                            <Field
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                className="w-full p-2 text-gray-900 bg-[#FFF6F4] rounded mt-2"
                                placeholder="Confirm your password"
                            />
                            <ShowHideButton setShowPassword={setShowConfirmPassword} showPassword={showConfirmPassword} />
                        </div>
                        <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-xs text-red-500 mt-1"
                        />
                    </div>

                    {submitError && <p className="text-red-500 text-xs">{submitError}</p>}

                    <PrimaryButton
                        text={isSubmitting ? 'Signing up...' : 'SIGN UP'}
                        icon={<RightArrow width={20} height={20} color="#FFFFFF" />}
                    />
                </Form>
            )}
        </Formik>
    )
}
