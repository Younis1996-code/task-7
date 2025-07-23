import React from 'react'
import PassInput from './PassInput'
import Link from 'next/link'
import googleImage from "../../assets/grommet-icons_google.svg"
import Image from 'next/image'

const ModalForm = ({modalOpen, setModalOpen} : {modalOpen: string, setModalOpen: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <form className='flex flex-col gap-5 w-full'>
      <div className={`flex-col gap-2.5 w-full ${modalOpen === "login" ? "hidden" : "flex"}`}>
        <label className='text-lg/[100%] font-semibold text-[#333333]/60' htmlFor="name">Name and Surname</label>
        <input className='py-3.5 px-6 border border-[#33333333] rounded-lg text-base/[100%] font-normal text-[#333333]/50 focus:outline-none' type="text" id="name" name="name" placeholder='Enter your name and surname' />
      </div>
      <div className='flex flex-col gap-2.5 w-full'>
        <label className='text-lg/[100%] font-semibold text-[#333333]/60' htmlFor="email">Email Address</label>
        <input className='py-3.5 px-6 border border-[#33333333] rounded-lg text-base/[100%] font-normal text-[#333333]/50 focus:outline-none' type="email" id="email" name="email" placeholder='Enter your email address' />
      </div>
      <div className='flex flex-col gap-2.5 w-full'>
        <label className='text-lg/[100%] font-semibold text-[#333333]/60' htmlFor="password">Password</label>
        <PassInput />
      </div>

      {modalOpen === "login" ? (
        <p className='w-full'><Link href="/forgot-password" className='text-sm/[100%] font-normal text-[#333333]/60 float-end'>Forgot your password?</Link></p>
      ) : (
        <div className='flex items-center gap-2.5'>
            <input type="checkbox" id="terms" name="terms" className='cursor-pointer' />
            <label htmlFor="terms" className="text-sm/[100%] font-normal text-[#333333]/60 cursor-pointer">I agree to the <span className="text-[#FA8B02]">terms</span> and <span className="text-[#FA8B02]">Privacy</span></label>
        </div>
      )}

      <div className='flex flex-col gap-1.5'>
      <button className='py-2.5 px-6 bg-[#FA8B02] rounded-[50px] text-xl/[100%] font-semibold text-white cursor-pointer'>{modalOpen === "login" ? "Sign In" : "Sign Up"}</button>

      <p className='text-base/[100%] font-normal text-[#333333]/40 text-center'>or</p>

      <button className='relative py-2.5 px-6 rounded-[50px] text-lg/[100%] font-semibold text-[#333333]/40 cursor-pointer border border-[#333333]/20'>
        <Image src={googleImage} alt="google" className='absolute top-1/2 left-6 transform -translate-y-1/2' />Sign In with Google</button>

      </div>

      <p className='text-base/[100%] font-normal text-center'>{modalOpen === "login" ? "Don’t" : "Already"} have an account ? <span>{modalOpen === "login" ? <span onClick={() => setModalOpen("signup")} className='text-[#FA8B02] font-semibold cursor-pointer'>Sign Up</span> : <span onClick={() => setModalOpen("login")} className='text-[#FA8B02] font-semibold cursor-pointer'>Sign In</span>}</span> </p>

      
    </form>
  )
}

export default ModalForm
