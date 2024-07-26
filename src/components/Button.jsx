import PropTypes from "prop-types"

const Button = ({ children }) => {
	return (
		<button
			type='button'
			className='
				w-fit uppercase bg-custom-orange text-center py-2 px-4 rounded-sm border border-custom-orange
				transition-all duration-300 ease-linear relative top-0 text-sm hover:-top-3 hover:bg-transparent md:text-base md:py-3 md:px-6 md:font-medium'
		>
			{children}
		</button>
	)
}

Button.propTypes = { children: PropTypes.any.isRequired }

export default Button
