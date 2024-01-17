import React, { useEffect, useState } from "react";
import Navbar from "../Comon/Navbar";
import "./blogUpload.css";
// import Select from "react-select";
import Footer from "../Comon/Footer";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import list from "./list.json"


function BlogUpload(props) {
	const [title, setTitle] = useState("");
	const [selectedOption, setSelectedOption] = useState(null);
	const [isSelectedTypeOfBlog, setIsSelectedTypeOfBlog] = useState("Select")
	const [heading1, setheading1] = useState("");
	const [heading2, setheading2] = useState("");
	const [heading3, setheading3] = useState("");
	const [content1, setcontent1] = useState("");
	const [content2, setcontent2] = useState("");
	const [content3, setcontent3] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [selects, setselects] = useState();

	useEffect(() => {
		document.title = "Upload Blog";
	});
	const options = [
		{ value: "Electronic", label: "Electronic" },
		{ value: "News", label: "News" },
		{ value: "Games", label: "Games" },
		{ value: "Reviews", label: "Reviews" },
		{ value: "Cars", label: "Cars" },
	];
	console.log(selectedOption);
	const sel = (e) => {
		setSelectedOption(e.value);
	};
	const showValues = (e) => {
		e.preventDefault();
		console.log({
			title: title,
			heading1: heading1,
			heading2: heading2,
			heading3: heading3,
			content1: content1,
			content2: content2,
			content3: content3,
			blogType: selectedOption,
		});
		setSelectedOption(null);
		setTitle("");
		setcontent1("");
		setcontent2("");
		setcontent3("");
		setheading1("");
		setheading2("");
		setheading3("");
	};
	return (
		<>
			<div className={"bg-white dark:bg-[#101010]"}>
				{/* <Navbar /> */}
				<div className="w-full text-center my-5 mb-10">
					<p className="text-2xl font-extrabold uppercase dark:bg-white bg-black bg-clip-text text-transparent bg-gradient-to-r from-[#ffe32d] to-[#ff6d2d] transition-all duration-300 w-fit mx-auto">Enter Blog Details</p>
				</div>
				<div
					className={
						"lg:mx-[14vw] mx-8 my-[2vw] p-5 lg:py-8 py-6 rounded-xl " +
						(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
					}
				>
					<form onSubmit={showValues} onReset={showValues}>
						<div className="relative">
							<input
								type="text"
								id="blog-title"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
								autocomplete="off"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='blog-title'>Title</label>
						</div>
						<div className="my-4 mb-5">
							<h2 className="text-black my-3 dark:text-white tracking-[1px]">Thumbnail</h2>
							<label for="thumbnailImage" id="thumbnailImageName" className="cursor-pointer rounded-lg bg-gradient-to-r  from-[#F05225] to-[#EEA820] py-2 px-3 capitalize text-white w-full">choose file</label>
							<input
								id="thumbnailImage"
								type="file"
								name="ThumbnailImage"
								style={{ display: "none" }}
								onInputCapture={() => {
									let imageInput = document.getElementById("thumbnailImage");
									imageInput.addEventListener("change", () => {
										if (imageInput.files.length > 0) {
											const fileName = document.getElementById("thumbnailImage").files[0].name;
											document.getElementById("thumbnailImageName").innerHTML = fileName;
										}
									});
								}}
							/>
						</div>
						<div className="my-6">
							<p className="lg:text-[1.2vw] my-3 lg:mb-0 tracking-[1px]">Type of Blog</p>
							<div className="relative flex flex-col items-center w-full border-b border-black dark:border-white">
								<button onClick={() => setIsOpen((prev) => !prev)} className="w-full flex items-center justify-between  text-lg rounded-lg tracking-wider duration-300">
									{isSelectedTypeOfBlog}
									{!isOpen ? (
										<AiOutlineCaretDown className="h-8" />
									) : (
										<AiOutlineCaretUp className="h-8" />
									)}
								</button>
								{isOpen && (
									<div value={selects} onChange={e => setselects(e.target.value)} className="bg-white dark:bg-[#101010] absolute top-9 flex flex-col items-start rounded-lg p-2 w-full z-50">
										{list.map((item, i) => (
											<div className="flex w-full p-4 justify-between dark:hover:bg-black hover:bg-slate-100 cursor-pointer rounded-lg" onClick={() => {
												setIsSelectedTypeOfBlog(item.select)
												setIsOpen((prev) => !prev)
											}}>
												<h3 className="font-bold">{item.select}</h3>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<div className="relative my-6">
							<input
								type="text"
								id="heading1"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
								autocomplete="off"
								value={heading1}
								onChange={(e) => setheading1(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='heading1'>Heading 1</label>
						</div>
						<div className="relative mt-6">
							<textarea
								type="text"
								id="content1"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black resize-none loginInputs"
								autocomplete="off"
								value={content1}
								onChange={(e) => setcontent1(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='content1'>Content 1</label>
						</div>
						<div className="my-4 mb-5">
							<h2 className="text-black mb-3 dark:text-white tracking-[1px]">Image 1</h2>
							<label for="blogImage1" id="blogImageName1" className="rounded-lg cursor-pointer bg-gradient-to-r  from-[#F05225] to-[#EEA820] py-2 px-3 capitalize text-white w-full">choose file</label>
							<input
								id="blogImage1"
								type="file"
								name="photo"
								style={{ display: "none" }}
								onInputCapture={() => {
									let imageInput = document.getElementById("blogImage1");
									imageInput.addEventListener("change", () => {
										if (imageInput.files.length > 0) {
											const fileName = document.getElementById("blogImage1").files[0].name;
											document.getElementById("blogImageName1").innerHTML = fileName;
										}
									});
								}}
							/>
						</div>
						<div className="relative my-4 mt-7">
							<input
								type="text"
								id="heading2"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
								autocomplete="off"
								value={heading2}
								onChange={(e) => setheading2(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='heading2'>Heading 2</label>
						</div>
						<div className="relative mt-6">
							<textarea
								type="text"
								id="content2"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black resize-none loginInputs"
								autocomplete="off"
								value={content2}
								onChange={(e) => setcontent2(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='content2'>Content 2</label>
						</div>
						<div className="my-4 mb-5">
							<h2 className="text-black my-3 dark:text-white tracking-[1px]">Image 2</h2>
							<label for="blogImage2" id="blogImageName2" className="rounded-lg cursor-pointer bg-gradient-to-r  from-[#F05225] to-[#EEA820] py-2 px-3 capitalize text-white w-full">choose file</label>
							<input
								id="blogImage2"
								type="file"
								name="photo"
								style={{ display: "none" }}
								onInputCapture={() => {
									let imageInput = document.getElementById("blogImage2");
									imageInput.addEventListener("change", () => {
										if (imageInput.files.length > 0) {
											const fileName = document.getElementById("blogImage2").files[0].name;
											document.getElementById("blogImageName2").innerHTML = fileName;
										}
									});
								}}
							/>
						</div>
						<div className="relative my-4 mt-7">
							<input
								type="text"
								id="heading3"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
								autocomplete="off"
								value={heading3}
								onChange={(e) => setheading3(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='heading3'>Heading 3</label>
						</div>
						<div className="relative mt-6">
							<textarea
								type="text"
								id="content3"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black resize-none loginInputs"
								autocomplete="off"
								value={content3}
								onChange={(e) => setcontent3(e.target.value)}
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='content3'>Content 3</label>
						</div>
						<div className="my-4 mb-5">
							<h2 className="text-black py-3 dark:text-white tracking-[1px]">Image 3</h2>
							<label for="blogImage3" id="blogImageName3" className=" rounded-lg bg-gradient-to-r  from-[#F05225] cursor-pointer to-[#EEA820] py-2 px-3 capitalize text-white w-full">choose file</label>
							<input
								id="blogImage3"
								type="file"
								name="photo"
								style={{ display: "none" }}
								onInputCapture={() => {
									let imageInput = document.getElementById("blogImage3");
									imageInput.addEventListener("change", () => {
										if (imageInput.files.length > 0) {
											const fileName = document.getElementById("blogImage3").files[0].name;
											document.getElementById("blogImageName3").innerHTML = fileName;
										}
									});
								}}
							/>
						</div>
						<div className="relative mt-7">
							<input
								type="text"
								id="content"
								className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
								autocomplete="off"
								required
							/>
							<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='content'>Video URL</label>
						</div>
						<div className="space-x-5 mt-5">
							<button
								type="reset"
								className="last:ml-[2vw] lg:text-[1.1vw] bg-gradient-to-r from-[#F05225] to-[#EEA820]  text-[white] transition-[500ms] px-[2vw] py-[0.6vw] rounded-[7px] "
							>
								Reset
							</button>
							<button
								type="submit"
								className="last:ml-[2vw] lg:text-[1.1vw] bg-gradient-to-r from-[#F05225] to-[#EEA820]  text-[white] transition-[500ms] px-[2vw] py-[0.6vw] rounded-[7px]"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
}

export default BlogUpload;
