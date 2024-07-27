import { useEffect, useState } from "react"
import { FaArrowUp, FaCartArrowDown } from "react-icons/fa"
import { logo } from "../assets"

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [openMenu, setOpenMenu] = useState(false)
	const [openCart, setOpenCart] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.scrollY)

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			className={`
        flex justify-between items-center w-full fixed start-0 top-0 z-20
				transition-colors duration-100 ease-linear
        ${scrollPosition == 0 ? "bg-transparent pt-3 xl:pt-0" : "bg-black"} `}
		>
			<a
				href='#'
				className='
					block size-12 md:size-24 mb-2 hover:opacity-80 hover:scale-90
					transition-all duration-300 ease-linear'
			>
				<img src={logo} className='object-cover' alt='logo' />
			</a>
			{/* Desktop Menu */}
			<nav
				className='
					ms-60 w-1/2 gap-3 hidden justify-evenly bg-inherit 
					[&_*]:font-medium [&_*]:text-sm lg:flex xl:[&_*]:text-base'
			>
				<a
					className='transition-all duration-300 ease-linear hover:border-b hover:text-custom-orange'
					href='#'
				>
					HOME
				</a>
				<a
					className='transition-all duration-300 ease-linear hover:border-b hover:text-custom-orange'
					href='#about'
				>
					ABOUT US
				</a>
				<a
					className='transition-all duration-300 ease-linear hover:border-b hover:text-custom-orange'
					href='#services'
				>
					CATALOGUE
				</a>
				<a
					className='transition-all duration-300 ease-linear hover:border-b hover:text-custom-orange'
					href='#testimonials'
				>
					BLOG & NEWS
				</a>
				<a
					className='transition-all duration-300 ease-linear hover:border-b hover:text-custom-orange'
					href='#contact'
				>
					CONTACT US
				</a>
			</nav>

			{/* Mobile Menu */}
			<nav
				id='mobile-menu'
				className={`
          transition-all duration-300 ease-in [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in 
					fixed top-0 w-1/3 min-w-48 flex flex-col z-20 gap-6 items-center py-20 rounded-br-xl 
					bg-custom-orange text-black text-sm font-medium lg:hidden
          ${openMenu ? "start-0" : "-start-1/2 opacity-0"}
        `}
			>
				<button
					type='button'
					className='bg-inherit space-y-0.5 me-6 absolute top-4 end-0 text-xl hover:text-white'
					onClick={() => setOpenMenu(!openMenu)}
					title='Close menu'
				>
					X
				</button>
				<a className='hover:text-base hover:text-white' href='#'>
					HOME
				</a>
				<a className='hover:text-base hover:text-white' href='#about'>
					ABOUT US
				</a>
				<a className='hover:text-base hover:text-white' href='#services'>
					CATALOGUE
				</a>
				<a className='hover:text-base hover:text-white' href='#testimonials'>
					BLOG & NEWS
				</a>
				<a className='hover:text-base hover:text-white' href='#contact'>
					CONTACT US
				</a>
			</nav>

			<div className='flex gap-1 w-fit bg-inherit relative'>
				{/* Hamburger Menu Btn */}
				<button
					type='button'
					className='
						bg-inherit space-y-0.5 me-6 transition-all duration-300 ease-linear 
						hover:opacity-80 hover:scale-90 lg:hidden'
					onClick={() => setOpenMenu(!openMenu)}
					title={`${openMenu ? "Close menu" : "Open menu"}`}
				>
					<span id='line1' className='block h-1 w-5 bg-white'></span>
					<span id='line2' className='block h-1 w-4 bg-white'></span>
					<span id='line3' className='block h-1 w-6 bg-white'></span>
				</button>

				<span>$0.00</span>
				<div
					className='cursor-pointer transition-all duration-300 ease-linear hover:opacity-80 hover:scale-90'
					onClick={() => setOpenCart(!openCart)}
					title='Open cart'
				>
					<FaCartArrowDown className='size-5' />
					<span className='text-sm -block size-4 flex justify-center items-center bg-custom-orange rounded-full absolute -end-1 -top-2'>
						0
					</span>
				</div>
			</div>
			<a
				href='#'
				className={`
					fixed bottom-10 end-10 bg-custom-orange border border-custom-orange rounded-full
					transition-all duration-300 ease-linear hover:bg-black [&_*]:hover:fill-custom-orange
					${scrollPosition > window.innerHeight ? "" : "hidden"}
				`}
			>
				<FaArrowUp className='text-xl fill-black m-3' />
			</a>

			{/* Cart Modal */}
			<article
				className={`
					transition-all duration-300 ease-in [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in 
					fixed end-0 z-40 top-16 bottom-0 bg-white w-60 flex justify-center items-center
					${openCart ? "opacity-100 h-full" : "opacity-0 h-0"}
				`}
			>
				<button
					type='button'
					className='absolute top-0 start-0 text-black text-xl m-3 	hover:text-custom-orange'
					onClick={() => setOpenCart(!openCart)}
					title='Close cart'
				>
					X
				</button>
				<p className='text-black text-center my-6 w-5/6'>
					There are currently no items in the cart
				</p>
			</article>
		</header>
	)
}

export default Navbar
