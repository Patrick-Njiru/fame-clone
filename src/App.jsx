import { About, CTA, Footer, Hero, Navbar, Service, Testimonials } from "./components"

const App = () => {
	return (
		<main className="px-10 pt-20 overflow-hidden">
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Testimonials />
			<CTA />
			<Footer />
		</main>
	)
}

export default App
