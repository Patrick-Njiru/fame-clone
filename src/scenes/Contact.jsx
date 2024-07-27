import { contactsBg } from "../assets"
import { Button } from "../components"

const Contact = () => {
	return (
		<section
			id='contact'
			className='py-40 bg-black bg-opacity-60'
			style={{
				backgroundImage: `url(${contactsBg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: "color-dodge",
				backgroundPosition: "center center",
			}}
		>
			<div className='space-y-6 text-center mx-auto md:w-4/5'>
				<h1 className='font-bold leading-loose text-2xl sm:text-3xl lg:font-black lg:text-4xl'>
					Contact Us, and let&apos;s chat over a cup of coffee
				</h1>
				<p className='w-5/6 mx-auto'>
					We look forward to serving you and ensuring your rental experience is as
					exceptional as the vehicles we provide. For any enquiries, please contact us
					through the details provided in the official website.
				</p>
				<Button>Rent now</Button>
			</div>
		</section>
	)
}

export default Contact
