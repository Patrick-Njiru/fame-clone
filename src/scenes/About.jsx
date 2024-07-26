import { Button, SectionTitle, SimpleSlider } from "../components"

const About = () => {
	return (
		<section className='flex justify-between gap-20 my-32'>
			<div className='flex flex-col justify-between space-y-10 w-1/2'>
				<SectionTitle
					title='Select a car'
					description='Drive in style, luxury, & comfort in dubai'
					centered={false}
				/>
				<p className='leading-loose'>
					From elegant to powerful super cars, our diverse fleet is designed to satisfy
					all your cruising desires, FAME Luxury Cars Rental in Dubai provides transparent
					and competitive pricing for its services. Our diverse fleet of luxury cars in
					Dubai encompasses renowned brands. Take your pick from our extensive selection.
				</p>
				<Button>Choose your car</Button>
			</div>
			{/* TODO Add an automatic slideshow of the various brands of their cars with arrow indicators to redirect and pause the slideshow on hover. Use a library if possible */}
			<SimpleSlider />
		</section>
	)
}

export default About
