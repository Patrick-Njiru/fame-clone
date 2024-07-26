import { SectionTitle } from "../components"

const Service = () => {
	return (
		<section
			className='py-40 bg-orange-500 relative'
			style={
				{
					// backgroundImage: "url(https://fakeimg.pl/1024x1024)",
					// backgroundBlendMode: 'darken'
					// backgroundRepeat: "no-repeat",
					// backgroundSize: "cover",
				}
			}
		>
			<SectionTitle
				title='The power of our service'
				description='Why choose fame'
				otherStyles='text-white [&_h2]:text-black'
			/>
			<div className='flex justify-center gap-10 my-40'>
				<article className='w-44 h-52 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Well Maintained Cars</p>
				</article>
				<article className='w-44 h-44 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Professional Staff</p>
				</article>
				<article className='w-44 h-36 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Affordable Luxury</p>
				</article>
				<article className='w-44 h-28 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Easy Booking Process</p>
				</article>
			</div>
			<div className='absolute top-[500px] opacity-50 w-4/5 h-80 flex justify-center'>
				<img
					src='https://fakeimg.pl/1300x500?text=Car'
					alt='car'
					className='object-cover  flex'
				/>
			</div>

			<div className='flex justify-end me-16 gap-10 mt-44'>
				<article className='w-52 h-24 text-2xl font-black relative border-l-2 flex items-end top-16'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>No Deposit Required</p>
				</article>
				<article className='w-52 h-32 text-2xl font-black relative border-l-2 flex items-end top-8'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>Diverse Fleet of Luxury Cars</p>
				</article>
				<article className='w-52 h-40 text-2xl font-black relative border-l-2 flex items-end'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>Exceptional Customer Care</p>
				</article>
			</div>
		</section>
	)
}

export default Service
