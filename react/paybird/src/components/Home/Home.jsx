import { CarouselDefault } from './CarouselDefault';
import { Header, Footer } from '../Header-Footer/index';
import { FeatureList } from './FeatureList';
import { Feature } from './Feature';
import Service from './Service';
import BrandList from './BrandList';
import picture8 from '../../assets/images/8.png';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className="container-fluid">
			<Header></Header>
			<CarouselDefault></CarouselDefault>
			<div className="text-xl p-3 flex justify-center bg-gray-100">
				<div className="text-gray-600">
					Bạn có câu hỏi?{' '}
					<Link to="/Support">
						<a
							href="https://example.com/help"
							className="text-blue-500 underline hover:text-blue-700"
						>
							Nhấp vào đây
						</a>
					</Link>{' '}
					để truy cập Trung tâm trợ giúp
				</div>
			</div>
			<FeatureList></FeatureList>
			<Feature></Feature>
			<div className="relative w-full h-[300px] sm:h-[400px]">
				<img
					src={picture8}
					alt="image 1"
					className="w-full h-full object-cover brightness-70"
				/>
				{/* Chữ trên ảnh */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 rounded-lg text-center max-w-[90%] mx-auto sm:max-w-[80%]">
					<h2 className="text-xl font-bold sm:text-3xl">
						Bớt âu lo, tha hồ mua sắm
					</h2>
					<h4 className="text-sm mt-2 sm:text-lg sm:mt-2 sm:mb-4">
						Bạn không chỉ hoàn toàn an tâm về vấn đề bảo mật, mà còn được tận
						hưởng các ưu đãi độc quyền của PayBird ở những cửa hàng mình yêu
						thích.
					</h4>
				</div>
			</div>

			<Service></Service>

			<BrandList></BrandList>
			<Footer></Footer>
		</div>
	);
};

export default Home;
