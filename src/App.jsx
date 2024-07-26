import { About, Contact, Footer, Hero, Models, Navbar, Service, Testimonials } from "./scenes"

const App = () => {
	return (
		<main className='overflow-hidden bg-black text-white'>
			<Navbar />
			<Hero />
			<About />
			<Models />
			<Service />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	)
}

export default App
