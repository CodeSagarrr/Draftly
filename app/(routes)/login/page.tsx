"use client"
import { ArrowLeft, Eye, EyeOff, Leaf, UserRoundPlus } from 'lucide-react'
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function LoginPage() {
    let formPayLoad = { email: "", password: "" };
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(formPayLoad);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const authorizeUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setLoading(true);
        e.preventDefault();


        const res = await signIn("credentials", { redirect : false , email : formData.email , password : formData.password  });
        if (res?.ok) {
            toast.success("Now you can access tools !")
            router.push(`${res.url}`);
            setLoading(false);
            formPayLoad = { email : "" , password : ""}
        } else {
            toast.error("Invalid Credentials");
            setLoading(false);
        }
    }

    return (
        <div className='h-screen bg-gray-800  flex lg:flex-row flex-col justify-center items-center p-4 sm:p-6 lg:p-8'>
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-800 dark:text-white shadow-md hover:shadow-lg transition duration-200 absolute top-4 left-4 cursor-pointer"
            ><ArrowLeft size={18} className="text-gray-950" /></button>

            <main className='w-full max-w-md mx-auto px-4 sm:px-4 lg:ml-56 ml-2 lg:mt-0 mt-20'>
                <div>
                    <button
                        onClick={() => signIn("google")}
                        className='max-w-4xl mb-4 w-full flex justify-center items-center bg-gray-100 hover:bg-gray-300 py-1 rounded-md cursor-pointer transition-all '>
                        <p className='flex gap-2 items-center text-black text-md font-semibold '>Google <FcGoogle className='w-5 h-5 text-gray-800' /></p>
                    </button>
                    <button
                        onClick={() => signIn("github")}
                        className='max-w-4xl w-full flex justify-center items-center bg-gray-100 hover:bg-gray-300 py-1 rounded-md cursor-pointer transition-all '>
                        <p className='flex gap-2 items-center text-black text-md  font-semibold '>Github <IoLogoGithub className='w-5 h-5 text-gray-800' /></p>
                    </button>
                </div>

                <hr className='max-w-6xl w-full h-1 rounded-md bg-white mt-4' />

                <div className='max-w-xl lg:max-w-3xl'>
                    <form className='mt-4  grid grid-cols-6 gap-6'>

                        <div className="col-span-6">
                            <label htmlFor="email" className="block text-sm font-medium text-white"> Email </label>

                            <input
                                type="email"
                                id="Email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Jhon@example.com"
                                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 relative">
                            <label htmlFor="password" className="block text-sm font-medium text-white"> Password </label>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="Password"
                                name="password"
                                onChange={handleChange}
                                placeholder="jhon1234"
                                className="mt-1 w-full rounded-md p-2 outline-none border-gray-200 bg-white text-sm text-black shadow-sm"
                            />
                            <button
                                type="button"
                                className="absolute top-6 inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-200"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>

                        </div>
                        <div className="col-span-6">
                            <p className="text-sm text-gray-500">
                                By creating an account, you agree to our
                                <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                and
                                <a href="#" className="text-gray-700 underline">privacy policy</a>.
                            </p>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                            onClick={authorizeUser}
                                className={`shrink-0 rounded-md  bg-violet-600 px-12 py-3 text-sm font-medium  transition hover:bg-violet-700 text-white focus:outline-none focus:ring`}
                            >
                                {
                                    loading ? <p className="flex gap-2"> Loading <span className='loader'></span></p> : <p className="flex gap-2"> Login  account
                                        <UserRoundPlus className="w-5 h-4" /></p>
                                }
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Create account?
                                <Link href="/register" className="text-teal-700 underline"> Signup</Link>.
                            </p>

                        </div>

                    </form>

                </div>

            </main>

            <div className='w-full max-w-6xl mx-auto flex flex-col p-4 justify-between items-center lg:mt-0 mt-10'>
                <Leaf className='h-16 w-16 lg:h-24 lg:w-24 text-emerald-600 ' />
                <h1 className='lg:text-7xl text-4xl text-white font-bold my-3'>Welcome back</h1>
                <p className='text-gray-200 font-semibold lg:text-2xl text-[14px]'>Sign in to access your AI-powered email assistant.</p>
            </div>

        </div>
    )
}

export default LoginPage