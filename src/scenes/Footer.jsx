import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok } from "react-icons/bi"
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const Footer = () => {
	return (
		<footer id='footer' className='pt-20 pb-12 font-medium space-y-12 bg-black'>
			<div className='flex justify-between flex-nowrap gap-10 [&_article]:w-1/4'>
				{/* col 1 */}
				<article className='space-y-6'>
					<a href='#' className='block size-24'>
						<img
							src='/src/assets/official-fame-logo.webp'
							alt='logo'
							className='object-cover'
						/>
					</a>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quae
						corrupti suscipit non nihil esse facere voluptatem, quam beatae commodi cum
						ipsam fuga aliquam.
					</p>
					<div
						className='
							flex gap-6 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-linear 
							[&_a]:relative [&_a]:top-0 hover:[&_a]:-top-2
						'
					>
						<a
							href='#fb'
							className='bg-[#426782] rounded-full size-8 flex items-center justify-center'
							title='facebook'
						>
							<BiLogoFacebook />
						</a>
						<a
							href='#ig'
							className='
								bg-gradient-to-b from-[#feda75] via-[#fa7e1e] via-50%-[#d62976] via-[#962fbf] to-[#4f5bd5] 
								rounded-full size-8 flex items-center justify-center'
							title='instagram'
						>
							<BiLogoInstagram />
						</a>
						<a
							href='#tiktok'
							className='bg-[#ff050] border rounded-full size-8 flex items-center justify-center'
							title='tiktok'
						>
							<BiLogoTiktok />
						</a>
					</div>
				</article>
				{/* col 2 */}
				<article className='space-y-6'>
					<h2 className='text-orange-500 font-bold text-xl md:text-2xl'>Quick Links</h2>
					<div className='flex justify-between gap-3'>
						<ul className='space-y-6'>
							<li>Home</li>
							<li>About</li>
							<li>Blog</li>
							<li>Contact</li>
						</ul>
						<ul className='space-y-6'>
							<li>Lamborghini</li>
							<li>Mclaren</li>
							<li>Mercedes-Benz</li>
							<li>Ferrari</li>
						</ul>
					</div>
				</article>
				{/* col 3 */}
				<article className='space-y-6'>
					<h2 className='text-orange-500 font-bold text-xl md:text-2xl'>Contact</h2>
					<ul className='space-y-6'>
						<li className='border-b border-gray-800 pb-3 flex gap-3'>
							<FaLocationDot className='fill-orange-500 text-xl' />
							<span>Dubai, United Arab Emirates</span>
						</li>
						<li className='border-b border-gray-800 pb-3 flex gap-3'>
							<SiGmail className='fill-orange-500 text-xl' />
							<span>info@fameluxurycars.coom</span>
						</li>
						<li className='pb-3 flex gap-3'>
							<FaPhone className='fill-orange-500 text-xl' />
							<span>+9715 655 5352</span>
						</li>
					</ul>
				</article>
				{/* col 4 */}
				<article className='space-y-6'>
					<h2 className='text-orange-500 font-bold text-xl md:text-2xl'>Newsletter</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae a
						assumenda voluptas maxime ullam.
					</p>
					<form className='relative' onSubmit={(e) => e.preventDefault()}>
						<input
							type='email'
							name=''
							className='bg-white bg-opacity-20 rounded-full p-2 ps-3 placeholder:font-light placeholder:text-sm'
							placeholder='Enter your email'
						/>
						<button
							type='submit'
							className='
								absolute bg-orange-500 p-[10px] px-4 rounded-full font-semibold transition-all duration-300 ease-linear end-0  
								-top-0.5 hover:-end-1 hover:bg-orange-600'
						>
							Subscribe
						</button>
					</form>
				</article>
			</div>
			<div className='text-center'>
				Copyright &copy; 2024 Fame Luxury Cars Rental | Powered by Kingsmen Agency
			</div>
		</footer>
	)
}

export default Footer
