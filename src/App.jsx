import { About, Contact, Footer, Hero, Navbar, Service, Testimonials } from "./components"

const App = () => {
	return (
		<main className='overflow-hidden bg-black text-white'>
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
