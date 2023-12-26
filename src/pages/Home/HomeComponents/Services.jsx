import { NavLink } from "react-router-dom";


const Services = () => {
    return (
		<div>
			<div className="text-grayText flex flex-col items-center justify-center">
				<p className="font-medium">VideoGift was</p>
				<h1 className="text-black text-4xl font-bold py-10">
					built for the Hospitality and
					<span className="text-grayText flex flex-col items-center">
						Attractions industry
					</span>
				</h1>
				<div className="flex gap-8 bg-[#d9d9d9] py-3 px-7 rounded-2xl">
					{/* service 1 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<g clipPath="url(#clip0_97_1665)">
									<path
										d="M21.18 24.12C19.86 24.12 18.54 24.12 17.28 24.12C16.92 24.12 16.8 24.06 16.68 23.64C16.2 21.66 14.58 20.46 12.54 20.34C10.86 20.28 9.36001 20.7 8.22001 22.2C8.16001 21.78 8.04001 21.42 8.04001 21.12C8.04001 15.96 8.04001 10.8 8.04001 5.58001C8.04001 3.96001 9.36001 2.64001 10.98 2.64001C19.62 2.64001 28.32 2.64001 36.96 2.64001C38.58 2.64001 39.9 3.90001 39.9 5.58001C39.9 10.74 39.9 15.9 39.9 21.12C39.9 21.42 39.84 21.78 39.78 22.14C39.66 22.02 39.6 21.96 39.54 21.9C38.22 20.34 36.48 20.04 34.56 20.4C32.82 20.76 31.74 21.9 31.32 23.7C31.26 24 31.08 24 30.84 24C29.52 24 28.2 24 26.88 24C26.88 24.96 26.88 25.92 26.88 26.94C27.06 26.94 27.3 26.94 27.54 26.94C28.08 26.94 28.62 26.94 29.22 26.94C29.58 26.94 29.82 27.18 29.82 27.54C29.82 27.9 29.64 28.08 29.28 28.14C29.16 28.14 29.04 28.14 28.86 28.14C25.68 28.14 22.5 28.14 19.26 28.14C19.14 28.14 18.96 28.14 18.84 28.14C18.48 28.08 18.3 27.84 18.3 27.54C18.3 27.18 18.54 26.94 18.9 26.94C19.5 26.94 20.1 26.94 20.7 26.94C20.88 26.94 21 26.94 21.24 26.94C21.18 26.04 21.18 25.14 21.18 24.12ZM19.74 13.44C19.74 14.76 19.74 16.08 19.74 17.46C19.74 18.18 20.16 18.48 20.82 18.12C23.1 16.8 25.44 15.48 27.72 14.1C28.38 13.74 28.38 13.2 27.72 12.84C25.44 11.52 23.1 10.2 20.82 8.82001C20.16 8.46001 19.74 8.70001 19.74 9.48001C19.74 10.8 19.74 12.12 19.74 13.44ZM22.5 27C23.52 27 24.54 27 25.5 27C25.5 26.04 25.5 25.08 25.5 24.12C24.48 24.12 23.46 24.12 22.5 24.12C22.5 25.08 22.5 26.04 22.5 27Z"
										fill="#71717A"
									/>
									<path
										d="M12.12 45.24C9.06 45.24 6.06 45.24 3 45.24C1.92 45.24 1.5 44.82 1.5 43.74C1.5 42.24 1.5 40.8 1.5 39.3C1.5 37.5 2.76 36.24 4.56 36.18C9.6 36.18 14.7 36.18 19.74 36.18C21.54 36.18 22.8 37.44 22.8 39.24C22.8 40.8 22.8 42.3 22.8 43.86C22.8 44.76 22.32 45.24 21.42 45.24C18.36 45.24 15.24 45.24 12.12 45.24Z"
										fill="#71717A"
									/>
									<path
										d="M35.82 45.24C32.76 45.24 29.76 45.24 26.7 45.24C25.62 45.24 25.14 44.82 25.14 43.74C25.14 42.3 25.14 40.8 25.14 39.36C25.14 37.44 26.4 36.18 28.32 36.18C33.3 36.18 38.34 36.18 43.32 36.18C45.24 36.18 46.5 37.44 46.5 39.36C46.5 40.8 46.5 42.24 46.5 43.74C46.5 44.82 46.08 45.3 44.94 45.3C41.88 45.24 38.88 45.24 35.82 45.24Z"
										fill="#71717A"
									/>
									<path
										d="M43.5 34.92C38.4 34.92 33.3 34.92 28.2 34.92C27.9 33.36 28.38 32.4 29.64 31.56C30.66 30.9 31.86 30.66 33.06 30.48C35.58 30.06 38.1 30.18 40.56 30.9C41.22 31.08 41.82 31.38 42.36 31.74C43.44 32.52 43.62 33.6 43.5 34.92Z"
										fill="#71717A"
									/>
									<path
										d="M4.50001 34.86C4.32001 33 4.86001 31.98 6.54001 31.26C7.98001 30.6 9.60001 30.42 11.16 30.3C13.02 30.18 14.82 30.36 16.62 30.84C16.98 30.96 17.4 31.08 17.76 31.2C19.44 31.92 20.04 33 19.86 34.86C14.76 34.86 9.66001 34.86 4.50001 34.86Z"
										fill="#71717A"
									/>
									<path
										d="M15.6 25.26C15.54 26.64 15.18 27.9 14.16 28.92C12.96 30.06 11.34 30.06 10.14 28.92C8.81999 27.66 8.27999 25.2 8.99999 23.52C9.29999 22.74 9.89999 22.14 10.68 21.9C11.64 21.54 12.66 21.54 13.62 21.9C14.94 22.38 15.48 23.52 15.6 24.84C15.66 24.96 15.6 25.14 15.6 25.26Z"
										fill="#71717A"
									/>
									<path
										d="M32.28 25.2C32.46 24.6 32.52 24 32.76 23.4C33.06 22.68 33.6 22.2 34.32 21.9C35.28 21.54 36.3 21.54 37.26 21.84C38.1 22.14 38.7 22.68 39 23.52C39.6 25.44 39.36 27.24 37.98 28.74C36.78 30.06 34.98 30.06 33.72 28.74C32.88 27.96 32.34 26.64 32.28 25.2Z"
										fill="#71717A"
									/>
									<path
										d="M21 16.5C21 14.4 21 12.42 21 10.32C22.8 11.34 24.54 12.36 26.34 13.38C24.6 14.46 22.86 15.48 21 16.5Z"
										fill="#71717A"
									/>
								</g>
								<defs>
									<clipPath id="clip0_97_1665">
										<rect
											width="48"
											height="48"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<p className="text-center w-44">
								Family Entertainment Centers
							</p>
						</div>
					</NavLink>
					{/* service 2 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<g clipPath="url(#clip0_97_1628)">
									<path
										d="M3.96 25.26C4.02 24.9 4.08 24.54 4.08 24.12C4.44 21 5.58 18.12 7.68 15.72C7.68 15.72 7.74 15.66 7.74 15.6C7.68 15.54 7.68 15.54 7.62 15.48C7.14 14.94 7.14 14.58 7.62 14.04C9.3 12.12 11.04 10.2 12.72 8.27998C12.9 8.09998 13.08 7.85998 13.26 7.67998C13.68 7.25998 13.98 6.77998 14.16 6.17998C14.58 4.67998 16.08 3.71998 17.52 3.89998C19.14 4.07998 20.4 5.27998 20.58 6.77998C20.76 8.45998 19.86 9.89998 18.3 10.38C17.76 10.56 17.28 10.86 16.86 11.22C15.42 12.54 13.92 13.8 12.48 15.12C12.36 15.24 12.24 15.42 12.24 15.6C12.24 18.48 12.24 21.42 12.24 24.3C12.24 24.36 12.24 24.48 12.3 24.6C12.72 24.48 13.08 24.36 13.5 24.3C14.46 24.18 15.42 24 16.38 24C17.58 24 18.36 23.46 18.84 22.32C19.08 21.72 19.38 21.12 19.62 20.52C20.7 18.24 22.44 17.22 24.96 17.34C26.1 17.4 27.12 17.7 28.08 18.24C28.32 18.36 28.44 18.36 28.62 18.12C30.3 16.38 32.04 14.7 33.72 12.96C33.84 12.84 33.96 12.6 33.96 12.36C33.96 10.8 33.84 10.98 35.22 10.2C36.84 9.29998 38.4 8.39998 40.02 7.43998C40.62 7.07998 40.92 7.13998 41.4 7.61998C42.12 8.33998 42.84 9.05998 43.56 9.77998C44.04 10.26 44.04 10.56 43.74 11.1C42.66 12.96 41.64 14.76 40.56 16.62C40.32 17.04 40.02 17.22 39.6 17.16C38.76 17.04 38.16 17.4 37.56 18C36.12 19.5 34.62 21 33.12 22.44C32.88 22.68 32.88 22.86 33 23.16C33.78 24.6 34.02 26.16 33.72 27.78C33.42 29.52 32.4 30.66 30.9 31.44C30.18 31.8 29.52 32.1 28.8 32.4C27.78 32.82 27.18 33.54 27.18 34.68C27.18 36.12 27 37.56 26.52 38.94C25.44 41.88 23.22 43.44 20.16 43.8C20.04 43.8 19.92 43.86 19.8 43.86C19.26 43.86 18.72 43.86 18.18 43.86C18.12 43.86 18.06 43.8 18.06 43.8C16.32 43.62 14.7 42.9 13.26 41.94C12.96 41.7 12.66 41.52 12.3 41.28C12.3 41.64 12.3 41.88 12.3 42.24C12.6 42.24 12.9 42.24 13.2 42.24C13.74 42.3 14.1 42.9 13.86 43.38C13.74 43.62 13.5 43.74 13.32 43.92C12.06 43.92 10.8 43.92 9.54 43.92C9 43.62 8.82 43.32 8.94 42.84C9.06 42.42 9.36 42.24 9.96 42.24C10.14 42.24 10.32 42.24 10.5 42.24C10.5 41.46 10.5 40.74 10.5 40.02C10.5 39.84 10.38 39.6 10.26 39.48C9.96 39 9.54 38.64 9.24 38.16C7.68 35.94 6.84 33.48 7.26 30.78C7.56 28.68 8.46 26.88 10.26 25.62C10.44 25.5 10.5 25.32 10.5 25.08C10.5 22.44 10.5 19.86 10.5 17.22C10.5 17.1 10.5 16.98 10.5 16.8C9.9 17.4 9.36 17.28 8.88 16.74C7.62 18.18 6.78 19.8 6.24 21.54C5.7 23.22 5.52 24.96 5.52 26.7C5.52 32.1 5.52 37.5 5.52 42.84C5.52 43.38 5.4 43.74 4.86 43.98C4.74 43.98 4.62 43.98 4.44 43.98C4.26 43.8 4.02 43.56 3.84 43.38C3.96 37.38 3.96 31.32 3.96 25.26ZM23.16 24C20.88 24 18.96 25.86 18.96 28.14C18.96 30.42 20.88 32.34 23.16 32.34C25.44 32.34 27.3 30.48 27.36 28.2C27.36 25.92 25.44 24 23.16 24ZM14.94 32.34C14.46 32.34 14.16 32.52 14.04 32.88C13.86 33.3 14.04 33.6 14.28 33.84C15.3 34.92 16.38 35.94 17.46 37.02C17.88 37.44 18.36 37.44 18.72 37.14C19.08 36.78 19.08 36.3 18.66 35.88C17.64 34.8 16.56 33.78 15.48 32.76C15.3 32.52 15.06 32.4 14.94 32.34Z"
										fill="#71717A"
									/>
								</g>
								<defs>
									<clipPath id="clip0_97_1628">
										<rect
											width="48"
											height="48"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<p className="">Concerts</p>
						</div>
					</NavLink>
					{/* service 3 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<g clipPath="url(#clip0_97_1638)">
									<path
										d="M46.8 33.78C46.2 34.8 45.54 35.76 44.64 36.48C43.14 37.68 41.46 38.22 39.54 38.22C32.64 38.22 25.68 38.22 18.78 38.22C15.24 38.22 11.76 38.28 8.22 38.22C5.22 38.16 2.94 36.72 1.44 34.08C0.960003 33.18 1.38 32.52 2.4 32.52C16.8 32.52 31.26 32.52 45.66 32.52C46.2 32.52 46.56 32.76 46.86 33.18C46.8 33.36 46.8 33.6 46.8 33.78Z"
										fill="#71717A"
									/>
									<path
										d="M5.10001 30.6C5.58001 26.22 7.32001 22.5 10.32 19.32C13.32 16.2 17.04 14.34 21.3 13.68C20.94 12 21.3 10.86 22.38 10.14C23.34 9.47997 24.6 9.53997 25.56 10.2C26.64 10.98 27 12.06 26.58 13.68C31.8 14.52 36 16.98 39.18 21.18C41.52 24.24 42.6 27.78 42.84 30.6C30.3 30.6 17.76 30.6 5.10001 30.6ZM22.98 17.34H22.92C17.1 17.94 12.84 20.82 10.2 26.1C9.96001 26.52 9.78001 27 9.66001 27.48C9.48001 27.96 9.78001 28.44 10.26 28.62C10.74 28.8 11.22 28.56 11.46 28.08C11.52 27.96 11.58 27.78 11.64 27.66C13.2 23.76 15.96 21.12 19.92 19.86C20.94 19.5 22.02 19.44 23.04 19.26C23.7 19.14 24.06 18.78 24.06 18.24C23.94 17.7 23.52 17.34 22.98 17.34Z"
										fill="#71717A"
									/>
								</g>
								<defs>
									<clipPath id="clip0_97_1638">
										<rect
											width="48"
											height="48"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<p className="">Restaurants</p>
						</div>
					</NavLink>
					{/* service 4 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M43.2 41.82C43.2 42.48 43.2 43.14 43.2 43.8C44.4 43.8 45.6 43.8 46.8 43.8C46.8 44.76 46.8 45.72 46.8 46.74C31.62 46.74 16.44 46.74 1.2 46.74C1.2 45.78 1.2 44.82 1.2 43.86C2.4 43.86 3.6 43.86 4.8 43.86C4.8 43.2 4.8 42.54 4.8 41.88C4.32 41.82 3.84 41.76 3.36 41.7C2.76 41.58 2.58 41.34 2.64 40.74C2.94 37.92 3.24 35.04 3.48 32.22C3.66 30.36 3.84 28.5 4.02 26.64C4.02 26.34 4.14 26.22 4.44 26.1C6.78 24.96 8.52 23.28 9.18 20.64C9.3 20.1 9.12 19.68 8.64 19.62C8.22 19.5 7.86 19.8 7.74 20.34C7.26 22.38 5.94 23.7 4.08 24.72C4.08 22.74 4.08 20.88 4.08 18.9C3.78 18.9 3.6 18.9 3.36 18.9C2.88 18.9 2.64 18.6 2.58 18.12C2.58 16.98 2.58 15.84 2.58 14.7C2.58 14.52 2.76 14.34 2.94 14.22C6.54 12 10.14 9.78 13.74 7.5C17.04 5.46 20.28 3.42 23.58 1.38C23.88 1.2 24.06 1.2 24.36 1.38C31.26 5.64 38.1 9.89999 45 14.16C45.3 14.34 45.42 14.52 45.42 14.82C45.42 15.78 45.42 16.8 45.42 17.76C45.42 18.6 45.18 18.78 44.4 18.78C44.28 18.78 44.16 18.78 43.98 18.78C43.98 20.7 43.98 22.62 43.98 24.6C42.24 23.64 40.92 22.38 40.38 20.52C40.32 20.4 40.32 20.22 40.26 20.1C40.14 19.68 39.78 19.44 39.36 19.56C38.94 19.68 38.7 20.04 38.82 20.46C39.06 21.6 39.54 22.62 40.32 23.52C41.22 24.6 42.36 25.5 43.68 26.04C43.92 26.16 43.98 26.28 44.04 26.52C44.28 28.86 44.52 31.14 44.76 33.48C45 35.76 45.24 38.1 45.48 40.38C45.6 41.28 45.42 41.52 44.52 41.64C43.98 41.76 43.62 41.82 43.2 41.82ZM7.8 43.8C18.66 43.8 29.4 43.8 40.2 43.8C40.2 43.2 40.14 42.66 40.2 42.12C40.26 41.34 40.14 40.68 39.36 40.32C39.3 40.26 39.24 40.2 39.12 40.14C38.76 39.9 38.64 39.54 38.7 39.12C38.7 38.82 38.7 38.52 38.7 38.22C38.46 38.28 38.28 38.28 38.1 38.34C37.2 38.46 36.48 38.16 35.94 37.5C35.82 37.38 35.76 37.08 35.82 36.9C36.48 33.12 37.14 29.34 37.8 25.56C37.86 25.26 37.8 25.14 37.56 24.96C35.46 23.52 34.02 21.6 33.18 19.2C33.12 19.08 33.06 18.9 33.06 18.84C32.64 18.72 32.34 18.9 32.04 19.14C31.68 19.44 31.2 19.8 30.78 19.92C29.16 20.46 27.54 20.4 25.92 20.04C25.74 20.94 25.2 21.66 24.12 21.72C22.92 21.78 22.32 21.06 22.08 19.98C21.78 20.1 21.48 20.22 21.18 20.22C20.4 20.28 19.56 20.22 18.78 20.22C17.7 20.22 16.74 19.8 15.96 19.08C15.66 18.78 15.36 18.66 15 18.78C15 18.84 14.94 18.84 14.94 18.9C14.1 21.48 12.6 23.52 10.38 25.02C10.26 25.08 10.2 25.32 10.26 25.44C10.92 29.1 11.52 32.82 12.24 36.48C12.36 37.2 12.12 37.62 11.64 37.98C11.16 38.34 10.62 38.46 10.02 38.34C9.84 38.28 9.6 38.28 9.36 38.22C9.36 38.4 9.36 38.52 9.36 38.64C9.54 39.54 9.18 40.14 8.46 40.56C8.34 40.62 8.22 40.68 8.1 40.8C7.98 40.92 7.92 41.04 7.92 41.16C7.8 42.06 7.8 42.9 7.8 43.8ZM12.96 15.9C9.96 15.9 7.08 15.9 4.14 15.9C4.14 16.38 4.14 16.86 4.14 17.34C7.68 17.34 11.16 17.34 14.52 17.34C14.46 16.38 14.46 15.48 14.4 14.52C14.4 13.92 14.7 13.68 15.24 13.68C15.78 13.68 16.26 13.68 16.74 13.68C16.68 12.72 16.68 11.76 16.62 10.86C16.62 10.26 16.92 10.02 17.46 10.02C18.06 10.02 18.66 10.02 19.32 10.02C20.76 9.96 21.9 10.44 22.92 11.52C22.98 11.64 23.22 11.64 23.4 11.64C23.82 11.64 24.24 11.58 24.6 11.64C24.9 11.7 25.02 11.7 25.2 11.46C25.86 10.74 26.7 10.2 27.72 10.14C28.62 10.08 29.58 10.08 30.48 10.08C31.14 10.08 31.38 10.32 31.38 10.98C31.38 11.88 31.32 12.78 31.26 13.74C31.68 13.74 32.16 13.74 32.64 13.74C33.3 13.74 33.54 13.98 33.54 14.64C33.54 15.54 33.48 16.44 33.42 17.34C36.84 17.34 40.32 17.34 43.8 17.34C43.8 16.86 43.8 16.38 43.8 15.9C40.86 15.9 37.92 15.9 34.98 15.9C34.98 15.54 34.98 15.18 34.98 14.82C34.98 13.26 34.38 12.48 32.76 12.18C32.76 11.7 32.76 11.22 32.76 10.74C32.76 9.54 31.8 8.58 30.6 8.58C29.82 8.58 28.98 8.58 28.2 8.58C26.88 8.64 25.74 9 24.72 9.84C24.3 10.14 23.58 10.14 23.16 9.84C22.5 9.3 21.72 8.82 20.88 8.76C19.74 8.64 18.54 8.58 17.4 8.58C16.08 8.58 15.12 9.54 15.12 10.86C15.12 11.34 15.12 11.76 15.12 12.24C13.62 12.48 12.9 13.26 12.9 14.76C12.96 15.06 12.96 15.42 12.96 15.9ZM7.14 27.12C6.72 27.18 6.3 27.36 5.88 27.36C5.4 27.36 5.34 27.6 5.28 27.96C4.98 31.5 4.62 35.04 4.26 38.58C4.26 39.12 4.26 39.6 4.2 40.14C5.52 40.26 6.66 39.9 7.62 39.06C7.74 39 7.8 38.76 7.74 38.64C7.62 35.76 7.44 32.82 7.26 29.94C7.26 28.98 7.2 28.08 7.14 27.12ZM43.8 40.14C43.8 39.9 43.8 39.66 43.74 39.42C43.5 36.96 43.26 34.5 43.02 31.98C42.9 30.6 42.78 29.22 42.6 27.84C42.6 27.66 42.48 27.42 42.36 27.42C41.88 27.3 41.34 27.24 40.86 27.12C40.86 27.18 40.86 27.24 40.86 27.3C40.68 31.08 40.44 34.92 40.26 38.7C40.26 38.82 40.26 39 40.38 39.06C41.34 39.9 42.48 40.26 43.8 40.14ZM20.16 16.62C20.04 16.56 20.04 16.5 19.98 16.5C19.2 16.26 18.54 15.9 18 15.36C17.94 15.3 17.76 15.24 17.7 15.18C17.16 15.18 16.56 15.18 16.02 15.18C15.72 17.46 17.4 19.2 19.44 18.78C19.2 17.88 19.44 17.16 20.16 16.62ZM32.1 15.12C31.62 15.12 31.14 15.06 30.72 15.12C30.48 15.12 30.18 15.3 29.94 15.42C29.4 15.72 28.86 16.08 28.26 16.38C28.14 16.44 28.02 16.5 27.84 16.56C28.62 17.16 28.8 17.88 28.68 18.78C30.84 18.96 32.22 17.52 32.1 15.12ZM22.2 13.26C22.08 12.96 22.08 12.78 21.96 12.6C21 11.28 19.56 11.4 18.18 11.46C18.06 12.66 18.3 13.74 19.32 14.52C20.04 13.2 20.7 12.84 22.2 13.26ZM25.86 13.26C26.52 13.02 27.12 12.96 27.6 13.26C28.02 13.56 28.38 13.98 28.8 14.4C29.7 13.68 29.94 12.66 29.82 11.46C29.16 11.46 28.56 11.4 27.96 11.46C27.12 11.52 26.52 12 26.04 12.66C25.98 12.84 25.92 13.02 25.86 13.26ZM25.5 16.62C25.5 15.84 24.84 15.12 24.06 15.12C23.28 15.12 22.56 15.78 22.56 16.56C22.56 17.4 23.22 18.06 24 18.06C24.78 18.06 25.44 17.4 25.5 16.62Z"
									fill="#71717A"
								/>
								<path
									d="M17.4 32.34C17.4 29.46 19.86 27.72 22.44 28.62C22.86 28.74 23.34 28.98 23.7 29.22C23.94 29.34 24.06 29.34 24.3 29.22C25.56 28.44 26.88 28.08 28.32 28.62C30.12 29.34 30.96 31.2 30.48 33.24C30.06 35.04 28.92 36.3 27.36 37.2C26.4 37.74 25.38 38.1 24.36 38.52C24.12 38.58 23.82 38.58 23.58 38.52C21.84 37.98 20.22 37.2 18.9 35.88C17.94 34.92 17.4 33.6 17.4 32.34Z"
									fill="#71717A"
								/>
							</svg>
							<p className="">Catering Hall</p>
						</div>
					</NavLink>
					{/* service 5 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M32.547 35.0892C35.8636 32.529 38 28.514 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 29.1906 12.8247 33.7214 17.0207 36.139L19.9347 26.9116C20.842 28.1762 22.3248 29 24 29C25.6754 29 27.1582 28.176 28.0656 26.9112L34.0936 46H13.9067L15.7937 40.0248C9.9788 37.041 6 30.9852 6 24C6 14.0589 14.0589 6 24 6C33.9412 6 42 14.0589 42 24C42 30.3444 38.7176 35.9222 33.7586 39.1278L32.547 35.0892Z"
									fill="#71717A"
								/>
								<path
									d="M24 27C25.6568 27 27 25.6568 27 24C27 22.3432 25.6568 21 24 21C22.3432 21 21 22.3432 21 24C21 25.6568 22.3432 27 24 27Z"
									fill="#71717A"
								/>
							</svg>
							<p className="">Theme Parks</p>
						</div>
					</NavLink>
					{/* service 6 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M8 8H40C42.2 8 44 9.8 44 12V20H40V18C40 15.8 38.2 14 36 14H30C27.8 14 26 15.8 26 18V20H22V18C22 15.8 20.2 14 18 14H12C9.8 14 8 15.8 8 18V20H4V12C4 9.8 5.8 8 8 8Z"
									fill="#71717A"
								/>
								<path
									d="M4 22H44C46.2 22 48 23.8 48 26V40H44V34H4V40H0V26C0 23.8 1.8 22 4 22Z"
									fill="#71717A"
								/>
							</svg>
							<p className="">Resorts</p>
						</div>
					</NavLink>
					{/* service 7 */}
					<NavLink>
						<div className="flex flex-col items-center rounded-xl p-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M17 20C20.3138 20 23 17.3137 23 14C23 10.6863 20.3138 8 17 8C13.6863 8 11 10.6863 11 14C11 17.3137 13.6863 20 17 20Z"
									fill="#71717A"
								/>
								<path
									d="M14 24.5C14 27.5376 11.5376 30 8.5 30C5.46244 30 3 27.5376 3 24.5C3 21.4624 5.46244 19 8.5 19C11.5376 19 14 21.4624 14 24.5Z"
									fill="#71717A"
								/>
								<path
									d="M45 24.5C45 27.5376 42.5376 30 39.5 30C36.4624 30 34 27.5376 34 24.5C34 21.4624 36.4624 19 39.5 19C42.5376 19 45 21.4624 45 24.5Z"
									fill="#71717A"
								/>
								<path
									d="M37 14C37 17.3137 34.3138 20 31 20C27.6862 20 25 17.3137 25 14C25 10.6863 27.6862 8 31 8C34.3138 8 37 10.6863 37 14Z"
									fill="#71717A"
								/>
								<path
									d="M19.3907 23.5312L12.2009 32.159C8.94427 36.0668 11.7232 42 16.8102 42H31.1898C36.2768 42 39.0558 36.0668 35.799 32.1588L28.6094 23.5312C26.2106 20.6526 21.7894 20.6526 19.3907 23.5312Z"
									fill="#71717A"
								/>
							</svg>
							<p className="">Zoos</p>
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Services;