import Data from './Data';

const Notification = () => {
	return (
		<div className="mt-4 space-y-3">
			{Data.map(({ id, title, content }) => (
				<div key={id} className="bg-white p-5 rounded-2xl">
					<p className="font-bold text-base">{title}</p>
					<p className="text-gray-700 text-sm">{content}</p>
					<button className="text-blue-500 text-xs">Xem chi tiết</button>
				</div>
			))}
		</div>
	);
};

export default Notification;
