import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PropTypes from "prop-types"

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

// const CustomPrevArrow = () => (
// 	<button className='p-1'>
// 		<FaArrowLeft className='text-xl fill-white hover:fill-slate-300 ' />
// 	</button>
// )

// const CustomNextArrow = () => (
// 	<button className='p-1'>
// 		<FaArrowRight className='text-xl fill-white hover:fill-slate-300' />
// 	</button>
// )

const SimpleSlider = ({ children }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slideToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		cssEase: "linear",
		// prevArrow: <CustomPrevArrow />,
		// nextArrow: <CustomNextArrow />,
	}

	return (
		<div className='size-1/2 h-96 [&_img]:h-[70vh] relative'>
			<Slider {...settings}>{children}</Slider>
		</div>
	)
}

SimpleSlider.propTypes = { children: PropTypes.any.isRequired }

export default SimpleSlider
