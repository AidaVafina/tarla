import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/AuthPopup.css'; // Стили для попапа

interface AuthPopupProps {
    onClose: () => void; // Функция для закрытия попапа
}

const AuthPopup: React.FC<AuthPopupProps> = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // Управляем состоянием для переключения между входом и регистрацией

    // Схемы валидации для входа и регистрации
    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const signupValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match') // Заменяем null на undefined
            .required('Confirm password is required'),
    });

    return (
        <div className="auth-popup">
            <div className="auth-popup-overlay" onClick={onClose}></div>
            <div className="auth-popup-content">
                <button className="auth-popup-close" onClick={onClose}>×</button>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

                {isLogin ? (
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={loginValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                            alert('Login successful!');
                            onClose(); // Закрытие попапа после успешной отправки
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="auth-form">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input-field"
                                />
                                <ErrorMessage name="email" component="div" className="error-message" />

                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input-field"
                                />
                                <ErrorMessage name="password" component="div" className="error-message" />

                                <button
                                    type="submit"
                                    className="auth-button"
                                    disabled={isSubmitting}
                                >
                                    Log In
                                </button>
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <Formik
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        validationSchema={signupValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                            alert('Sign Up successful!');
                            onClose(); // Закрытие попапа после успешной отправки
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="auth-form">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input-field"
                                />
                                <ErrorMessage name="email" component="div" className="error-message" />

                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input-field"
                                />
                                <ErrorMessage name="password" component="div" className="error-message" />

                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="input-field"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="error-message" />

                                <button
                                    type="submit"
                                    className="auth-button"
                                    disabled={isSubmitting}
                                >
                                    Sign Up
                                </button>
                            </Form>
                        )}
                    </Formik>
                )}

                <p>
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
                    <span className="auth-toggle" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPopup;
