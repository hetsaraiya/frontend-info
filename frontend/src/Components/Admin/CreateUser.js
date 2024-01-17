import React, { useState } from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './CreateUser.css'

function CreateUser(props) {
	const [eyeIcon, seteyeIcon] = useState(true)
	const [eyeIconConfirm, seteyeIconConfirm] = useState(true)
	const visiblePass = (e) => {
		console.log(e);
		const userPassword = document.querySelector("#password-user")
		const type = userPassword.getAttribute('type') === 'password' ? 'text' : 'password'
		userPassword.setAttribute('type', type)
		seteyeIcon(!eyeIcon)
	}
	const visibleConfirmPass = (e) => {
		console.log(e);
		const userconfPassword = document.querySelector("#confirm")
		const type = userconfPassword.getAttribute('type') === 'password' ? 'text' : 'password'
		userconfPassword.setAttribute('type', type)
		seteyeIconConfirm(!eyeIconConfirm)
	}
	return (
		<div>
			{/* <Navbar /> */}
			<div className={
				"dark:text-white lg:mx-[34vw] md:mx-28 mx-10 my-[2vw] p-[4vw] rounded-xl " +
				(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
			}>
				{/* <h2 className="text-center text-black dark:text-white  mt-0 mb-[2vw] mx-0 p-0">Enter Details</h2> */}
				<div className="w-full text-center mb-10">
					<p className="text-2xl font-extrabold uppercase dark:bg-white bg-black bg-clip-text text-transparent bg-gradient-to-r from-[#ffe32d] to-[#ff6d2d] transition-all duration-300 w-fit mx-auto">Create User</p>
				</div>
				<form action="">
					<div className="relative my-8">
						<input type="text" id="username" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='username'>Username</label>
					</div>
					<div className="relative my-8">
						<input type="text" id="firstname" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='firstname'>First Name</label>
					</div>
					<div className="relative my-8">
						<input type="text" id="lastname" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='lastname'>Last Name</label>
					</div>
					<div className="relative my-8">
						<input type="email" id="email" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='email'>Email</label>
					</div>
					<div className="relative my-8">
						<input type="password" id="password-user" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='password-user'>Password</label>
						{eyeIcon ? <AiFillEye className="dark:text-white absolute cursor-pointer text-[black] lg:text-[1.2vw] right-0 top-[0.5vw]" onClick={visiblePass} /> : <AiFillEyeInvisible className="dark:text-white absolute cursor-pointer text-[black] lg:text-[1.2vw] right-0 top-[0.5vw]" onClick={visiblePass} />}
					</div>
					<div className="relative my-8">
						<input type="password" id="confirm" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='confirm'>Conform Password</label>
						{eyeIconConfirm ? <AiFillEye className="dark:text-white absolute cursor-pointer text-[black] lg:text-[1.2vw] right-0 top-[0.5vw]" onClick={visibleConfirmPass} /> : <AiFillEyeInvisible className="dark:text-white absolute cursor-pointer text-[black] lg:text-[1.2vw] right-0 top-[0.5vw]" onClick={visibleConfirmPass} />}
					</div>
					<div className='bg-red-700/30 p-2 px-3 rounded-lg scale-0 opacity-0 hidden transition-all duration-300' id='passWarning'>
						<p className='capitalize text-red-600 font-semibold'>Password and Conform Password Does Not Match.</p>
					</div>
					<button type="submit" className="mt-4 w-full lg:text-[1.1vw] text-white cursor-pointer  px-[1.5vw] py-[1vw] rounded-[5px] border-[none] outline-0 bg-gradient-to-r from-[#F05225] to-[#EEA820] transition-[500ms]" onClick={() => {
						let pass = document.getElementById("password-user").value
						let confirmpass = document.getElementById("confirm").value
						if (pass != confirmpass) {
							document.getElementById("passWarning").classList.remove("hidden")
							setTimeout(() => {
								document.getElementById("passWarning").classList.remove("scale-0", "opacity-0")
							}, 300)
						}
						if (pass === confirmpass) {
							document.getElementById("passWarning").classList.add("scale-0", "opacity-0")
							setTimeout(() => {
								document.getElementById("passWarning").classList.add("hidden")
							}, 300)
						}
					}}>Submit</button>
				</form>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default CreateUser;