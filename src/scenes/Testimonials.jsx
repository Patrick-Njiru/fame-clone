import { SectionTitle } from "../components"
import Card from "../components/Card"

const TESTIMONIALS = [
	{
		id: 1,
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
	{
		id: 2,
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
	{
		id: 3,
		title: "title",
		name: "name",
		review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit aperiam optio exercitationem rem maxime doloremque consequuntur animi, earum amet quasi voluptatibus. Impedit adipisci officiis ab qui doloribus id expedita.",
	},
]

const Testimonials = () => {
	return (
		<section id='testimonials' className='py-40'>
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
			<div className='flex w-full justify-evenly mt-28 gap-6'>
				{TESTIMONIALS.map((testimonial) => (
					<Card key={testimonial.id} {...testimonial} />
				))}
			</div>
		</section>
	)
}

export default Testimonials
