import { HeaderDashboard, Footer } from '../Header-Footer/index';
import ProfileCard from './ProfileCard';
import SettingCard from './SettingCard';
const Setting = () => {
	return (
		<div className="bg-gray-100">
			<HeaderDashboard />
			<div className="">
				<div className="">
					<ProfileCard />
					<div className="mt-5 mb-10 p-12">
						<SettingCard />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Setting;
