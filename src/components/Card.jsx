import PropTypes from "prop-types"
import { BiSolidQuoteAltRight } from "react-icons/bi"

const Card = ({ photo, name, title, review, styles }) => {
	return (
		<article
			className={`
				bg-custom-orange text-black space-y-3 w-full px-6 pt-3 pb-12 rounded-sm relative 
				top-0 overflow-hidden transition-all duration-300 ease-linear
				hover:-top-5 md:w-2/5 lg:w-1/3 ${styles}`}
		>
			<div className='absolute bg-black rounded-full flex items-end justify-start p-6 -end-6 -top-6'>
				<BiSolidQuoteAltRight className='fill-white text-3xl lg:text-5xl' />
			</div>
			<div className='flex justify-start gap-2 sm:gap-6 items-center'>
				<div className='size-16 rounded-full sm:size-20 overflow-hidden'>
					<img src={photo} alt='reviewer pic' className='object-cover' />
				</div>
				<div className=''>
					<p className='font-bold text-lg md:text-xl capitalize'>{name}</p>
					<p className='text-lg md:text-xl capitalize'>{title}</p>
				</div>
			</div>
			<p className='text-center'>{review}</p>
		</article>
	)
}

Card.propTypes = {
	photo: PropTypes.string,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	review: PropTypes.string.isRequired,
	styles: PropTypes.string,
}

export default Card
