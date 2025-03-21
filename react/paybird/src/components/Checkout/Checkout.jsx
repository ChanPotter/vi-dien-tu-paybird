import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Confirm from '../LitItem/Confirm';
import packages from '../../database/Tour.json';

export default function Checkout() {
	const { id } = useParams(); // Lấy ID từ URL
	const product = packages.find((b) => b.id === parseInt(id)); // Tìm tour theo ID
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Nếu không tìm thấy sản phẩm, hiển thị thông báo
	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<h2 className="text-xl text-red-500">Tour không tồn tại!</h2>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<HeaderDashboard />
			<div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-7 mt-12 mb-12">
				<h2 className="text-lg font-medium text-gray-900 border-b pb-4">
					Đặt vé du lịch
				</h2>

				<div className="mt-5">
					<ul role="list" className="divide-y divide-gray-200">
						<li key={product.id} className="flex py-6">
							<img
								src={product.image.replace('/public', '')} // Xóa "/public" khỏi đường dẫn
								alt={product.name}
								className="w-34 h-24 rounded-md border border-gray-200"
							/>
							<div className="ml-4 flex flex-col flex-1">
								<div className="flex justify-between text-base font-medium text-gray-900">
									<h3>{product.name}</h3>
									<p>{product.price.toLocaleString()}đ</p>
								</div>
								<p className="text-sm text-gray-500">
									Quốc gia: {product.country}
								</p>
								<p className="text-sm text-gray-500">
									Thời gian: {product.day} ngày
								</p>
								<p className="text-sm text-gray-500">
									Số lượng: {product.quantity}
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div className="border-t border-gray-200 pt-6 mt-6">
					<div className="flex justify-between text-base font-medium text-gray-700">
						<p>Giá vé</p>
						<p>{product.price.toLocaleString()}đ</p>
					</div>
					<div className="flex justify-between text-base font-medium text-gray-700 pt-5 pb-5">
						<p>Tiền thuế (10%)</p>
						<p>{(product.price * 0.1).toLocaleString()}đ</p>
					</div>
					<div className="flex justify-between text-lg font-medium text-gray-900 border-t pt-5 border-gray-200">
						<p>Tổng</p>
						<p>{(product.price * 1.1).toLocaleString()}đ</p>
					</div>
					<div className="mt-6">
						<a
							onClick={() => setIsModalOpen(true)}
							className="block text-center w-full bg-indigo-600 text-white py-3 rounded-md shadow hover:bg-indigo-700"
						>
							Thanh toán
						</a>
					</div>
					<div className="mt-6 text-center">
						<a
							href="/Dashboard/6"
							className="text-indigo-600 hover:text-indigo-500"
						>
							Hủy &rarr;
						</a>
					</div>
					{isModalOpen && (
						<div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
							<Confirm number={product} />
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
