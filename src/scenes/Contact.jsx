import { Button } from "../components"
import contactBg from "../assets/contact-bg.webp"

const Contact = () => {
	return (
		<section
			id='contact'
			className='py-40 bg-black bg-opacity-85'
			style={{
				backgroundImage: `url(${contactBg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: 'color-dodge',
				backgroundPosition: 'center center',
			}}
		>
			<div className='space-y-6 text-center w-4/5 mx-auto'>
				<h1 className='text-5xl'>Contact Us, ad let&apos;s chat over a cup of coffee</h1>
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
