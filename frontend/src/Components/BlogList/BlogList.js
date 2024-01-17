import React ,{ useEffect, useState } from 'react'
import data from "./data.json";
import axios from 'axios';

const BlogList = (props) => {
	const [blogData, setblogData] = useState([]);
	const fetchdata = async()=>{
		await axios
		  .get(process.env.REACT_APP_SERVER + "/blog/bloghome")
		  .then((res) => {
			setblogData(res.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

	}
	useEffect(() => {
	  fetchdata()
	  }, []);
	
	return (
		<div className="my-5 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:px-20 px-10 w-full">
			{data.map((record) => {
				return (
					<a href='blog'>
						<div
							key={record.id}
							className={
								"hover:shadow-none hover:border-[#F05225] border-transparent border-[1px] hover:border-[1px] transition-all duration-500 ease-in-out hover:bg-gradient-to-b rounded-lg cursor-pointer " +
								(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
							}
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-delay="0"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<div class="w-[326px] h-fit p-6 rounded-md">
								<div className="flex flex-row justify-center gap-x-5 items-center">
									<img
										className="w-[10%] h-[10%] rounded-full "
										src={record.proimage}
										alt="owner"
									/>
									<div className=" font-normal text-[13px] ">
										<h1>{record.name}</h1>
									</div>
									<div className="border-[1px] rounded-full py-1 px-3">
										<h5 className=" flex items-center font-normal lg:text-description text-[10px]">
											{record.date}
										</h5>
									</div>
								</div>
								<div className="my-6 h-fit overflow-hidden rounded-lg">
									<img
										className="w-full h-[50%] mb-1 rounded-md transition duration-300 ease-in-out hover:scale-105"
										src={record.image}
										alt="Bonnie "
									/>
								</div>
								<div className="">
									<h1 className="p-1 text-subtitle not-italic font-medium capitalize">
										{record.title}
									</h1>
								</div>
								<div className="">
									<p className="p-1 text-description not-italic font-light capitalize">
										{record.disc}
									</p>
								</div>
								<div className="text-gradient">
									<h1 className="text-subtitle">Read More</h1>
								</div>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	)
}

export default BlogList