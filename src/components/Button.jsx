import PropTypes from "prop-types"

const Button = ({ children }) => {
	return (
		<button
			className='
				w-fit uppercase bg-orange-500 text-center py-3 px-6 rounded-sm font-medium border border-orange-500
				transition-all duration-300 ease-linear relative top-0 hover:-top-3 hover:bg-transparent'
		>
			{children}
		</button>
	)
}

Button.propTypes = { children: PropTypes.any.isRequired }

export default Button
