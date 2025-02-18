import { Header, Footer } from '../Header-Footer/index';
import { SearchBar } from './SearchBar';
import ServiceSupport from './ServiceSupport';
import FAQ from './FAQ/FAQ';

const HomeSupport = () => {
	return (
		<div className="min-h-screen bg-gray-100 container-fluid">
			<Header className="shadow-lg" />
			<div className="bg-gray-200 mt-5 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col items-center">
				<div className="w-full max-w-4xl">
					<div className="rounded-lg text-center">
						<h1 className="text-3xl sm:text-3xl font-semibold text-gray-800 mb-3">
							Trung tâm trợ giúp – Tài khoản cá nhân
						</h1>
						<p className="text-sm sm:text-md text-gray-600 mb-4">
							Chúng tôi có thể giúp gì cho bạn?
						</p>
					</div>
					<SearchBar className="w-full !max-w-lg mx-auto" />
				</div>
			</div>
			<div className="mb-3">
				<ServiceSupport></ServiceSupport>
			</div>
			<div className="bg-white pt-10">
				<FAQ></FAQ>
			</div>
			<Footer></Footer>
		</div>
	);
};
export default HomeSupport;
