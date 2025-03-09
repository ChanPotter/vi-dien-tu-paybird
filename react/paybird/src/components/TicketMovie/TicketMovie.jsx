import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HeaderDashboard, Footer } from '../Header-Footer/index';
import {
	CinemaSelector,
	BookingConfirmation,
	BookingHistory,
	MovieSelector,
	SeatSelector,
	TimeSelector,
	FeaturedMovies,
} from './index';

const TicketMovie = () => {
	const [selectedCinema, setSelectedCinema] = useState('');
	const [selectedMovie, setSelectedMovie] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [bookedSeats, setBookedSeats] = useState({});
	const [bookingHistory, setBookingHistory] = useState([]);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [activeTab, setActiveTab] = useState('cinema');
	const [showBookingSteps, setShowBookingSteps] = useState(false); // Trạng thái mới để kiểm soát hiển thị các tab

	const cinemaSelectorRef = useRef(null);

	const cinemas = [
		{ id: 1, name: 'CGV Vincom' },
		{ id: 2, name: 'Lotte Cinema' },
		{ id: 3, name: 'BHD Star' },
	];

	const featuredMovies = [
		{
			id: 1,
			title: 'Avengers: Endgame',
			poster:
				'https://images.unsplash.com/photo-1536440136628-849c177e76ff?q=80&w=300',
			genre: 'Action',
			duration: 181,
			times: ['10:00', '14:00', '18:00'],
			rating: 8.4,
			reviews: 1200,
			ageRating: '13+',
		},
		{
			id: 2,
			title: 'The Matrix',
			poster:
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300',
			genre: 'Sci-Fi',
			duration: 136,
			times: ['11:00', '15:00', '19:00'],
			rating: 7.7,
			reviews: 950,
			ageRating: '16+',
		},
		{
			id: 3,
			title: 'Inception',
			poster:
				'https://images.unsplash.com/photo-1532009877282-5bfb11853b95?q=80&w=300',
			genre: 'Thriller',
			duration: 148,
			times: ['12:00', '16:00', '20:00'],
			rating: 8.8,
			reviews: 1100,
			ageRating: '13+',
		},
		{
			id: 4,
			title: 'Spider-Man: No Way Home',
			poster:
				'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=300',
			genre: 'Action',
			duration: 148,
			times: ['13:00', '17:00', '21:00'],
			rating: 8.3,
			reviews: 1500,
			ageRating: '13+',
		},
		{
			id: 5,
			title: 'Spider-Man: No Way Home',
			poster:
				'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=300',
			genre: 'Action',
			duration: 148,
			times: ['13:00', '17:00', '21:00'],
			rating: 8.3,
			reviews: 1500,
			ageRating: '13+',
		},
	];

	const movies = [
		{
			id: 5,
			title: 'Dune: Part Two',
			poster:
				'https://images.unsplash.com/photo-1613050987454-2e96c7e9b4c5?q=80&w=300',
			genre: 'Sci-Fi',
			duration: 166,
			times: ['10:30', '14:30', '18:30'],
			rating: 8.9,
			reviews: 800,
			ageRating: '16+',
		},
		{
			id: 6,
			title: 'Oppenheimer',
			poster:
				'https://images.unsplash.com/photo-1695653421013-4d2a04a1e5bd?q=80&w=300',
			genre: 'Biography',
			duration: 180,
			times: ['11:30', '15:30', '19:30'],
			rating: 8.5,
			reviews: 600,
			ageRating: '18+',
		},
		{
			id: 7,
			title: 'Barbie',
			poster:
				'https://images.unsplash.com/photo-1695653422718-2f8d3e5d2e8d?q=80&w=300',
			genre: 'Comedy',
			duration: 114,
			times: ['12:30', '16:30', '20:30'],
			rating: 7.8,
			reviews: 900,
			ageRating: '13+',
		},
	];

	const seats = [
		{ row: ['A1', 'A2', 'A3', 'A4'], type: 'normal', price: 80000 },
		{ row: ['B1', 'B2', 'B3', 'B4'], type: 'vip', price: 120000 },
		{ row: ['C1', 'C2', 'C3', 'C4'], type: 'normal', price: 80000 },
	];

	const getBookingKey = () =>
		`${selectedCinema}-${selectedMovie}-${selectedTime}`;

	const handleSeatClick = (seat) => {
		const key = getBookingKey();
		const bookedForThisShow = bookedSeats[key] || [];
		if (bookedForThisShow.includes(seat)) return;
		if (selectedSeats.includes(seat)) {
			setSelectedSeats(selectedSeats.filter((s) => s !== seat));
		} else {
			setSelectedSeats([...selectedSeats, seat]);
		}
	};

	const calculateTotal = () => {
		return selectedSeats.reduce((total, seat) => {
			const seatRow = seats.find((row) => row.row.includes(seat));
			return total + (seatRow ? seatRow.price : 0);
		}, 0);
	};

	const handleBooking = () => {
		if (
			selectedCinema &&
			selectedMovie &&
			selectedTime &&
			selectedSeats.length > 0
		) {
			setShowConfirmation(true);
		} else {
			alert('Vui lòng chọn đầy đủ thông tin!');
		}
	};

	const confirmBooking = () => {
		const key = getBookingKey();
		const newBookedSeats = {
			...bookedSeats,
			[key]: [...(bookedSeats[key] || []), ...selectedSeats],
		};
		setBookedSeats(newBookedSeats);

		const booking = {
			cinema: selectedCinema,
			movie: selectedMovie,
			time: selectedTime,
			seats: [...selectedSeats],
			total: calculateTotal(),
			date: new Date().toLocaleString(),
		};
		setBookingHistory([booking, ...bookingHistory]);

		setSelectedSeats([]);
		setShowConfirmation(false);
		setShowBookingSteps(false); // Ẩn các tab sau khi đặt vé thành công
	};

	const handleSelectMovie = (movieTitle) => {
		setSelectedMovie(movieTitle);
		setShowBookingSteps(true); // Hiển thị các tab khi bấm "Đặt vé ngay"
		setActiveTab('cinema'); // Chuyển đến tab "Chọn Rạp"
		if (cinemaSelectorRef.current) {
			cinemaSelectorRef.current.focus();
		}
	};

	const handleNextTab = (nextTab) => {
		if (
			(nextTab === 'movie' && !selectedCinema) ||
			(nextTab === 'time' && !selectedMovie) ||
			(nextTab === 'seat' && !selectedTime)
		) {
			alert('Vui lòng hoàn thành bước hiện tại trước!');
			return;
		}
		setActiveTab(nextTab);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-purple-600 font-sans">
			{/* Header */}
			<HeaderDashboard />
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="max-w-6xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 my-12"
			>
				<h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent max-sm:text-lg">
					Đặt Vé Xem Phim - Trải Nghiệm Đỉnh Cao
				</h1>

				{/* Phim Nổi Bật */}
				<FeaturedMovies
					movies={featuredMovies}
					onSelectMovie={handleSelectMovie}
					sectionId="featured"
				/>

				{/* Phim Đang Chiếu */}
				<FeaturedMovies
					movies={movies}
					onSelectMovie={handleSelectMovie}
					sectionId="now-playing"
				/>

				{/* Tabs cho các bước chọn - Chỉ hiển thị khi showBookingSteps là true */}
				{showBookingSteps && (
					<div className="mb-8">
						<div className="flex justify-center gap-4 mb-6">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-6 py-2 rounded-full font-semibold ${
									activeTab === 'cinema'
										? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
										: 'bg-gray-200 text-gray-800'
								}`}
								onClick={() => setActiveTab('cinema')}
							>
								1. Chọn Rạp
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-6 py-2 rounded-full font-semibold ${
									activeTab === 'movie'
										? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
										: 'bg-gray-200 text-gray-800'
								}`}
								onClick={() => handleNextTab('movie')}
							>
								2. Chọn Phim
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-6 py-2 rounded-full font-semibold ${
									activeTab === 'time'
										? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
										: 'bg-gray-200 text-gray-800'
								}`}
								onClick={() => handleNextTab('time')}
							>
								3. Chọn Giờ
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-6 py-2 rounded-full font-semibold ${
									activeTab === 'seat'
										? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
										: 'bg-gray-200 text-gray-800'
								}`}
								onClick={() => handleNextTab('seat')}
							>
								4. Chọn Ghế
							</motion.button>
						</div>

						{/* Nội dung của tab */}
						<div className="min-h-[400px]">
							{activeTab === 'cinema' && (
								<CinemaSelector
									cinemas={cinemas}
									selectedCinema={selectedCinema}
									setSelectedCinema={(value) => {
										setSelectedCinema(value);
										setActiveTab('movie');
									}}
									ref={cinemaSelectorRef}
								/>
							)}
							{activeTab === 'movie' && (
								<MovieSelector
									movies={[...featuredMovies, ...movies]}
									selectedCinema={selectedCinema}
									selectedMovie={selectedMovie}
									setSelectedMovie={(value) => {
										setSelectedMovie(value);
										setActiveTab('time');
									}}
								/>
							)}
							{activeTab === 'time' && (
								<TimeSelector
									movies={[...featuredMovies, ...movies]}
									selectedMovie={selectedMovie}
									selectedTime={selectedTime}
									setSelectedTime={(value) => {
										setSelectedTime(value);
										setActiveTab('seat');
									}}
								/>
							)}
							{activeTab === 'seat' && (
								<SeatSelector
									seats={seats}
									selectedTime={selectedTime}
									selectedSeats={selectedSeats}
									bookedSeats={bookedSeats}
									getBookingKey={getBookingKey}
									handleSeatClick={handleSeatClick}
									calculateTotal={calculateTotal}
								/>
							)}
						</div>
					</div>
				)}

				{showBookingSteps && (
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
						onClick={handleBooking}
						disabled={
							!selectedCinema ||
							!selectedMovie ||
							!selectedTime ||
							selectedSeats.length === 0
						}
					>
						Xác Nhận Đặt Vé
					</motion.button>
				)}

				<BookingConfirmation
					showConfirmation={showConfirmation}
					setShowConfirmation={setShowConfirmation}
					selectedCinema={selectedCinema}
					selectedMovie={selectedMovie}
					selectedTime={selectedTime}
					selectedSeats={selectedSeats}
					calculateTotal={calculateTotal}
					confirmBooking={confirmBooking}
				/>
				<BookingHistory bookingHistory={bookingHistory} />
			</motion.div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default TicketMovie;
