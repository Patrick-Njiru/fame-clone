import { useState } from "react"
import { BiCalendar, BiSearch } from "react-icons/bi"

const Hero = () => {
	const [pickUpDate, setPickUpDate] = useState("Pick-up Date")
	const [dropOffDate, setDropOffDate] = useState("Drop-off Date")
	return (
		<section
			className='h-svh bg-gray-600 pt-40 pb-12 hero flex flex-col justify-between'
			style={
				{
					// backgroundImage: "url(https://fakeimg.pl/1024x1024)",
					// backgroundRepeat: "no-repeat",
					// backgroundSize: "cover",
				}
			}
		>
			<div className='space-y-5'>
				<h1 className='font-semibold text-2xl leading-loose w-1/2 justify-between md:text-3xl lg:text-4xl'>
					Welcome to FAME, Where Luxury Meets UAE&apos;s Roads!
				</h1>
				<p className='text-sm'>
					Rent a super car from our fleet and make your driving dreams come true
				</p>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='flex justify-between gap-3 w-full [&_div]:w-[22%] [&_*]:outline-none'
			>
				<div className='[&_*]:bg-transparent border-b pb-2 w-60'>
					<select
						name='pick-up_location'
						className='[&_*]:bg-white [&_*]:text-black w-full'
					>
						<option value='pick-up_location'>Pick-up Location</option>
						<option value=''>Houston</option>
						<option value=''>San Diego</option>
						<option value=''>San Antonio</option>
						<option value=''>Airport</option>
						<option value=''>Other Location</option>
					</select>
				</div>
				<div className='[&_*]:bg-transparent border-b pb-2 w-60'>
					<select
						name='drop-off_location'
						className='[&_*]:bg-white [&_*]:text-black w-full'
					>
						<option value='drop_off_location'>Drop-off Location</option>
						<option value=''>Houston</option>
						<option value=''>San Diego</option>
						<option value=''>San Antonio</option>
						<option value=''>Airport</option>
						<option value=''>Other Location</option>
					</select>
				</div>
				<div className='border-b w-1/5 relative'>
					<label
						htmlFor='pick-up_date'
						className='w-full flex justify-between items-center'
					>
						{pickUpDate} <BiCalendar />
					</label>
					<input
						type='date'
						name='pick-up_date'
						id='pick-up_date'
						onChange={(e) => setPickUpDate(e.target.value || "Pick-up Date")}
						className='appearance-none bg-transparent size-full opacity-0 absolute top-0'
					/>
				</div>
				<div className='border-b pb-1 w-1/5 relative'>
					<label
						htmlFor='drop-off_date'
						className='w-full flex justify-between items-center'
					>
						{dropOffDate} <BiCalendar />
					</label>
					<input
						type='date'
						name='drop-off_date'
						id='drop-off_date'
						onChange={(e) => setDropOffDate(e.target.value || "Drop-off Date")}
						className='appearance-none bg-transparent size-full opacity-0 absolute top-0'
					/>
				</div>

				<button type='submit' className=''>
					<BiSearch className=' size-8' />
				</button>
			</form>

			
		</section>
	)
}

export default Hero
