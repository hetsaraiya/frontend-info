import React from 'react'

const MobileNavbar = () => {

	const navbarLinks = [
		["All", "#"],
		["Cloud", "#"],
		["Products", "#"],
		["Mobile", "#"],
		["Java", "#"],
		["Big data & Bi", "#"],
		["Software Devlopment", "#"],
		["Ai", "#"],
		["Other", "#"],
	]

	return (
		<div className='w-full h-screen fixed top-0 left-full bg-white dark:bg-[#101010] px-4 py-3 block lg:hidden z-50 transition-all duration-300' id='mobileNavbar'>
			<div className='flex items-center justify-between'>
				<a href='/'>
					<p className='text-2xl text-black dark:text-white'>LOGO</p>
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={25}
					height={25}
					fill="currentColor"
					className="bi bi-x-lg cursor-pointer"
					viewBox="0 0 16 16"
					onClick={() => {
						document.getElementById("mobileNavbar").classList.add("left-full")
						document.getElementById("mobileNavbar").classList.remove("left-0")
					}}
				>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</div>
			<div className='w-full h-full flex items-center justify-center'>
				<ul className='flex flex-col gap-5'>
					{navbarLinks.map((item, index) => (
						<a href={item[1]}>
							<li key={index} className="text-subtitle cursor-pointer relative w-fit after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full">{item[0]}</li>
						</a>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileNavbar