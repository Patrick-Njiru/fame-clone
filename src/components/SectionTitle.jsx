import PropTypes from "prop-types"

const SectionTitle = ({ title, description, centered = true }) => {
	return (
		<div className={`space-y-4 text-orange-400 uppercase ${centered && "text-center"}`}>
			<p className='text-lg'>{title}</p>
			<h2 className='font-bold text-2xl md:text-3xl'>{description}</h2>
		</div>
	)
}

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	centered: PropTypes.bool.isRequired,
}

export default SectionTitle
