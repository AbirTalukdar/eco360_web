'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Login failed');
      }

      const data = await response.json();
      setSuccess('Login successful! Redirecting...');
      document.cookie = `token=${data.token}; path=/;`; // Store JWT in a cookie
      setTimeout(() => router.push('/admin/portal'), 2000); // Redirect after success
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-white">
      <form
        className="bg-natural-white max-w-md w-full p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center text-dark-gray-green">
          Please login to your account
        </h2>
        {/* <p className="text-sm text-muted-green mb-6 text-center">
          Please login to your account
        </p> */}

        {/* Error and Success Messages */}
        {error && (
          <p className="text-bright-orange text-sm mb-4 text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="text-soft-green text-sm mb-4 text-center">
            {success}
          </p>
        )}

        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-dark-gray-green"
          >
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your username"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-dark-gray-green"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-bright-blue"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-400 py-3 text-natural-white font-semibold bg-bright-blue rounded-lg shadow hover:bg-bright-blue-light transition duration-300 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:ring-offset-1"
        >
          Login
        </button>

        {/* Footer */}
        {/* <div className="mt-6 text-center">
          <p className="text-sm text-dark-gray-green">
            Don't have an account?{' '}
            <a
              href="/register"
              className="text-bright-blue hover:underline font-medium"
            >
              Sign up
            </a>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default LoginPage;
