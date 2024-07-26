import {
	benz,
	benzLogo,
	ferrari,
	ferrariLogo,
	lambo,
	lamboLogo,
	mclaren,
	mclarenLogo,
} from "../assets"
import { Button, SectionTitle, SimpleSlider } from "../components"

const cars = [lambo, ferrari, benz, mclaren]
const logos = [lamboLogo, benzLogo, mclarenLogo, ferrariLogo]

const About = () => {
	return (
		<section id='about' className='py-40 bg-black'>
			<div className='flex flex-col justify-between gap-20 lg:flex-row'>
				<div className='flex flex-col justify-between space-y-10 lg:w-1/2'>
					<SectionTitle
						title='Select a car'
						description='Drive in style, luxury, & comfort in dubai'
						centered={false}
					/>
					<p className='leading-loose'>
						From elegant to powerful super cars, our diverse fleet is designed to
						satisfy all your cruising desires, FAME Luxury Cars Rental in Dubai provides
						transparent and competitive pricing for its services. Our diverse fleet of
						luxury cars in Dubai encompasses renowned brands. Take your pick from our
						extensive selection.
					</p>
					<Button>Choose your car</Button>
				</div>

				<SimpleSlider>
					{cars.map((car, id) => (
						<img key={id} src={car} alt='Slide 1' className='object-cover' />
					))}
				</SimpleSlider>
			</div>

			<section className='flex flex-wrap justify-between gap-6 bg-inherit pt-40'>
				{logos.map((logo, id) => (
					<img
						key={id}
						src={logo}
						alt='Lamborghini logo'
						className='h-12 rounded-full sm:h-20 lg:h-28'
					/>
				))}
			</section>
		</section>
	)
}

export default About
