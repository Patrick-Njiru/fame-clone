import { SectionTitle, SimpleSlider } from "../components"
import Card from "../components/Card"

const TESTIMONIALS = [
	{
		id: 1,
		photo: "https://randomuser.me/api/portraits/men/11.jpg",
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
	{
		id: 2,
		photo: "https://randomuser.me/api/portraits/women/23.jpg",
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
	{
		id: 3,
		photo: "https://randomuser.me/api/portraits/men/37.jpg",
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
]

const Testimonials = () => {
	return (
		<section id='testimonials' className='py-40 bg-black'>
			<SectionTitle
				title='What Our Clients say about Us!'
				description='testimonials'
				otherStyles='[&_p:first-child]:capitalize'
			>
				<p className='normal-case'>
					Don&apos;t just take our word for it. Here is What our satisfied customers have
					to say!
				</p>
			</SectionTitle>
			<div className='hidden flex-wrap w-full justify-evenly mt-28 gap-6 lg:flex-nowrap md:flex'>
				{TESTIMONIALS.map((testimonial) => (
					<Card key={testimonial.id} {...testimonial} />
				))}
			</div>
			<SimpleSlider styles='w-full mt-12 md:hidden'>
				{TESTIMONIALS.map((testimonial) => (
					<Card key={testimonial.id} {...testimonial} styles='hover:top-0' />
				))}
			</SimpleSlider>
		</section>
	)
}

export default Testimonials
