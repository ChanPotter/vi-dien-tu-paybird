import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { useParams } from 'react-router-dom';
import events from '../../database/Event.json';
import { Link } from 'react-router-dom';

const EventDetail = () => {
	const { id } = useParams(); // Lấy ID từ URL

	const eventData = events.find((b) => b.id === parseInt(id)); // Tìm sự kiện theo ID

	// Kiểm tra nếu không tìm thấy sự kiện
	if (!eventData) {
		return (
			<div>
				<HeaderDashboard />
				<p className="text-center text-red-500 font-semibold mt-5">
					Sự kiện không tồn tại!
				</p>
				<Footer />
			</div>
		);
	}

	return (
		<div>
			<HeaderDashboard />
			<div className="bg-gray-100">
				<nav className="flex  max-w-4xl mx-auto p-5" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
						<li className="inline-flex items-center">
							<a
								href="/Dashboard"
								className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
							>
								<svg
									className="w-3 h-3 me-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
								</svg>
								Home
							</a>
						</li>
						<li>
							<div className="flex items-center">
								<svg
									className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<a
									href="/Dashboard/Events"
									className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black"
								>
									Events
								</a>
							</div>
						</li>
						<li aria-current="page ">
							<div className="flex items-center">
								<svg
									className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<span className="ms-1 text-sm font-medium !text-gray-700 md:ms-2">
									Details
								</span>
							</div>
						</li>
					</ol>
				</nav>
			</div>
			<div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-xl">
				{/* Ảnh */}
				<h1 className="text-2xl font-semibold text-gray-800 mt-2">
					{eventData.name}
				</h1>
				<p className="text-gray-600 text-sm mt-2 mb-4">Ngày {eventData.date}</p>
				<img
					src={eventData.image}
					alt={eventData.name}
					className="w-full h-65 sm:h-115 object-cover rounded-xl"
				/>
				<p className="text-gray-600 text-md mt-4">{eventData.description}</p>
			</div>

			{/* Phần Related topics */}
			<div className="p-4 mt-3 mb-5 bg-white rounded-xl max-w-4xl mx-auto">
				<h2 className="text-2xl max-w-4xl font-bold text-gray-900 mb-4">
					Related topics
				</h2>
				<ul className="list-decimal list-inside mx-auto space-y-2 ">
					{events.slice(0, 5).map(
						(
							question,
							index // Chỉ lấy 5 phần tử đầu tiên
						) => (
							<li key={index} className="text-gray-600">
								<Link
									to={`/Dashboard/Events/${question.id}`}
									className="text-blue-600 hover:text-blue-800"
								>
									{question.name}
								</Link>
							</li>
						)
					)}
				</ul>
			</div>

			<Footer />
		</div>
	);
};

export default EventDetail;
