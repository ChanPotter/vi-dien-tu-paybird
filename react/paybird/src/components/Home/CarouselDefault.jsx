import { Carousel } from '@material-tailwind/react';
import picture1 from '../../assets/images/9.png';
import picture2 from '../../assets/images/10.png';
import { Button } from '../lit-wrapper';
import { Link } from 'react-router-dom';

export function CarouselDefault() {
	return (
		<div className="bg-animation mt-1">
			<Carousel
				className="mx-auto w-full max-w-full h-auto"
				autoplay={true}
				loop={true}
				autoplayDelay={5000}
				navigation={({ setActiveIndex, activeIndex, length }) => (
					<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{new Array(length).fill('').map((_, i) => (
							<span
								key={i}
								className={`block h-1 mt-2 cursor-pointer rounded-4xl transition-all  ${
									activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white'
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
			>
				<div className="relative w-full min-h-[140px] sm:min-h-[240px] md:min-h-[285px] lg:min-h-[380px] xl:min-h-[470px] overflow-hidden m-0 p-0">
					<img
						src={picture1}
						alt="image 1"
						className="absolute inset-0 w-full h-full object-cover brightness-75"
					/>
					{/* Chữ trên ảnh */}
					<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center sm:max-w-[80%] md:max-w-[85%] mx-auto">
						<h2 className="text-sm p-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:block">
							PAYBIRD - ỨNG DỤNG THANH TOÁN HÀNG ĐẦU VIỆT NAM
						</h2>
						<h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 mb-4 sm:block hidden">
							Trải nghiệm PayBird, giúp việc mua sắm trên toàn thế giới trở nên
							dễ dàng hơn. Simply log in to your account settings and switch
							your language preference to English.
						</h4>
						<Link to="/Signup">
							<Button className="px-4 py-2 text-sm sm:text-base md:text-lg">
								Đăng kí ngay
							</Button>
						</Link>
					</div>
				</div>
				<div className="relative w-full min-h-[140px] sm:min-h-[240px] md:min-h-[285px] lg:min-h-[380px] xl:min-h-[470px] overflow-hidden m-0 p-0">
					<img
						src={picture2}
						alt="image 1"
						className="absolute inset-0 w-full h-full object-cover brightness-75"
					/>
					{/* Chữ trên ảnh */}
					<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center sm:max-w-[80%] md:max-w-[85%] mx-auto">
						<h2 className="text-sm p-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:block">
							PAYBIRD - ỨNG DỤNG THANH TOÁN HÀNG ĐẦU VIỆT NAM
						</h2>
						<h4 className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 mb-4 sm:block hidden">
							Trải nghiệm PayBird, giúp việc mua sắm trên toàn thế giới trở nên
							dễ dàng hơn. Simply log in to your account settings and switch
							your language preference to English.
						</h4>
						<Link to="/Signup">
							<Button className="px-4 py-2 text-sm sm:text-base md:text-lg">
								Đăng kí ngay
							</Button>
						</Link>
					</div>
				</div>
			</Carousel>
		</div>
	);
}
