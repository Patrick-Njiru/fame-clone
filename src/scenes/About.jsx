import { Button, Models, SectionTitle, SimpleSlider } from "../components"

const About = () => {
	return (
		<section id='about' className='my-40'>
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
					<img
						src='https://via.placeholder.com/1024?text=Slider+1'
						alt='Slide 1'
						className='object-cover opacity-25'
					/>
					<img
						src='https://via.placeholder.com/1024?text=Slider+2'
						alt='Slide 2'
						className='object-cover opacity-50'
					/>
					<img
						src='https://via.placeholder.com/1024?text=Slider+3'
						alt='Slide 3'
						className='object-cover opacity-75'
					/>
					<img
						src='https://via.placeholder.com/1024?text=Slider+4'
						alt='Slide 4'
						className='object-cover'
					/>
				</SimpleSlider>
			</div>

			<Models />
		</section>
	)
}

export default About
