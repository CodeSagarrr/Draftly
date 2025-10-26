"use client"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff, Leaf, UserRoundPlus } from 'lucide-react'
import React, { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { createUser } from "@/lib/api"

function Register() {
  let FormPayLoad = { Username: "", email: "", password: "" }
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState(FormPayLoad);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();

    const payLoad = {
      username: formdata.Username,
      email: formdata.email,
      password: formdata.password
    };

    createUser(payLoad)
      .then(() => {
        toast.success("You have registerd !")
        setLoading(false);
        FormPayLoad = { Username: "", email: "", password: "" };
      })
      .catch((err) => { 
        toast.error(err.response.data?.error) , setLoading(false)
      })

  }

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-800 dark:text-white shadow-md hover:shadow-lg transition duration-200 absolute top-4 left-4 cursor-pointer"
      >
        <ArrowLeft size={18} className="text-gray-950" />
      </button>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Illustration Panel */}
        <div className="hidden lg:flex flex-col items-center justify-center p-4 lg:p-8">
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-full opacity-20 absolute -top-8 -left-8 lg:-top-10 lg:-left-10"></div>
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-purple-400 to-emerald-500 rounded-full opacity-30 absolute top-8 left-8 lg:top-10 lg:left-10"></div>
            <div className="relative z-10 text-center">
              <Leaf className="h-16 w-16 lg:h-24 lg:w-24 text-emerald-500 mx-auto mb-4 lg:mb-6" />
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                Join Smart Email Assistant Today
              </h1>
              <p className="text-base lg:text-lg text-white dark:text-gray-300 leading-relaxed px-4">
                Create, share, and let AI help you draft professional emails effortlessly..
              </p>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <main
          className="w-full max-w-md mx-auto px-4 sm:px-4 "
        >

          <h1 className="text-4xl flex items-center justify-center font-extrabold sm:mb-10 mb-4 sm:mt-2 mt-16 text-white text-center"> Create Account </h1>
          <div className="max-w-xl lg:max-w-3xl">
            <form
              className="mt-8 grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-6">

                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                  User Name
                </label>

                <input
                  type="text"
                  id="username"
                  name="Username"
                  placeholder="Jhon doe"
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 p-2 outline-none bg-white text-sm text-black shadow-sm"
                />
              </div>


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
                  className={`shrink-0 rounded-md  bg-violet-600 px-12 py-3 text-sm font-medium  transition hover:bg-violet-700 text-white focus:outline-none focus:ring`}
                  onClick={handleSubmit}
                >
                  {
                    loading ? <p className="flex gap-2"> Loading <span className="loader"></span></p> : <p className="flex gap-2">Create an account
                      <UserRoundPlus className="w-5 h-4" /></p>
                  }
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link href="/login" className="text-teal-700 underline"> Log in</Link>.
                </p>

              </div>

              <div className="col-span-6 sm:gap-2">
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Register