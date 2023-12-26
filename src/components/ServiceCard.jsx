import PropTypes from "prop-types";

const ServiceCard = ({
	titleBlack,
	titleGray,
	body,
	quote,
	profileImgURL,
	name,
	designation,
	btnTitle,
	imgURL,
}) => {
	return (
		<section className="text-grayText px-0 space-y-10 py-5">
			<p className="text-sm font-bold uppercase">Our Services</p>
			<div className=" flex gap-10">
				<div className="w-7/12 space-y-10">
					<div>
						<h1 className="text-4xl font-bold text-black">
							{titleBlack}
						</h1>
						<h1 className="text-4xl font-bold">{titleGray}</h1>
					</div>
					<p className="text-sm">{body}</p>
					<div className="pl-4 border-l-2 border-gray-400">
						<p>“{quote}”</p>
						<div className="flex gap-3 items-center py-10">
							<img src={profileImgURL} alt="" className="w-14" />
							<div>
								<h2 className="text-black font-bold text-sm">
									{name}
								</h2>
								<p className="text-sm">{designation}</p>
							</div>
						</div>
					</div>
					<button className=" text-black btn-ghost btn-outline rounded-md lg:py-3 px-8">
						{btnTitle}
					</button>
				</div>
				<div className="w-4/12">
					<img
						src={imgURL}
						alt=""
						className="rounded-xl aspect-square object-cover grayscale"
					/>
				</div>
			</div>
		</section>
	);
};
ServiceCard.propTypes = {
	titleBlack: PropTypes.string.isRequired,
	titleGray: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	profileImgURL: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	designation: PropTypes.string.isRequired,
	btnTitle: PropTypes.string.isRequired,
	imgURL: PropTypes.string.isRequired,
};
export default ServiceCard;
