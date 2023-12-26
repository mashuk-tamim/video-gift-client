import { FaPlay } from "react-icons/fa6";

const Banner = () => {
	return (
		<div className="">
			<div className="w-full h-screen bg-[url('https://i.ibb.co/KGhqhvp/image-10.png')] bg-cover bg-center">
				<div className="w-full h-full flex flex-col  justify-center items-start bg-banner-gradient text-grayText px-20">
					<p className="uppercase font-bold">This is videogift</p>
					<h1 className="text-5xl font-bold py-10">
						<span className="text-black">Create Unforgettable</span>{" "}
						Videos <br /> Tailored for Each Guest
					</h1>
					<p className="text-base pb-8">
						Transform your guests' experience with personalized
						video that they will <br /> never forget
					</p>
					<div className="flex gap-5">
						<button className="bg-[#f04f4b] text-white rounded-md lg:py-2 px-6 border-[#f04f4b] border">
							Book a Demo
						</button>
						<button className=" text-black btn-ghost btn-outline rounded-md lg:py-2 px-6">
							<FaPlay className="inline-block text-lg"></FaPlay> Watch
							Video
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
