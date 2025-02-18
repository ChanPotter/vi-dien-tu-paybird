import faqs from '../../../database/FAQ.json';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<h2 className="text-4xl font-bold text-center mb-8 text-gray-700">
				Frequently Asked Questions
			</h2>
			<h3 className="text-2xl text-gray-500 mb-8">
				Everything you need to know about our amazing services.
			</h3>
			<div>
				{faqs.map((faq, index) => (
					<div key={index} className="mb-5">
						<button
							onClick={() => toggleAnswer(index)}
							className="w-full text-left p-5 hover:bg-gray-200 focus:outline-none flex items-center justify-between border-b-2 border-gray-100"
						>
							<h3 className="text-lg font-semibold">{faq.question}</h3>
							<FontAwesomeIcon
								icon={activeIndex === index ? faAngleUp : faAngleDown}
								className="text-md"
							/>
						</button>
						{activeIndex === index && (
							<div className="p-4 mt-2 text-gray-700 bg-gray-50 rounded-lg text-lg">
								<p>{faq.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
export default FAQ;
