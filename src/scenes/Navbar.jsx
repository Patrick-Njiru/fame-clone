import { useEffect, useState } from "react"
import { FaArrowUp, FaCartArrowDown } from "react-icons/fa"
import { logo } from "../assets"

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [openMenu, setOpenMenu] = useState(false)

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
				<img
					src={logo}
					className='object-cover'
					alt='logo'
				/>
			</a>
			{/* Desktop */}
			<nav className='ms-60 w-1/2 gap-3 hidden justify-evenly bg-inherit [&_*]:font-medium [&_*]:text-sm xl:[&_*]:text-base lg:flex'>
				<a href='#'>HOME</a>
				<a href='#about'>ABOUT US</a>
				<a href='#services'>CATALOGUE</a>
				<a href='#testimonials'>BLOG & NEWS</a>
				<a href='#contact'>CONTACT US</a>
			</nav>

			{/* Mobile */}

			<nav
				className={`
          transition-all duration-300 ease-out fixed top-0 w-1/2 min-w-48 flex flex-col
          z-20 gap-6 items-center py-20 rounded-l-xl bg-orange-500 text-black 
					text-sm font-medium lg:hidden [&_a]:transition-all  [&_a]:duration-300 [&_a]:ease-linear
          ${openMenu ? "end-0" : "-end-1/2 opacity-0"}
          `}
			>
				<button
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
					className='bg-inherit space-y-0.5 me-6 lg:hidden'
					onClick={() => setOpenMenu(!openMenu)}
				>
					<span id='line1' className='block h-1 w-5 bg-white'></span>
					<span id='line2' className='block h-1 w-4 bg-white'></span>
					<span id='line3' className='block h-1 w-6 bg-white'></span>
				</button>
				<span>$0.00</span>
				<FaCartArrowDown className='size-5' />
				<span className='text-sm -block size-4 flex justify-center items-center bg-red-500 rounded-full absolute -end-1 -top-2'>
					0
				</span>
			</div>
			<a
				href='#'
				className={`
					fixed bottom-10 end-10 bg-orange-500 rounded-full
					transition-all duration-300 ease-linear hover:bg-black [&_*]:hover:fill-orange-500
					${scrollPosition > window.innerHeight ? "" : "hidden"}
				`}
			>
				<FaArrowUp className='text-xl fill-black m-3' />
			</a>
		</header>
	)
}

export default Navbar
