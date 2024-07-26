import { BiLogoFacebook, BiLogoInstagram, BiLogoTiktok } from "react-icons/bi"
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import { logo } from "../assets"

const Footer = () => {
	return (
		<footer id='footer' className='pt-20 pb-12 font-medium space-y-12 bg-black'>
			<div className='flex flex-col flex-wrap justify-between gap-y-16 gap-10 md:flex-row md:[&_article]:w-2/5 lg:flex-nowrap lg:gap-10 lg:[&_article]:w-1/4'>
				{/* col 1 */}
				<article className='space-y-6'>
					<a href='#' className='block size-24'>
						<img src={logo} alt='logo' className='object-cover' />
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
					<h2 className='text-custom-orange font-bold text-xl md:text-2xl'>
						Quick Links
					</h2>
					<div
						className='
						flex justify-evenly gap-3 [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-linear
						[&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:w-fit [&_ul]:w-1/2'
					>
						<ul className='space-y-6'>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Home
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								About
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Blog
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Contact
							</li>
						</ul>
						<ul className='space-y-6'>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Lamborghini
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Mclaren
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Mercedes-Benz
							</li>
							<li className='group hover:text-custom-orange'>
								<span className='inline-block h-1 w-0 bg-custom-orange rounded-lg group-hover:w-3'></span>
								Ferrari
							</li>
						</ul>
					</div>
				</article>
				{/* col 3 */}
				<article className='space-y-6'>
					<h2 className='text-custom-orange font-bold text-xl md:text-2xl'>Contact</h2>
					<ul className='space-y-6 [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-linear'>
						<li className='border-b border-gray-800 pb-3 flex gap-3'>
							<FaLocationDot className='fill-custom-orange text-xl' />
							<span className='hover:text-custom-orange'>
								Dubai, United Arab Emirates
							</span>
						</li>
						<li className='border-b border-gray-800 pb-3 flex gap-3'>
							<SiGmail className='fill-custom-orange text-xl' />
							<span className='hover:text-custom-orange'>
								info@fameluxurycars.coom
							</span>
						</li>
						<li className='pb-3 flex gap-3'>
							<FaPhone className='fill-custom-orange text-xl' />
							<span className='hover:text-custom-orange'>+9715 655 5352</span>
						</li>
					</ul>
				</article>
				{/* col 4 */}
				<article className='space-y-6'>
					<h2 className='text-custom-orange font-bold text-xl md:text-2xl'>Newsletter</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae a
						assumenda voluptas maxime ullam.
					</p>
					<form className='relative' onSubmit={(e) => e.preventDefault()}>
						<input
							type='email'
							name=''
							className='bg-white bg-opacity-20 rounded-full w-full p-2 ps-3 placeholder:font-light placeholder:text-sm outline-none'
							placeholder='Enter your email'
						/>
						<button
							type='submit'
							className='
								absolute bg-custom-orange p-2 px-3 z-10 rounded-full font-semibold transition-all duration-300 ease-linear end-0  
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
