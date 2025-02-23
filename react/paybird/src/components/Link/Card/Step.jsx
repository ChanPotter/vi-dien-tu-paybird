import step from '../../../database/Step.json';

const Step = () => {
	return (
		<div className="text-center">
			<p className="text-2xl font-bold mb-6 font-inder">Các Bước Thực Hiện</p>
			<ul className="text-left text-md font-inder">
				{step.map((item) => (
					<li key={item.id}>
						{item.id}. {item.description}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Step;
