import PropTypes from "prop-types"
import { BiSolidQuoteAltRight } from "react-icons/bi"

const Card = ({ photo, name, title, review }) => {
	return (
		<article
			className='
				bg-orange-500 text-black space-y-3 w-1/3 px-6 pt-3 pb-12 rounded-sm relative 
				top-0 overflow-hidden transition-all duration-300 ease-linear 
				hover:-top-5'
		>
			<div className='absolute size-32 bg-black rounded-full -end-12 -top-12 flex items-end justify-start p-6'>
				<BiSolidQuoteAltRight className='fill-white text-5xl' />
			</div>
			<div className='flex justify-start gap-6 items-center'>
				<img
					src={photo || "https://via.placeholder.com/1024?text=reviewer"}
					alt='reviewer pic'
					className='size-20 rounded-full'
				/>
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
}

export default Card