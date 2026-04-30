import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext' 
import toast from "react-hot-toast";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post('/api/seller/login', { email, password })
      if (data.success) {
        setIsSeller(true)
        navigate('/seller')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isSeller) {
      navigate("/seller")
    }
  }, [isSeller])

  return !isSeller && (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center bg-gray-100 text-sm text-gray-600"
    >
      <div className="flex flex-col gap-4 p-8 w-[350px] bg-white rounded-lg shadow-md">

        <p className="text-xl font-semibold text-center">
          <span className="text-green-500">Seller</span> Login
        </p>

        <div>
          <p className="text-xs mb-1">Email</p>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        <div>
          <p className="text-xs mb-1">Password</p>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
        >
          Login
        </button>

      </div>
    </form>
  )
}

export default SellerLogin