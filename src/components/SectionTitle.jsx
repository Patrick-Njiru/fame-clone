import PropTypes from "prop-types"

const SectionTitle = ({ title, description, centered = true, otherStyles }) => {
	return (
		<div
			className={`
				space-y-4 text-orange-400 uppercase 
				${centered && "text-center"} ${otherStyles}
			`}
		>
			<p className='font-light md:text-lg'>{title}</p>
			<h2 className='font-bold text-3xl md:text-4xl'>{description}</h2>
		</div>
	)
}

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	centered: PropTypes.bool.isRequired,
	otherStyles: PropTypes.string,
}

export default SectionTitle
