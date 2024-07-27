import { About, Contact, Footer, Hero, Navbar, Service, Testimonials } from "./scenes"
import { bgVideo, videoFallback } from "./assets"

const App = () => {
	return (
		<main className='overflow-hidden bg-black bg-opacity-60 text-white pt-0'>
			<div className='bg-black'>
				<video
					className='absolute size-full h-[130vh] -top-28 start-0 -z-20 object-cover hidden md:block'
					autoPlay
					loop
					muted
					preload='auto'
				>
					<source src={bgVideo} type='video/mp4' />
				</video>
				<img
					src={videoFallback}
					alt='Your browser does not support the video tag.'
					className='absolute size-full h-[130vh] -top-28 start-0 -z-30 object-cover'
					loading='eager'
				/>
			</div>
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	)
}

export default App
