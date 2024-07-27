import { useState } from "react"
import { BiCalendar, BiSearch } from "react-icons/bi"

const Hero = () => {
	const [pickUpDate, setPickUpDate] = useState("Pick-up Date")
	const [dropOffDate, setDropOffDate] = useState("Drop-off Date")

	const setDate = (e, type) => {
		const hours24 = e.target.value.slice(11, 13)
		const hours12 = hours24 > 12 ? (hours24 - 12).toString() : hours24

		const time12 = {
			"am/pm": hours24 >= 12 ? "pm" : "am",
			time: hours12.length === 1 ? "0" + hours12 : hours12,
		}

		type == "pick-up"
			? setPickUpDate(
					`
					${e.target.value.slice(0, 10)} @${time12["time"]}:${e.target.value.slice(14, 16)}${time12["am/pm"]}
						` || "Pick-up date"
			  )
			: setDropOffDate(
					`
					${e.target.value.slice(0, 10)} @${time12["time"]}:${e.target.value.slice(14, 16)}${time12["am/pm"]}
					` || "Pick-up date"
			  )
	}

	return (
		<section
			className='
				h-screen bg-transparent hero flex flex-col justify-between relative overflow-hidden
				pt-32 pb-12 md:pt-36 lg:pt-40 xl:pt-60'
		>
			<div className='space-y-5 bg-transparent hidden md:block'>
				<h1 className='font-semibold text-2xl leading-loose w-4/5 lg:w-1/2 justify-between md:text-3xl lg:text-4xl xl:w-full'>
					Welcome to FAME, Where Luxury Meets UAE&apos;s Roads!
				</h1>
				<p className='text-sm'>
					Rent a super car from our fleet and make your driving dreams come true
				</p>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='
					flex flex-wrap justify-evenly gap-3 gap-y-6 w-full [&_div]:w-full [&_*]:outline-none
					[&_div]:border [&_div]:border-e-0 [&_div]:py-4 [&_div]:rounded-lg [&_div]:ps-2 md:[&_div]:w-[45%] 
					md:mt-12 lg:justify-between lg:[&_div]:w-[22%] lg:[&_div]:border-0 lg:[&_div]:ps-0 lg:[&_div]:border-b 
					lg:[&_div]:rounded-none'
			>
				<div className='[&_*]:bg-transparent border-b pb-2 w-60'>
					<select
						name='pick-up_location'
						className='[&_*]:bg-white [&_*]:text-black w-full'
					>
						<option value='pick-up_location'>Pick-up location</option>
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
						<option value='drop_off_location'>Drop-off location</option>
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
						type='datetime-local'
						name='pick-up_date'
						id='pick-up_date'
						onChange={(e) => setDate(e, "pick-up")}
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
						type='datetime-local'
						name='drop-off_date'
						id='drop-off_date'
						onChange={(e) => setDate(e, "drop-off")}
						className='appearance-none bg-transparent size-full opacity-0 absolute top-0'
					/>
				</div>

				<button type='submit' className='md:w-40 lg:w-fit'>
					<BiSearch className='size-8 mx-auto' />
				</button>
			</form>
		</section>
	)
}

export default Hero
