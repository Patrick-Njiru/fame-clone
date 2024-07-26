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
			<a href='#' className='block size-12 sm:size-24 mb-2'>
				<img src={logo} className='object-cover' alt='logo' />
			</a>
			{/* Desktop */}
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

			{/* Mobile */}

			<nav
				className={`
          transition-all duration-300 ease-out fixed top-0 w-1/2 min-w-48 flex flex-col
          z-20 gap-6 items-center py-20 rounded-l-xl bg-custom-orange text-black 
					text-sm font-medium lg:hidden [&_a]:transition-all  [&_a]:duration-300 [&_a]:ease-linear
          ${openMenu ? "end-0" : "-end-1/2 opacity-0"}
          `}
			>
				<button
					type='button'
					className='bg-inherit space-y-0.5 me-6 absolute top-5 start-5 lg:hidden'
					onClick={() => setOpenMenu(!openMenu)}
				>
					<span id='line1' className='block h-1 w-5 bg-white'></span>
					<span id='line2' className='block h-1 w-4 bg-white'></span>
					<span id='line3' className='block h-1 w-6 bg-white'></span>
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
				<button
					type='button'
					className='bg-inherit space-y-0.5 me-6 lg:hidden'
					onClick={() => setOpenMenu(!openMenu)}
				>
					<span id='line1' className='block h-1 w-5 bg-white'></span>
					<span id='line2' className='block h-1 w-4 bg-white'></span>
					<span id='line3' className='block h-1 w-6 bg-white'></span>
				</button>
				<span>$0.00</span>
				<div className='cursor-pointer' onClick={() => setOpenCart(!openCart)}>
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

			<article
				className={`
					transition-all duration-300 ease-in fixed end-0 z-40 top-8 bottom-0   bg-white 
					flex justify-center items-center	${openCart ? "w-60 opacity-100" : "opacity-0 w-0"}
				`}
			>
				<button
					type='button'
					className=' absolute top-0 start-0 text-black text-xl m-3 hover:text-custom-orange'
					onClick={() => setOpenCart(!openCart)}
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
