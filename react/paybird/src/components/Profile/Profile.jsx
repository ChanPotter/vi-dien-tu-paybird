import { HeaderDashboard, Footer } from '../Header-Footer/index';
import ProfileCard from './ProfileCard';

const Profile = () => {
	return (
		<div className="bg-gray-100">
			<HeaderDashboard />
			<ProfileCard />
			<Footer />
		</div>
	);
};
export default Profile;
