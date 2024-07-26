import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

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

const SimpleSlider = () => {
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
			<Slider {...settings}>
				<img
					src='https://via.placeholder.com/1024?text=Slider+1'
					alt='Slide 1'
					className='object-cover opacity-25'
				/>
				<img
					src='https://via.placeholder.com/1024?text=Slider+2'
					alt='Slide 2'
					className='object-cover opacity-50'
				/>
				<img
					src='https://via.placeholder.com/1024?text=Slider+3'
					alt='Slide 3'
					className='object-cover opacity-75'
				/>
				<img
					src='https://via.placeholder.com/1024?text=Slider+4'
					alt='Slide 4'
					className='object-cover'
				/>
			</Slider>
		</div>
	)
}

export default SimpleSlider
