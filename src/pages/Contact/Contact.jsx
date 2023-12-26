import phoneIcon from '../../assets/images/phone1.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import linkedInIcon from '../../assets/images/linkedin.svg';
import InstagramIcon from '../../assets/images/instagram.svg';

const Contact = () => {
    return (
		<section className="px-20">
			<div className="w-full h-screen bg-[url('https://s3-alpha-sig.figma.com/img/c2ac/430f/a1ed26ff6b1e368b811bc588a1b3875d?Expires=1704672000&Signature=YoIAOv11cBtpbXAvbtRd1qSR3JEUS3gbUcHOi8HCmoquP2yGHzyBBM-QV~Rj0FJpE3ODM~hYfhKB9sErfsaKB0rrwb28nh5K9GnniqfKjik5l5sT~JInNxKjm4hiQqX4byHLcBafph3YVyxcZnW2mIdGDZdmuVDHzaHyxXtO38aodlWYiLkGW7-6g1rgAPtQATCQwzAi4w-FKlw3sHk5Ilqm3eJhgyBudlGq783qRcNzqT6dNJInAFVIjHVD3lQyC4eFLTku13n20UsFUgam7HfBMYx6rgMnOxMcdFCm0oLsvc6nW3sjBcuk7GSVMTxxv~lDlpFgZC3NtbQI1bPb0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover grayscale">
				<div className="w-full h-full flex flex-col  justify-center items-center bg-banner-gradient text-grayText px-20">
					<h1 className="text-3xl text-black font-bold pb-5">Contact Us</h1>
					<p className='text-black font-medium w-2/5 text-center'>
						To get in touch, complete the form below and a member of
						our team will get back to you.
					</p>
				</div>
			</div>
			<div className="flex gap-8 items-center">
				<div className="h-3/5">
					<img
						src="https://s3-alpha-sig.figma.com/img/550f/6780/a102ddfc941794ae9fbd1757209d4d69?Expires=1704672000&Signature=WFJU-wU5mZnK95iF~WtY~plnYYT0A5AElgMLvbxhb5ihDuc3pnXObOiiiqDXXvOGRo-O6DrNGcJWjKyILJsQG0loqATQYa3lcj~J79MNWSFwLOGwljcBv3sC7nuQ6Bk2w~8ccMyAbCnRHxI8~qJoPsYFJbtOg8PMlA2onXFhXXioNDgWThiRszof7DqdEWqrM8poetmAcK9eduhiRXhUVyXaaCWoCH6U6ZboqP8WkK7yPJBClio3Ce5ELsCDtzKoedyF7Vlmmz2FwGptaEj~hjVAdG3gpYxCzRdouggrUkdSCGURm~di6JPXrp65LFJeG-6sL76pWKQHNGzam4c9UQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						alt=""
						className="grayscale rounded-2xl h-3/5"
					/>
				</div>
				<div className="space-y-5">
					<h1 className="text-2xl text-black font-bold">Find Us</h1>
					<p className="text-grayText w-3/5">
						Unit 10,Uttoxeter Business Centre,Uttoxeter,Stafford
						shire,United Kingdom,ST14 8AZ
					</p>
					<p className="text-black">Get Directions</p>
				</div>
			</div>
			<div className="flex gap-10 justify-center py-20">
				<div className="flex flex-col items-center border-2 border-gray-400 rounded-xl p-20 w-72">
					<img src={phoneIcon} alt="" className="w-8 py-2" />
					<p className="text-black font-bold">Call Us</p>
					<p className="text-sm">252-VIDEOGIFT</p>
				</div>
				<div className="flex flex-col items-center border-2 border-gray-400 rounded-xl p-20 w-72">
					<img src={twitterIcon} alt="" className="w-8 py-2" />
					<p className="text-black font-bold">Follow Us</p>
					<p>On Twitter</p>
				</div>
				<div className="flex flex-col items-center border-2 border-gray-400 rounded-xl p-20 w-72">
					<img src={linkedInIcon} alt="" className="w-8 py-2" />
					<p className="text-black font-bold">Follow Us</p>
					<p>On LinkedIn</p>
				</div>
				<div className="flex flex-col items-center border-2 border-gray-400 rounded-xl p-20 w-72">
					<img src={InstagramIcon} alt="" className="w-8 py-2" />
					<p className="text-black font-bold">Follow Us</p>
					<p>On Instagram</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;