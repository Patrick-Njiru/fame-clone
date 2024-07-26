import PropTypes from "prop-types"

const Button = ({ children }) => {
	return (
		<button className='w-fit uppercase bg-orange-500 text-center py-2 px-4 rounded-sm hover:bg-orange-600'>
			{children}
		</button>
	)
}

Button.propTypes = { children: PropTypes.any.isRequired }

export default Button
