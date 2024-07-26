import { useEffect, useState } from "react"
import { FaArrowUp, FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const [openMenu, setOpenMenu] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.scrollY)

		const handleResize = () => setScreenWidth(window.innerWidth)

		window.addEventListener("scroll", handleScroll)
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<header
			className={`
        flex justify-between items-center w-full fixed start-0 top-0 z-10
				transition-colors duration-100 ease-linear
        ${scrollPosition == 0 ? "bg-transparent pt-3 xl:pt-0" : "bg-black"} `}
		>
			<a href='#'>
				<img
					src={`${
						scrollPosition == 0
							? screenWidth < 1024
								? "https://fakeimg.pl/25x25"
								: "https://fakeimg.pl/80x80"
							: "https://fakeimg.pl/80x80"
					}`}
					alt='logo'
				/>
			</a>
			{/* Desktop */}
			<nav className='ms-60 w-1/2 gap-3 hidden justify-evenly bg-inherit [&_*]:font-medium lg:flex'>
				<a href='#'>HOME</a>
				<a href='#about'>ABOUT US</a>
				<a href='#catalogue'>CATALOGUE</a>
				<a href='#blog'>BLOG & NEWS</a>
				<a href='#contact'>CONTACT US</a>
			</nav>

			{/* Mobile */}

			<nav
				className={`
          transition-all duration-300 ease-out fixed top-0 w-1/2 flex flex-col
          z-20 gap-6 items-center py-20 rounded-l-xl bg-teal-500 lg:hidden
          ${openMenu ? "end-0" : "-end-1/2"}
          `}
			>
				<button
					className='absolute top-5 end-5 text-2xl text-red-600'
					onClick={() => setOpenMenu(!openMenu)}
				>
					X
				</button>
				<a href='#'>HOME</a>
				<a href='#about'>ABOUT US</a>
				<a href='#catalogue'>CATALOGUE</a>
				<a href='#blog'>BLOG & NEWS</a>
				<a href='#contact'>CONTACT US</a>
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
				className={`fixed bottom-10 end-10 ${
					scrollPosition > window.innerHeight ? "" : "hidden"
				}`}
			>
				<FaArrowUp />
			</a>
		</header>
	)
}

export default Navbar
