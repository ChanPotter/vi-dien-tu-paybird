import details from '../../../database/Question.json';
import { Link } from 'react-router-dom';

const DetailFAQ = ({ id }) => {
	const selectedQues = details.find((item) => item.id.toString() === id);

	// Nếu không tìm thấy câu hỏi, hiển thị thông báo
	if (!selectedQues) {
		return (
			<div className="p-4 text-gray-500 font-inder">Không tìm thấy câu hỏi</div>
		);
	}

	return (
		<div className="p-4 mt-3 mb-5 md:p-6 lg:p-8">
			<div className="text-[15px] text-gray-500 breadcrumbs mb-5">
				<Link to="/" className="text-blue-600 hover:text-blue-800">
					Home
				</Link>
				<span className="mx-2">{' >'}</span>
				<Link to="/Support" className="text-blue-600 hover:text-blue-800">
					Help Center
				</Link>
				<span className="mx-2">{' >'}</span>
				<Link to="" className="text-blue-600 hover:text-blue-800">
					Detail Question
				</Link>
			</div>
			<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
				{selectedQues.question}
			</h2>
			<p className="text-gray-700 mb-6">{selectedQues.explain}</p>
			<ul className="list-decimal ml-5 space-y-2">
				{selectedQues.steps.map((step, index) => (
					<li key={index} className="text-gray-600">
						{step}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DetailFAQ;
