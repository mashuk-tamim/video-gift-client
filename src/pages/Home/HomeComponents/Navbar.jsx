import logo from '../../../assets/images/videogift_1.svg'

const Navbar = () => {
    return (
		<section>
			<div className="flex fixed justify-between px-20 py-5 w-screen">
				<div>
					<img src={logo} alt="logo" />
				</div>
				<div className='flex gap-5'>
					<button className="bg-white text-black rounded-md lg:py-2 px-6">
						Log in
					</button>
					<button className="bg-[#f04f4b] text-white rounded-md lg:py-2 px-6">
						Book a Demo
					</button>
				</div>
			</div>
		</section>
	);
};

export default Navbar;