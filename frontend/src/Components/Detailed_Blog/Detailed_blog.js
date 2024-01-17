import React, { useEffect } from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './DetailedBlog.css'
import ReactPlayer from 'react-player/youtube';

const DetailedBlog = (props) => {
	useEffect(() => {
		window.scroll(0, 0)
	})
	console.log(props);
	// const blogData = props.location.state
	return (
		<>
			{/* <Navbar /> */}
			<div className='px-10'>
				<div className="lg:w-[50vw] mx-auto my-[3vw] ">
					{/* <h1 className=" text-[2vw]">blogData.blogTitle</h1> */}
					<div className="w-full text-center my-5 mb-10">
						<p className="lg:text-2xl font-extrabold uppercase dark:bg-white bg-black bg-clip-text text-transparent bg-gradient-to-r from-[#ffe32d] to-[#ff6d2d] transition-all duration-300 w-fit">Demo Title</p>
					</div>
					<div className="flex flex-col lg:flex-row lg:items-center justify-between mx-[0vw] my-[2vw]">
						<div className='flex items-center'>
							<img className="lg:h-[5vw] lg:w-[5vw] h-14 w-14 rounded-[50%] border-2 border-black dark:border-white" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8UDw0TExAQFhYWDQ8PFhYPEBYNDxcNFhgXFxYZGRgaHikhGRsmHBYWIjIiJiosLy8vGSA1OjUtOSkuLywBCgoKDg0OHBAQGy4mHiYuLi4uLiwsMDAuLi4uMC4uLi8uLC4sLi4sLi4uLC4uLi4uLi4uLi4uLi4uLi4uLi4uLP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABDEAACAQICBgUIBwYGAwAAAAAAAQIDEQQhBQYSMUFRImFxgZETIzJScqGxwQdCgqLR4fAzYnOywvEUJGODktI0Q1P/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMxEAAgECAwUHAgYDAQAAAAAAAAECAxEEITEFEkFR0WFxkaGxwfATgRQiM1LC4SMyckL/2gAMAwEAAhEDEQA/AO4AAAAAAAAAAHipUjFOUmopK7cmkkutsA9giulNdKELqlF1Xz9Cn4734d5FcfrHi6t9qq4x9Wn5uPis33szusrTxVOOmfcdIxmkqFP9pVpx6pSW0+7eafEa6YOPo+Un7ENlfeaOc2Btuoqyxs3okvMmtXX1fUwzftVVH3KLLEtfKvChTXbUb+REQZsiL8VV/d6dCXR17q//AAp905L5F6lr762G741b+5x+ZCwLIfiqvP06HQ6GuuEfpKpD2oqS+638DcYPTGGq22K1OTfDa2Z/8XmckKbJjdRLHGzWqTO1g5No/TmKo22KsrL6s/OQt2Pd3WJTozXenKyrw2H61O84d8d695russwxdOWTy+cyYAs4fEQqRUoTjKL3OLUkXjBaAAAAAAAAAGYGYAAAAAAAAPLaSbbSSV88kkQbWPW1y2qWHbUd0qqyb9jkuvw5mUrkdWrGmryN3p3WejQvFdOp6qfRi/3nw7N/YQLSelq9eV6s21e6iujTXYvm8zCBulY5VWvKprpyAAMkIAAAAuVjBvdd+8aK7CzdlqUBdWGqepIo8NNfVkR/Vh+5eKJfoVbX3X4Mtgo1zy7SpIRAAAGRgNIVqMtqlNxfG2cX1NbmTrQWt1Krswq2pz3J76Un1P6r6n4nPQYaJaVedPTTkdqBznVzWqdHZp1m50tyfpTgv6o9XhyOhUK0ZxjKElKLV007po0asdWlWjUV14FwAGCUAAAXAuAAAAAeW0k22kkr55JI9EE110/tOWHpy6Kdqslxl6nYuPhzMpXI6tVU43Zi61ayus5UqTapJ2bWTqP/AK9XEjQBucac3N70gADJqADNwOEv0pbuC59vURVq0KMN+ZNh8POvPchr5Jc2Y9DDyluXfuM2no6K9J39xmpWBwq20q03+X8q7NfHXwsemobIoU1+dbz7dPDTxv3luFCEd0V8WXblAUJScneTv3nSjFQVoqy7MgVKAwbFJJPerrrzMPEYBPOOXU9z/AzQS0a9Si7wdvTw0IK+HpV1apG/bx+z1NBJNNpg2ekaF1tLet/XE1h6XDYhV6e8vuuT+aHkMZhZYaruPNcHzXzL+rAAFgqg3erWsE8PPZleVKT6Ud7i/Wj19XE0gBtGTi7o7LQrRnGMoyUoySaazTRdOb6o6f8AIz8nUfmpPe//AFzfH2Xx8ed+kEbVjsUaqqRuvuAAYJRcC4AAB4q1FGMpSdkouTb3KKzbANFrbpn/AA9G0X5yd1HnGP1pfh1vqOambprSEq9epUd7N2inwpr0V8+1swiRKxxq9X6kr8OAABkhAAAPVKF3bmze2SSS7DRUZ2lF8pfI3zOJtdu8Fwz9vax6LYSjuzfG68M7ed/ARi2XVRS3v5Fvbf8AY8nIO8X9mHV4lVGHV4mODNwZPko/pniVDk/EspnuNZgDyUjzJcD3Ks3ksi2YA6jRVYWk1yZvTTY9ecn3fA6uyZWqSj2X8H/ZxNuQTpQnydvFN/xRZAB3TzQAAAJ9qPpnykPIzfShG8G98qXLtXwtyICXcFip0qlOpB2lCSkuvmn1NXXeYauS0arpy3vHuOygxdH4uNWlTqR9GcdrrvxXanddxlEZ2k75oWAsAARXX3SWxQjRTzqvP+FHf4uy8SVHKtasd5XF1pX6MX5OPswyf3tp95mOpWxU92nbnkaoAEhyQAAAAAAb9KyXYkaBb12kowFNOor8LvwOPtVNunFdvsjv7Dsvqy/5/kzJwujbq8211Lf3mStH0vV+8zLBBGjCKtY6rqSfEwJ6Mg9zku+6MSto2a3WkurJ+BugYlh6b4W7jKqyRGpRadmmu3Iok27L3Zskkop5NJ9quUjBLckuxWIfwmevkSfX7DXYTR3Gf/H8T3jsDHZbgrNK+W5ribEE6oQ3d23UidSV7kZNPj35yfavgjdzjaUlyk14Mj9SV3d8Wb7Jj/klLkreL/oobcn/AIoR5u/grfyPIAO4eaAAAAAAJn9H2ks6lBv/AFIe5TXwfiTc49ozGOjXo1V9Sab9jdJd6bR1+Mk0muKun1EclmdTBz3obvL04HqwFgYLZh6WxXkqFap6tOUl1yt0ffY5Cjo+vuI2cHs+vVhDuV5f0nODeOhzMbK80uS9QADYpgAAAAAFCU6Mqecg+fzWRqNC4FVZy2vRik2t129y9zNtiaWxKLirLJpLcmjkbTkrxa/8v1t0R6HYtKSjJvSWn2v1ZvgeYyuk+DSZ6NDoAAAAAAAAAEexjtOq/wB+T95G0SmjTU5zbV1eTd92fA0umsCqU1s+jJNpPOzW9e9G2y2k5P8Ac/S/XyOftqEpRhLhHX726IwAAdg88AAAAAADqOqOK8pg6D4xi6T+w7L3WfecuJx9HNfzeIp8pwmvtK39JrItYOVqluZMswMwaHVIX9I9XLCQ5urLw2Uv5mQkl30jS87hlypTfi1+BESRaHHxX6r+cEAAZIAAAAAADearP9t/tv8AmNvjIpwlfhmu0j+r9fZrWe6Sa+1vXwfiSDGehLu+KOVjVaUu72PTbKmnQilwbXnf3MjR09qlHqvHwMo1+h5dCS5P4r8jYFak7wT7C9NWkwACQ0AAABjaQqbNOT4u0fH8rmSa7TEuhFc5X8F+ZHVdoNm8FeSKYOK2I9l+81OtD/Yf7j/lNvhPQj2P4sjusNfarWW6MUvtb3+uos4Jfmjbl7W9yjtWe7QknxaXnf2NaADqnmQAAAAAASn6PKlsTWj61G/fGUf+zIsSLUN2xq66VRfB/Iw9CbD/AKse86RmBfqBGdkgf0jLzuG/hTXg1+JESa/SPT/8SX8aL79hr4MhRItDj4r9V/OCAAMkAAAAAAATd01lZ3uuZI6GlY1Kbi8p2WW9Pr/IjhewH7SHa/gytiqalSlfgm/Iu4DETpVoqOkmk/u7eVyUaHn0pR5xT8P7m3I/gqmzUg+uz7HkSA42FleFuR6qsrSuACxLFU1vnG/bf4FhtLUiSvoXwWIYqm/rx8bfEvhNPQNW1BqNMTvKK5Rv4/2NuaDG1NqpN8L2XYsivipWhbmS0V+a5braVjTpqMc55q25LN5/kRyTbbb4u77S9i305fZ+CLR2cJBRpRtxSfkeVx+InVrSUtItpfZ+9gACyUgAAAAAASDUNf51dVOo/gvmR8k/0e074mpLhGg13uUfwZh6E2H/AFY950O4FwRnZIxr9RvhFL1KsJdzTj8Wjnh1vTeE8rhsRDe5UpW9tZx96RySJvE5mNjaafNAAGxTAAAAAABewb85D2iyeqU7Si+UvkaTjvQceafnl7m9KSjOMnwafgzfGwpaTtBJpuW7kmjXsoeSp1JRzie8lBPJmVOvVqO2b6orL9dpcp6LnvbS97LWHx04K2TXJr8DJWlecPvfkTR+lLOo22RvfWUVkWqmi5rNOL9zPFOvVpuzulyksv12GS9K/ueMvyMXEY6c1Z2S5JfiJfSjnTbTC33lJZGRV0neDSTTeXNWNXUeTPZbrPciKdSU85MkjBLJGoxD6cu0tlakrt9vwRQ9bCO7FLkl5Zex4OrJSqSkuLb8WAAbGgAAAAAAJv8ARzQ6OJqc5QpruTb/AJkQg6dqbhdjBUectqo/tPo/dUTWWhawcb1L8jeXABodUHJtYcD5LFV4Wsttzj7Es14Xt3HWSH/SDo7ap066WcH5OX8OT6L7pP7xmLzKuLhvU7rhn1IKACQ5QAAAAAABmaO0VXrPzcG16z6MF3/gSjB6qxopVKklUknuStCL7/S/WRi9iWnQnU0WXM1FBS2IOUWm48Va63XPRv8AFYdTjZ796fJmjqU3FtSVmjzeNwzpTuv9Xp2dnTsPY4StvwUW/wAy17e3qeAAUi0AAAUbLLpzmp7EW2o3suW4uJSnJQirt/rwJBgsKqcdlZve3zZdwWGdWe8/9Vr069hVxVZQg4p5v5cgYJxi9XIV7yT2JesldSf7y+ZGNJ6DxFC7nC8fXh0od/Fd56S9zx9TDzp9q5/NDXAAyQgAAAAAF7A4V1atKmt85xj3Pe+5XfcdhpU1GMYxVkoqK7FkkQT6P9HbVSpWaygtiP8AEkul4RdvtE+NJHTwcLQ3ufp8uLAWBqXAWcVh4zhOEleMouLXU8i8ADjuksFKjWqUpb4ytfnHemu1WMc6FrtobytLysF06azS3ypb2u1b/E56SJ5HFr0vpztw4AF7B4OpVmoU4OUurclzb3JdpM9Eao04WlWaqS37K6NNdvGXw6g3YUqM6mnjwIno3RNeu/NwbV85S6NNd/yRMNF6pUadpVX5WXJ9GCfZx7/AkMYqKSSS4JJWVupFTRyZ0KeFhDN5v5wKRikkkkuCSVklySKtcwDBZNXisNsu/D4GDicNGaz7nxRIXG+/dyNZisM45r0f1vMSjGacZK6NoycXdakaxGGlB5rLg1uZYNhrNpF0MNOcVduSpxurxUpXzfcn32IBR05iIq20pe3FN+KsznvYlSa3qLVuT6petu8trakI5VF9106EubPdChOo7RWXGTyRDK+mq8vrKPs5fG5NdTNKTrUJRmulScYbVsnFp7N+vJ+4zHYlSC36rVuS6tegltSDe7TWfN9OpuMHhI01aObe9ve/yM3D0HJ9XFjD0HJ9XFm1pwUUki/GKgt2KyKkpOTu9SsIpJJFQDJqaLSuq+Hq3lFeTnzgrwb647vCxENKaCxFC7lG8PXh0o9/GPedMBlNor1MNCeej7OhyAHQNLaq0at5U/NT/dXm2+uPDtXvITpHRtajLZqRa5NZwl2P9M3TTOfVoTp66czFPVGlKc4wirylJRS5yeSPJNdRNDW/zE1vTjTT5bpT79y7+Ybsa0qbqS3USjRGBjQoU6UfqxzfObzk/G5mgEZ2kklZCwFusAyAAACCae1Ul/iIOirU6k+lypy3t+y87deXInZSSVrGU7EdWlGorSNXo3R9KhTUKcbc2/SlLnJmUVlHZ+T5lDBukkrIAAAAAABq+XAAA0+ntCqvhcTRjvklKF+FSPSir8rq3Yzi9SDi5Rkmmm001ZqS3po+gDluuc1LHYjJdHycN3KEb+9su4Obu48NStiI6SIedc1N0I6OChGaanUn5eae9XVox6rRS72yDaDmoYrCysssRS4cHJJ+5nXzbGTeUTGHis2UhFRSSRUAoFoAAAAAAFjF4aFWEoTipRe9P5cn1l8rFNuy/JIAhOG1Qk8W4O/kY2m57nKL3Q9rJ36s+KJ9CCSUUkkkkkskktwhFJWR6Mt3I6dKNO+6AAYJRmBmAAAAAAACkkrZmPUi1m93P8TJABiAuzpcV4FoGAAAAAAAch03V2sVipc8RVt2KTS9yR12UrJvkm/A4rOd23xbb73mXcEs2+755FbEvJIRm4tNb01JdqzR2qMk0nzSfczip17QlXawuGk+OHpeOyrm2NWUX3mMM82ZoAKBaAAAABcjSb35fEA8RTeS73wX5mRCKSsiqVskVBkAAAAAAX6gLgAAAAAAAAAAHmcE9/5noAFiVJ8M/cy2+W7tMso+QBigvujHhl2Hl0OvxQMGs03V2MLipcVQq+Oy7HIjrun8BVq4atTpuG1OMUtqTSttJvhyTINLUfHr6tJ9lT8UXcLOEYu7K1eMm1ZEbOo6mVdrA4f93bh4Tl8rERjqPj3vjTXbUXyRMdVNEV6GHdOr5O/lZSWxJyWy1Hflvvc2xVSEoZNamKEZKWaNuC55Fve14XPapLrZQLRY3/lmy4qTfV72XUluWXZkegZPMIJbvHiegAAAAAAAAAABcC4AHHuHEAAPgJAACQYAAQQAAQXEAAot7K8e4AAcRyAADDAADAAAQiAAFx7QuIAA4jiAAHwD+YAAkGAAeQAAf//Z" alt="avtar" />
							<div style={{ marginLeft: "1.6vw" }}>
								<p className='lg:text-[0.96vw] text-sm'>Written By</p>
								<p className='lg:text-[0.96vw] text-sm capitalize'>Auther Name</p>
							</div>
						</div>
						<p className='lg:text-[0.96vw] text-sm mt-3 lg:mt-0'>Feb 16,2022 5:40 p.m. IST</p>
					</div>
					<img className='w-full lg:h-[34vw] shadow-xl dark:shadow-[#F05225] dark:shadow-md rounded-xl lg:mb-10 mb-5' src="/img/blogs.png" alt="blog" />
					<p className="lg:text-[1.2vw] text-sm text-justify leading-2 my-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<p className="lg:text-[1.2vw] text-sm text-justify leading-2 my-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<p className="lg:text-[1.2vw] text-sm text-justify leading-2 my-2">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
					<img className='w-full lg:h-[34vw] shadow-xl dark:shadow-[#F05225] dark:shadow-md rounded-xl my-10' src="/img/blogs.png" alt="blog" />
					<p className="lg:text-[1.2vw] text-sm text-justify leading-2 my-2">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<p className="lg:text-[1.2vw] text-sm text-justify leading-2 my-2">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
				<div className="lg:w-[22vw] md:w-[50%] w-[80%] fixed lg:left-[76vw] md:left-[45vw] left-10 md:bottom-[1vw] bottom-4 rounded-xl transition-all duration-300" id='blogVideoContainer'>
					<div className={"absolute -right-2 -top-3 rounded-full p-1 cursor-pointer " + (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							fill="currentColor"
							className="bi bi-x-lg"
							viewBox="0 0 16 16"
							onClick={()=>{
								document.getElementById("blogVideoContainer").classList.add("scale-0","opacity-0")
							}}
						>
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</div>
					<ReactPlayer
						url="https://www.youtube.com/embed/Nv8upm_RGNM"
						className="rounded-xl overflow-hidden"
						playing={true}
						loop={true}
						controls={true}
						muted={true}
						height="false"
						width="false"
					/>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default DetailedBlog;