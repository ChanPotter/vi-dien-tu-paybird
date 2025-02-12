export function InfoOne() {
	const features = [
		{
			icon: '💲', // Thay bằng icon thực tế
			title: 'Không có chi phí ẩn',
			description:
				'Bạn không tốn chi phí nào khác để thanh toán với PayPal, ngoài khoản phí khi bán hàng/dịch vụ hoặc yêu cầu thanh toán.',
			link: 'không tốn chi phí nào khác',
		},
		{
			icon: '💳',
			title: 'Nhận Thưởng',
			description:
				'Chúng tôi phối hợp cùng các ngân hàng trong và ngoài nước để bạn có thể dùng (các) thẻ ưu tiên của mình và tích lũy điểm thưởng.',
		},
		{
			icon: '🛡️',
			title: 'Luôn được bảo vệ',
			description:
				'Mua sắm với PayPal an toàn hơn nhờ tính năng Bảo vệ Bên mua, tính năng giám sát chống gian lận 24/7 và bảo mật đẳng cấp thế giới.',
			link: 'an toàn hơn',
		},
	];
	return (
		<div className="">
			<div className="text-3xl p-7 text-center text-gray-700">
				An tâm thanh toán
			</div>
			<div className="max-w-screen-xl mx-auto px-6 py-10">
				<div className="grid grid-cols-1 md:grid-cols-3 text-center">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col items-center space-y-4">
							<div className="text-8xl text-blue-500">{feature.icon}</div>
							<h3 className="text-xl font-semibold text-gray-700">
								{feature.title}
							</h3>
							<p className="text-gray-700 p-3 text-md">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
