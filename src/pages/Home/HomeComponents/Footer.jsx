import { Link } from "react-router-dom";
import logo from "../../../assets/images/videogift_1.svg";

const Footer = () => {
	return (
		<section className="text-grayText px-20 py-10">
			<div className="flex justify-between items-end">
				<div>
					<img src={logo} alt="" />
					<p>Memories Made Together</p>
				</div>
				<div className="flex gap-5 text-black font-medium">
					<Link>Product</Link>
					<Link>Company</Link>
					<Link to="/contact">Contact</Link>
					<Link>Terms</Link>
					<Link>Privacy</Link>
				</div>
			</div>
			<div className="w-full border-[0.5px] border-gray-400 mt-10 mb-6"></div>
			{/* <hr /> */}
			<div className="flex justify-between">
				<div>
					<p>© 2023 VideoGift. All rights reserved.</p>
				</div>
				<div className="flex gap-5">
					{/* twitter */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						viewBox="0 0 20 21"
						fill="none"
					>
						<path
							d="M18.8998 1.1451C18.1666 0.411693 17.2832 0.0449219 16.2503 0.0449219H3.75003C2.71712 0.0449219 1.83372 0.411693 1.10018 1.1451C0.366771 1.87864 0 2.762 0 3.79495V16.2951C0 17.3279 0.366771 18.2114 1.10018 18.9449C1.83372 19.6785 2.71712 20.0452 3.75003 20.0452H16.2502C17.2831 20.0452 18.1665 19.6785 18.8997 18.9449C19.6332 18.2114 20 17.328 20 16.2951V3.79495C20 2.762 19.6332 1.8785 18.8998 1.1451ZM15.2997 7.74041C15.3084 7.81853 15.3128 7.93551 15.3128 8.09204C15.3128 8.82124 15.2063 9.5526 14.9938 10.2859C14.7812 11.0196 14.4556 11.7227 14.0171 12.3954C13.579 13.0681 13.0559 13.6629 12.4484 14.1793C11.8406 14.6956 11.1116 15.1081 10.2607 15.416C9.41021 15.7244 8.49858 15.8786 7.52642 15.8786C6.0161 15.8786 4.61852 15.4704 3.33373 14.6547C3.54206 14.6806 3.7592 14.6937 3.98477 14.6937C5.24352 14.6937 6.37635 14.3031 7.38335 13.5216C6.79315 13.5132 6.26571 13.331 5.80134 12.9748C5.33683 12.6189 5.01357 12.1676 4.83123 11.6206C5.05685 11.6553 5.2261 11.6725 5.33893 11.6725C5.52988 11.6725 5.75131 11.6378 6.00296 11.5686C5.3693 11.4468 4.83552 11.1325 4.40148 10.6246C3.96735 10.1168 3.75035 9.53736 3.75035 8.88637V8.86033C4.21029 9.07719 4.64433 9.19002 5.05238 9.19882C4.26242 8.66919 3.86747 7.90974 3.86747 6.92017C3.86747 6.434 3.99325 5.97396 4.245 5.53992C4.9307 6.382 5.76421 7.05466 6.74499 7.55811C7.72586 8.06152 8.77632 8.34379 9.89606 8.40449C9.85274 8.23957 9.83098 8.03115 9.83098 7.77949C9.83098 7.02415 10.0979 6.37972 10.6318 5.8458C11.1656 5.31193 11.8102 5.0449 12.5653 5.0449C13.3641 5.0449 14.0283 5.33145 14.5578 5.90441C15.1568 5.79158 15.7386 5.57011 16.3027 5.24037C16.0857 5.9086 15.6818 6.41648 15.0918 6.76373C15.6559 6.68547 16.1809 6.53798 16.667 6.32098C16.3024 6.87652 15.8465 7.3496 15.2997 7.74041Z"
							fill="#71717A"
						/>
					</svg>
					{/* instagram */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path
							d="M11.9117 10.0147C11.9117 11.0202 11.0964 11.8355 10.0909 11.8355C9.08533 11.8355 8.27008 11.0202 8.27008 10.0147C8.27008 9.0091 9.08533 8.19385 10.0909 8.19385C11.0964 8.19385 11.9117 9.0091 11.9117 10.0147Z"
							fill="#71717A"
						/>
						<path
							d="M13.1434 4.55225H7.03837C5.70948 4.55225 4.62848 5.63325 4.62848 6.96214V13.0672C4.62848 14.3961 5.70948 15.4771 7.03837 15.4771H13.1434C14.4723 15.4771 15.5533 14.3961 15.5533 13.0672V6.96214C15.5533 5.63325 14.4723 4.55225 13.1434 4.55225ZM10.0909 13.027C8.42986 13.027 7.07853 11.6757 7.07853 10.0147C7.07853 8.35363 8.42986 7.0023 10.0909 7.0023C11.7519 7.0023 13.1033 8.35363 13.1033 10.0147C13.1033 11.6757 11.7519 13.027 10.0909 13.027ZM13.5451 7.16296C13.2123 7.16296 12.9426 6.89326 12.9426 6.56049C12.9426 6.22772 13.2123 5.95802 13.5451 5.95802C13.8778 5.95802 14.1475 6.22772 14.1475 6.56049C14.1475 6.89326 13.8778 7.16296 13.5451 7.16296Z"
							fill="#71717A"
						/>
						<path
							d="M14.7266 0H5.27344C2.36572 0 0 2.36572 0 5.27344V14.7266C0 17.6343 2.36572 20 5.27344 20H14.7266C17.6343 20 20 17.6343 20 14.7266V5.27344C20 2.36572 17.6343 0 14.7266 0ZM16.4844 12.9688C16.4844 14.9072 14.9072 16.4844 12.9688 16.4844H7.03125C5.09277 16.4844 3.51562 14.9072 3.51562 12.9688V7.03125C3.51562 5.09277 5.09277 3.51562 7.03125 3.51562H12.9688C14.9072 3.51562 16.4844 5.09277 16.4844 7.03125V12.9688Z"
							fill="#71717A"
						/>
					</svg>
					{/* facebook */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="20"
						viewBox="0 0 22 20"
						fill="none"
					>
						<path
							d="M18.7773 0H3.22266C1.44583 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.44583 20 3.22266 20H9.71094V12.9297H7.13281V9.41406H9.71094V7.03125C9.71094 5.09262 11.4456 3.51562 13.5781 3.51562H17.4883V7.03125H13.5781V9.41406H17.4883L16.8438 12.9297H13.5781V20H18.7773C20.5542 20 22 18.6856 22 17.0703V2.92969C22 1.31439 20.5542 0 18.7773 0Z"
							fill="#71717A"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Footer;
