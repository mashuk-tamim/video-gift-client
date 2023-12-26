

const ThemePark = () => {
    return (
		<section className="px-20">
			<div className="flex gap-32 px-10 items-center">
				<div className="w-1/2">
					<img
						src="https://s3-alpha-sig.figma.com/img/8df6/c4ce/8d6a80a61dc8a4deb59a86b2f86eeaee?Expires=1704672000&Signature=FsOgKJROFX9ICHRuUAaHV1NMDUs2ZTAyrRKtJILadANceZqpYxA1~TCpozCc4C-qiqHGv4s3Cn5-KxSUZbpvcpimhb6lyyaiLokbruPNNO2A9FwX3O5Nc46H0SapHq5Qce7iQIoJdVMAefiCMCPIm8sXL6igvJpwP9b~-oiXPC0bOb41kqbyJqZVrV43NHzeqdRx4tXGOfANwZGkyOhMkqlKC21cNFvn5HKXnlj1Cy0eD7jjfKA5HtwwiZhUZ~45qAJdUlkpZjzEdRquI5~--bhYTfKY~QTp57b-8LhbyXapIMdy~aJCC1mdxL~xC0eFS28TShwCnvGBb9IGjzwHyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						alt=""
						className="grayscale-[100%]"
					/>
				</div>
				<div className="w-1/2">
					<h1 className="text-2xl text-black font-bold">
						Ready for Theme Parks
					</h1>
					<p className="text-grayText py-5">
						Delight guests with a powerful theme park app that helps
						them beat the queues, unlock exclusive discounts and
						find their way around your park. Behind the scenes, use
						compliant behavioural insights to personalise the guest
						journey and increase primary and secondary revenue.
					</p>
					<button className=" text-black btn-ghost btn-outline rounded-md lg:py-2 px-6">
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
};

export default ThemePark;