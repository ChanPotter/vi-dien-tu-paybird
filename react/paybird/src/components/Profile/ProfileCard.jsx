import { useState } from 'react';
import camera from '../../assets/setting/camera.png';
import profile from '../../database/Profile.json';
import { MyDetailCard, MyAccountInfo } from '../lit-wrapper';

const ProfileCard = () => {
	const [avatar, setAvatar] = useState(profile[0].avatar); // Lấy avatar từ JSON

	// Xử lý đổi ảnh đại diện
	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setAvatar(imageUrl);
		}
	};

	return (
		<div className="max-w-screen mx-auto bg-gray-200 p-8 rounded-lg shadow-md">
			{profile.map((item) => (
				<div
					key={item.id}
					className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-y-4 sm:gap-x-4"
				>
					{/* Thông tin tài khoản */}
					<div className="col-span-1 h-full">
						<MyAccountInfo
							className="h-full"
							avatar={avatar}
							camera={camera}
							fullname={item.fullname}
							phone={item.phone}
							handleImageChange={handleImageChange}
						/>
					</div>
					{/* Thông tin chi tiết */}
					<div className="col-span-2 h-full">
						<MyDetailCard
							key={item.id}
							fullname={item.fullname}
							date_of_birth={item.date_of_birth}
							number={item.number}
							issue_date={item.issue_date}
							issued_by={item.issued_by}
							address={item.address}
						/>
					</div>
				</div>
			))}

			<p className="text-red-500 mt-4 text-center text-md p-3 bg-white rounded-lg">
				Note: Để chỉnh sửa những thông tin cá nhân bạn vui lòng qua quầy PayBird
				gần nhất để được hỗ trợ.
			</p>
		</div>
	);
};

export default ProfileCard;
