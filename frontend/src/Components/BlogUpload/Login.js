import React, { useState } from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './Login.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

function Login(props) {
	const [eyeIcon, seteyeIcon] = useState(true)
	const visiblePass = (e) => {
		console.log(e);
		const userPassword = document.querySelector("#password")
		const type = userPassword.getAttribute('type') === 'password' ? 'text' : 'password'
		userPassword.setAttribute('type', type)
		seteyeIcon(!eyeIcon)
	}
	return (
		<>
			{/* <Navbar /> */}

			<div className={
				"lg:mx-[34vw] md:mx-[28vw] mx-10 my-[2vw] p-[4vw] rounded-xl shadow-2xl dark:shadow-none " +
				(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
			}>
				<h2 className="text-center text-black dark:text-white mt-0 mb-[2vw] mx-0 p-0">Login</h2>
				<form action="">
					<div className="relative my-8">
						<input type="text" id="username" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='username'>Username</label>
					</div>
					<div className="relative my-8">
						<input type="text" id="password" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
						<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='password'>Password</label>
						{eyeIcon ? <AiFillEye className="absolute text-black dark:text-white top-1.5 right-0" onClick={visiblePass} /> : <AiFillEyeInvisible className="absolute text-black dark:text-white top-1.5 right-0" onClick={visiblePass} />}
					</div>
					<button type="submit" className="w-full lg:text-[1.1vw] text-white cursor-pointer mt-[1.4vw] px-[1.5vw] py-[1vw] rounded-[5px] border-[none] outline-0 bg-gradient-to-r from-[#F05225] to-[#EEA820] transition-[500ms] ">Log In</button>
				</form>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Login;