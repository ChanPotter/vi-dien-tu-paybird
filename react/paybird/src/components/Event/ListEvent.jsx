import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import events from '../../database/Event.json';

const ListEvent = () => {
	const [visibleCount, setVisibleCount] = useState(6); // Số sự kiện hiển thị ban đầu
	const navigate = useNavigate();
	const handleLoadMore = () => {
		setVisibleCount((prevCount) => prevCount + 6); // Mỗi lần tăng thêm 4 sự kiện
	};
	const handleClick = (id) => {
		navigate(`/Dashboard/Events/${id}`); // Dùng ID
		// Nếu dùng name thì: navigate(`/bank/${encodeURIComponent(name)}`);
	};
	return (
		<div className="max-w-4xl mx-auto my-10 relative p-3 sm:p-0">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				pagination={{ el: '.custom-pagination', clickable: true }}
				autoplay={{ delay: 5000 }}
				className="rounded-xl relative"
			>
				{events.map((event) => (
					<SwiperSlide key={event.id} onClick={() => handleClick(event.id)}>
						<div className="relative cursor-pointer">
							{/* Ảnh */}
							<img
								src={event.image}
								alt={event.name}
								className="w-full h-60 sm:h-110 object-cover rounded-xl"
							/>

							{/* Pagination nằm trên ảnh */}
							{/* Pagination */}
							<div className="custom-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"></div>

							{/* Nút điều hướng */}
							<button onClick={(e) => e.stopPropagation()}  className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full">
								◀
							</button>
							<button onClick={(e) => e.stopPropagation()} className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full">
								▶
							</button>
						</div>

						{/* Nội dung */}
						<div className=" bg-white cursor-pointer">
							<p className="text-gray-500 text-sm mt-2">{event.date}</p>
							<h3 className="text-lg font-semibold text-gray-800 mt-2">
								{event.name}
							</h3>
							<p className="text-gray-600 text-sm mt-2 line-clamp-3">
								{event.description.length > 250
									? event.description.substring(0, 250) + '...'
									: event.description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="grid grid-cols-2 mt-5 gap-6">
				{events.slice(0, visibleCount).map(
					(
						event // Hiển thị số sự kiện đã chọn
					) => (
						<div
							onClick={() => handleClick(event.id)}
							key={event.id}
							className="bg-white rounded-xl cursor-pointer"
						>
							<img
								src={event.image}
								alt={event.name}
								className="w-full h-30 sm:h-55 object-cover rounded-xl"
							/>
							<p className="text-gray-500 text-sm mt-2">{event.date}</p>
							<h3 className="text-sm sm:text-md font-semibold text-gray-800 mt-2">
								{event.name}
							</h3>
						</div>
					)
				)}
			</div>

			{/* Hiển thị nút "Xem thêm" nếu còn dữ liệu chưa hiển thị */}
			{visibleCount < events.length && (
				<div className="flex justify-center mt-5">
					<button
						onClick={handleLoadMore}
						className="text-blue-700 border border-blue-700 px-5 py-2 rounded-xl cursor-pointer"
					>
						Xem thêm
					</button>
				</div>
			)}
		</div>
	);
};

export default ListEvent;
