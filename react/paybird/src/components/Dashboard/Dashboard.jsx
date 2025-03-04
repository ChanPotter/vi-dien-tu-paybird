import { useState } from 'react';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { Services, Utilities, NewsAndEvents } from './Items/index';
import BrandList from '../Home/BrandList';
import { SearchBar } from '../LitItem/SearchBar';
const Dashboard = () => {
	const [searchQuery, setSearchQuery] = useState('');
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
				<div className="flex flex-col items-center sm:flex-row sm:justify-between p-6">
					<div className="flex justify-center text-center text-2xl font-sans py-2">
						Dịch Vụ Khác
					</div>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					></SearchBar>
				</div>
				<hr className="border-gray-300 border-t-3"></hr>
				<Services searchQuery={searchQuery} />
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
