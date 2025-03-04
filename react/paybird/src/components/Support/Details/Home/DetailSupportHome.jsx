import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../../Header-Footer/index';
import DetailFAQ from '../DetailFAQ';
import details from '../../../../database/Question.json';
const DetailSupportHome = () => {
	const { id } = useParams(); // Nhận ID từ URL
	return (
		<div className="">
			<Header className="shadow-lg" />
			<div className="">
				<DetailFAQ id={id} />
				{/* Phần Related topics */}
				<div className="p-4 mb-5 md:p-6 lg:p-8">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-2">
						Related topics
					</h2>
					<ul className="list-decimal ml-5 space-y-2">
						{details.map((question, index) => (
							<li key={index} className="text-gray-600">
								<Link
									to={`/Support/${question.id}`} // Truy cập trực tiếp `question.id`
									className="text-blue-600 hover:text-blue-800"
								>
									{question.question} {/* Hiển thị tiêu đề câu hỏi */}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
export default DetailSupportHome;
