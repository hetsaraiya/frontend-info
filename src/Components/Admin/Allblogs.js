import data from "../BlogList/data.json"
import React, { useState, useEffect } from "react";
import axios from "axios";
function Allblogs(props) {
	const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER + "/admin_use/allblogs"
        );
        const fetchedBlogData = response.data;
        console.log(fetchedBlogData)
        setBlogData(fetchedBlogData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);


	return (
		<>
			<div className="w-full text-center my-5 mb-10">
				<p className="text-2xl font-extrabold uppercase dark:bg-white bg-black bg-clip-text text-transparent bg-gradient-to-r from-[#ffe32d] to-[#ff6d2d] transition-all duration-300 w-fit mx-auto">All Blogs</p>
			</div>
			<div className="my-5 mb-10 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:px-20 px-10 w-full">
				{Object.keys(blogData).map((id,index) => {
					return (
						<div
							key={id}
							className={
								"hover:shadow-none hover:border-[#F05225] border-transparent border-[1px] hover:border-[1px] transition-all duration-500 ease-in-out hover:bg-gradient-to-b rounded-lg cursor-pointer relative group overflow-hidden " +
								(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
							}
							id={"allBlog-" + id}
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="0"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<div className="absolute right-4 bottom-4 flex flex-col gap-y-3 bg-white shadow-xl dark:shadow-[#F05225] dark:shadow-md dark:bg-[#101010] p-2 rounded-lg translate-x-[200%] group-hover:translate-x-0 transition-all duration-300">
								{/* Edit */}
								<svg width={20} height={20} viewBox="0 0 22 22" fill="none">
									<path d="M9.97124 0.905273H6.07645C2.87332 0.905273 0.86499 3.17298 0.86499 6.3834V15.0438C0.86499 18.2542 2.86395 20.5219 6.07645 20.5219H15.2681C18.4817 20.5219 20.4806 18.2542 20.4806 15.0438V10.848" stroke="#37A945" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
									<path fillRule="evenodd" clipRule="evenodd" d="M7.19565 9.37617L14.98 1.5918C15.9498 0.623047 17.5217 0.623047 18.4915 1.5918L19.7592 2.85951C20.729 3.8293 20.729 5.40221 19.7592 6.37096L11.9373 14.1928C11.5134 14.6168 10.9384 14.8553 10.3384 14.8553H6.43628L6.5342 10.9178C6.54878 10.3387 6.78524 9.78659 7.19565 9.37617Z" stroke="#37A945" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
									<path d="M13.7971 2.79492L18.5534 7.55117" stroke="#37A945" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								{/* Delete */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="red"
									className="bi bi-trash"
									viewBox="0 0 16 16"
									onClick={() => {
										document.getElementById("allBlog-" + id).style.transform = "scale(0.1)"
										document.getElementById("allBlog-" + id).style.opacity = "0"
										setTimeout(() => {
											document.getElementById("allBlog-" + id).classList.add("hidden")
										}, 300)
									}}
								>
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
									<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
								</svg>
								{/* Reject */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={20}
									height={20}
									fill="orange"
									className="bi bi-x-lg"
									viewBox="0 0 16 16"
									onClick={() => {
										document.getElementById("allBlog-" + id).style.transform = "scale(0.1)"
										document.getElementById("allBlog-" + id).style.opacity = "0"
										setTimeout(() => {
											document.getElementById("allBlog-" + id).classList.add("hidden")
										}, 300)
									}}
								>
									<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
								</svg>
							</div>
							<div class="w-[326px] h-fit p-6 rounded-md">
								<div className="flex flex-row justify-center gap-x-5 items-center">
									<img
										className="w-[10%] h-[10%] rounded-full "
										src={blogData[index]["fields"]["title"]}
										alt="owner"
									/>
									<div className=" font-normal text-[13px] ">
										<h1>{blogData[index]["fields"]["author"]}</h1>
									</div>
									<div className="border-[1px] rounded-full py-1 px-3">
										<h5 className=" flex items-center font-normal lg:text-description text-[10px]">
											{blogData[index]["fields"]["timeStamp"]}
										</h5>
									</div>
								</div>
								<div className="my-6 h-fit overflow-hidden rounded-lg">
									<img
										className="w-full h-[50%] mb-1 rounded-md transition duration-300 ease-in-out hover:scale-105"
										src={process.env.REACT_APP_SERVER + "/media/" + blogData[index]["fields"]["thumbnail"]}
										alt="Bonnie "
									/>
								</div>
								<div className="">
									<h1 className="p-1 text-subtitle not-italic font-medium capitalize">
										{blogData[index]["fields"]["title"]}
									</h1>
								</div>
								<div className="">
									<p className="p-1 text-description not-italic font-light capitalize">
										{blogData[index]["fields"]["content"]}
									</p>
								</div>
								<div className="text-gradient">
									<h1 className="text-subtitle">Read More</h1>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
		// <div className="blog-upload-home">
		//     <Navbar />
		//     <h2 className="text-center">All Blogs</h2>
		//     <table className="border-collapse p-[1vw] w-[90vw] text-center text-[1.1vw] mx-auto my-[4vw]">   
		//     <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
		//             <th className='border-collapse p-[1vw]'>Sr No.</th>
		//             <th className='border-collapse p-[1vw]'>Title</th>
		//             <th className='border-collapse p-[1vw]'>Description</th>
		//             <th className='border-collapse p-[1vw]'>Author</th>
		//             <th className='border-collapse p-[1vw]'>Time</th>
		//             <th className='border-collapse p-[1vw]'>Action</th>
		//         </tr>
		//         {demoData.map((blog, index) => (
		//             <tr className='bg-[rgba(30,143,255,0.651)] text-[white] border-b-[black] border-b border-solid'>
		//                 <td className='border-collapse p-[1vw]'>{index + 1}</td>
		//                 <td className='border-collapse p-[1vw]'>{blog.title}</td>
		//                 <td className='border-collapse p-[1vw]'>{blog.description}...</td>
		//                 <td className='border-collapse p-[1vw]'>{blog.Author}</td>
		//                 <td className='border-collapse p-[1vw]'>{blog.time}</td>
		//                 <td className='border-collapse p-[1vw]'>Read Blog</td>
		//             </tr>
		//         ))}
		//     </table>
		//     <Footer />
		// </div>
	);
}

export default Allblogs;