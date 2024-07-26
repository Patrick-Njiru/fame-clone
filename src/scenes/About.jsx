import { Button, SectionTitle, SimpleSlider } from "../components"
import lambo from "../assets/lambo.webp"
import ferrari from "../assets/ferrari.webp"
import benz from "../assets/benz.webp"
import mclaren from "../assets/mclaren.webp"
import lamboLogo from "../assets/lambo-logo.webp"
import ferrariLogo from "../assets/ferrari-logo.webp"
import benzLogo from "../assets/benz-logo.webp"
import mcLarenLogo from "../assets/mclaren-logo.webp"

const cars = [lambo, ferrari, benz, mclaren]
const logos = [lamboLogo, benzLogo, mcLarenLogo, ferrariLogo]

const About = () => {
	return (
		<section id='about' className='py-40 bg-black'>
			<div className='flex justify-between gap-20'>
				<div className='flex flex-col justify-between space-y-10 w-1/2'>
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

			<section className='flex justify-between bg-inherit pt-40'>
				{logos.map((logo, id) => (
					<img key={id} src={logo} alt='Lamborghini logo' className='h-28 rounded-full' />
				))}
			</section>
		</section>
	)
}

export default About
