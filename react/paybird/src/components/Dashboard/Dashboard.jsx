import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { Services, Utilities, NewsAndEvents } from './Items/index';
import BrandList from '../Home/BrandList';
import { SearchBar } from '../Support/SearchBar';
const Dashboard = () => {
	return (
		<div className="bg-gray-100">
			<HeaderDashboard></HeaderDashboard>
			<div className="">
				<div className=" text-center text-2xl p-7 font-bold font-sans">
					Tiện Ích Nổi Bật
				</div>
				<Utilities></Utilities>
			</div>
			<div className="bg-white mt-12 rounded-3xl shadow-md max-w-7xl mx-auto">
				<div className="flex p-6 justify-between">
					<div className="flex justify-center text-center text-2xl font-sans py-2">
						Dịch Vụ Khác
					</div>
					<SearchBar></SearchBar>
				</div>
				<hr className="border-gray-300 border-t-3"></hr>
				<Services />
			</div>
			<div className="p-5 mt-10">
				<NewsAndEvents></NewsAndEvents>
			</div>

			<BrandList></BrandList>
			<Footer></Footer>
		</div>
	);
};
export default Dashboard;
