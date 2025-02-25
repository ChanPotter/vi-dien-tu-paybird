import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { SearchBar } from '../LitItem/SearchBar';
import HistoryCard from './HistoryCard';
import { useState } from 'react';

const History = () => {
	const [searchQuery, setSearchQuery] = useState('');
	return (
		<div className="min-h-screen bg-gray-100">
			<HeaderDashboard />
			<div className=" bg-[#491DE8] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-15 flex flex-col items-center">
				<div className="w-full max-w-4xl">
					<div className="rounded-lg text-center">
						<h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
							Lịch Sử Giao Dịch
						</h1>
					</div>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						className="w-full !max-w-lg mx-auto"
					/>
				</div>
			</div>
			<div className="flex justify-center ">
				<HistoryCard searchQuery={searchQuery}></HistoryCard>
			</div>
			<Footer></Footer>
		</div>
	);
};
export default History;
