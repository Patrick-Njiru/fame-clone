import { About, Contact, Footer, Hero, Navbar, Service, Testimonials } from "./scenes"
import { bgVideo } from "./assets"

const App = () => {
	return (
		<main className='overflow-hidden bg-black bg-opacity-80 text-white pt-0'>
			<video
				className='absolute size-full h-[130vh] -top-28 start-0 -z-20 object-cover'
				autoPlay
				loop
				muted
				preload='auto'
			>
				<source src={bgVideo} type='video/mp4' />
				Your browser doesn&apos;t support the video tag
			</video>
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
