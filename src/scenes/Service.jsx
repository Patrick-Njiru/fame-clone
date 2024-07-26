import { ferrariBg } from "../assets"
import { SectionTitle } from "../components"

const Service = () => {
	return (
		<section id='services' className='py-40 bg-[#FF7F04] relative overflow-hidden'>
			<SectionTitle
				title='The power of our service'
				description='Why choose fame'
				otherStyles='text-white [&_h2]:text-black bg-red relative z-10'
			/>
			<div className='flex flex-wrap justify-center gap-10 mb-10 mt-20 relative z-10 md:flex-nowrap md:mb-80'>
				<article className='w-20 md:w-44 h-52 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Well Maintained Cars</p>
				</article>
				<article className='w-20 md:w-44 h-44 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Professional Staff</p>
				</article>
				<article className='w-20 md:w-44 h-36 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Affordable Luxury</p>
				</article>
				<article className='w-20 md:w-44 h-28 text-2xl font-black relative border-l-2'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] top-0'></span>
					<span className='block size-5 bg-white rounded-full absolute bottom-0 -start-[10px]'></span>
					<p className='ms-4'>Easy Booking Process</p>
				</article>
			</div>
			<div className='relative w-full flex justify-center mx-auto -top-40 md:-top-[70vh]'>
				<img src={ferrariBg} alt='car' className='absolute -end-20 hidden sm:inline' />
			</div>

			<div className='flex flex-wrap justify-center gap-12 z-10 sm:mt-20 md:mt-0 md:justify-end md:me-16 md:flex-nowrap lg:mt-40'>
				<article className='w-20 md:w-52 h-24 text-2xl font-black relative border-l-2 flex items-end top-16'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>No Deposit Required</p>
				</article>
				<article className='w-20 md:w-52 h-32 text-2xl font-black relative border-l-2 flex items-end top-8'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>Diverse Fleet of Luxury Cars</p>
				</article>
				<article className='w-20 md:w-52 h-40 text-2xl font-black relative border-l-2 flex items-end'>
					<span className='block size-2 bg-white rounded-full absolute -start-[5px] bottom-0'></span>
					<span className='block size-5 bg-white rounded-full absolute top-0 -start-[10px]'></span>
					<p className='ms-4'>Exceptional Customer Care</p>
				</article>
			</div>
		</section>
	)
}

export default Service
