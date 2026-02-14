'use client';
::
import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${inter.className} flex min-h-screen w-full items-center justify-center bg-[#F4F7FE] px-4`}>
      {/* Main Container */}
      <div className="flex w-full max-w-[1200px] flex-col overflow-hidden rounded-[30px] bg-white shadow-xl lg:h-[800px] lg:flex-row">
        
        {/* Left Side: Login Form */}
        <div className="flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-[60px]">
          
          {/* Header */}
          <header>
            <a href="#" className="flex items-center text-sm font-medium text-[#A3AED0] hover:text-[#2B3674]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back to Synapse
            </a>
          </header>

          <main>
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold text-[#2B3674]">Welcome Back</h1>
              <p className="text-base text-[#A3AED0]">
                Enter your email and password to log in!
              </p>
            </div>

            {/* Google Button */}
            <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F4F7FE] py-4 text-sm font-medium text-[#2B3674] transition duration-200 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Log in with Google
            </button>

            <div className="mb-6 flex items-center text-sm text-[#A3AED0]">
              <div className="h-px flex-1 bg-[#E0E5F2]"></div>
              <span className="px-4">or</span>
              <div className="h-px flex-1 bg-[#E0E5F2]"></div>
            </div>

            <form action="#">
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2B3674]">
                  Email<span className="ml-1 text-[#4318FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@synapse.com"
                  className="w-full rounded-2xl border border-[#E0E5F2] p-4 text-sm text-[#2B3674] outline-none placeholder:text-[#A3AED0] focus:border-[#4318FF]"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#2B3674]">
                  Password<span className="ml-1 text-[#4318FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Min. 6 characters"
                    className="w-full rounded-2xl border border-[#E0E5F2] p-4 text-sm text-[#2B3674] outline-none placeholder:text-[#A3AED0] focus:border-[#4318FF]"
                    required
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#A3AED0]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </span>
                </div>
              </div>

              {/* Checkbox & Forgot Password */}
              <div className="mb-8 flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center select-none text-[#2B3674]">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded border border-[#E0E5F2] bg-white transition peer-checked:border-[#4318FF] peer-checked:bg-[#4318FF]">
                     <svg className="hidden h-3 w-3 text-white peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Keep me logged in
                </label>
                <a href="#" className="font-medium text-[#4318FF] hover:text-[#3311cc]">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-[#4318FF] py-4 text-base font-bold text-white transition hover:bg-[#3311cc]">
                Log In
              </button>
            </form>
          </main>

          <footer>
            <p className="mt-8 text-sm text-[#A3AED0]">
              Not registered yet? <a href="/auth/signIn" className="font-medium text-[#4318FF] hover:text-[#3311cc]">Create an Account</a>
            </p>
          </footer>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative hidden w-1/2 bg-[#F4F7FE] lg:block">
          <img 
            src="/image.png" 
            alt="Side Banner" 
            className="absolute inset-0 h-full w-full object-cover object-center" 
          />
        </div>

      </div>
    </div>
  );
}
