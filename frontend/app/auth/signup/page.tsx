"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContexts";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup(fullname, email, password);
    } catch (err: any) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${inter.className} flex min-h-screen w-full items-center justify-center bg-[#F4F7FE] px-4`}>
      <div className="flex w-full max-w-[1200px] flex-col overflow-hidden rounded-[30px] bg-white shadow-xl lg:h-[800px] lg:flex-row">
        
        {/* Left Side: Sign Up Form */}
        <div className="flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-[60px]">
          
          {/* Header */}
          <header>
            <Link href="/" className="flex items-center text-sm font-medium text-[#A3AED0] hover:text-[#2B3674]">
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
            </Link>
          </header>

          <main>
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold text-[#2B3674]">Create Account</h1>
              <p className="text-base text-[#A3AED0]">
                Enter your details to sign up!
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-2xl bg-red-50 p-4 border border-red-200">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div className="mb-6">
                <label htmlFor="fullname" className="mb-2 block text-sm font-medium text-[#2B3674]">
                  Full Name<span className="ml-1 text-[#4318FF]">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="John Doe"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full rounded-2xl border border-[#E0E5F2] p-4 text-sm text-[#2B3674] outline-none placeholder:text-[#A3AED0] focus:border-[#4318FF]"
                  required
                  minLength={3}
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2B3674]">
                  Email<span className="ml-1 text-[#4318FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@synapse.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Min. 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-[#E0E5F2] p-4 text-sm text-[#2B3674] outline-none placeholder:text-[#A3AED0] focus:border-[#4318FF]"
                    required
                    minLength={6}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#A3AED0]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full rounded-2xl bg-[#4318FF] py-4 text-base font-bold text-white transition hover:bg-[#3311cc] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </form>
          </main>

          <footer>
            <p className="mt-8 text-sm text-[#A3AED0]">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-[#4318FF] hover:text-[#3311cc]">
                Login
              </Link>
            </p>
          </footer>
        </div>

        {/* Right Side: Image */}
        <div className="relative hidden w-1/2 bg-[#F4F7FE] lg:block">
          <img 
            src="/image.png" 
            alt="SYNAPSE Signup" 
            className="absolute inset-0 h-full w-full object-cover object-center" 
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
