import { useEffect, useState } from "react"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
	const [scrollHeight, setScrollHeight] = useState(0)
	const [openMenu, setOpenMenu] = useState(false)
	const [cartItems, setCartItems] = useState(0)

	useEffect(() => setScrollHeight(window.scrollY), [])

	return (
		<header
			className={`
        flex justify-between items-center w-full py-8 px-10 fixed start-0 top-0 z-10 bg-inherit
        ${scrollHeight > 50 ? "bg-black" : "bg-transparent"} `}
		>
			<picture>
				<source media='(min-width: 1024px)' srcSet='https://fakeimg.pl/50x50' />
				<source media='(max-width: 1023px)' srcSet='https://fakeimg.pl/40x25' />
				<img src='https://fakeimg.pl/50x50' />
			</picture>
			{/* Desktop */}
			<nav className='ms-60 w-1/2 gap-3 hidden justify-evenly bg-inherit [&_*]:font-medium lg:flex'>
				<a href='#'>HOME</a>
				<a href='#about'>ABOUT US</a>
				<a href='#catalogue'>CATALOGUE</a>
				<a href='#blog'>BLOG & NEWS</a>
				<a href='#contact'>CONTACT US</a>
			</nav>

			{/* Mobile */}
			<button
				className='bg-inherit absolute top-9 end-36 space-y-0.5'
				onClick={() => setOpenMenu(!openMenu)}
			>
				<span id='line1' className='block h-1 w-5 bg-white'></span>
				<span id='line2' className='block h-1 w-4 bg-white'></span>
				<span id='line3' className='block h-1 w-6 bg-white'></span>
			</button>
			<nav
				className={`
          transition-all duration-300 ease-out fixed top-0  w-1/2 flex flex-col
          z-20 gap-6 items-center py-20 rounded-bl-xl bg-teal-500 lg:hidden
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
				<span>$0.00</span>
				<FaCartArrowDown className='size-6' />
				<span className='text-sm -block size-4 flex justify-center items-center bg-red-500 rounded-full absolute -end-1 -top-2'>
					{cartItems}
				</span>
			</div>
		</header>
	)
}

export default Navbar
