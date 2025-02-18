import bang from '../../../assets/logo/logo4.png';
import { Button } from '../../lit-wrapper';
import { Disclosure, DisclosureButton, Menu } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	Cog6ToothIcon, //cog-6-tooth
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Notification from '../../Notification/Notification';

const navigation = [
	{ name: 'TRANG CHỦ', href: '/Dashboard', current: true, status: true },
	{ name: 'VÍ ĐIỆN TỬ', href: '/Wallet', current: false, status: true },
	{ name: 'HOẠT ĐỘNG', href: '/Active', current: false, status: true },
	{
		name: 'TRỢ GIÚP',
		href: '/Dashboard/Support',
		current: false,
		status: true,
	},
	{ name: 'CÀI ĐẶT', href: '/Support', current: false, status: false },
	{ name: 'THÔNG BÁO', href: '/Support', current: false, status: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
// eslint-disable-next-line react/prop-types
const Header = ({ className }) => {
	const location = useLocation(); // Lấy đường dẫn hiện tại
	const [isOpen, setIsOpen] = useState(false);
	// Hàm đóng modal khi click ra ngoài
	const handleModalClose = (e) => {
		// Đảm bảo rằng chỉ đóng modal khi click vào phần nền (chứa modal)
		if (e.target.classList.contains('modal-background')) {
			setIsOpen(false);
		}
	};

	return (
		<Disclosure as="nav" className={`bg-blue-800 ${className}`}>
			{({ open, close }) => (
				<>
					{/* Overlay (đóng menu khi bấm ra ngoài) */}
					{open && (
						<div
							className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 transition-opacity duration-300 z-40"
							onClick={close} // Đóng menu khi click ra ngoài
						/>
					)}
					<div className="mx-auto px-2 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center min-[1118px]:hidden p-2">
								{/* Mobile menu button*/}
								<DisclosureButton className="border border-white rounded-lg group relative inline-flex items-center justify-center p-1 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>

									{/* Icon Menu */}
									<Bars3Icon
										aria-hidden="true"
										className="block size-6 text-white group-data-open:hidden"
									/>

									<span className="px-2 text-white group-data-open:text-white">
										Menu
									</span>

									{/* Icon Close */}
									<XMarkIcon
										aria-hidden="true"
										className="hidden size-6 group-data-open:block border border-blue-600 rounded-md"
									/>
								</DisclosureButton>
							</div>
							<div
								className="flex flex-1 justify-center 
   									sm:items-stretch sm:justify-start sm:pl-27
    								min-[1118px]:justify-start min-[1118px]:!pl-0"
							>
								<div className="flex shrink-0 items-center">
									<Link to="/">
										<img
											alt="Your Company"
											src={bang}
											className="h-13 w-auto rounded-full bg-primary p-1 md:h-13 lg:h-14"
										/>
									</Link>
								</div>
								<div className="hidden min-[1118px]:flex items-center">
									<div className="flex space-x-5 h-14 items-center pl-5">
										{navigation
											.filter((item) => item.status) // Chỉ lấy mục có status: true
											.map((item) => (
												<Link
													to={item.href}
													key={item.name}
													className={`rounded-md px-3 py-2 text-sm font-medium transition ${
														location.pathname === item.href
															? 'bg-gray-900 text-white'
															: 'text-white hover:bg-gray-700 hover:text-white'
													}`} // Hiển thị mục đang chọn
												>
													{item.name}
												</Link>
											))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 lg:pr-0">
								<button
									type="button"
									className="relative rounded-full bg-gray-100 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden hidden sm:block"
									onClick={(e) => {
										e.stopPropagation(); // Ngừng sự kiện lan truyền
										setIsOpen(!isOpen);
									}} // Mở modal thông báo
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only hidden sm:block">
										View notifications
									</span>
									<BellIcon
										aria-hidden="true"
										className="size-6 cursor-pointer"
									/>
								</button>

								{/* Modal thông báo */}
								{isOpen && (
									<div
										className="modal-background absolute mt-151 right-0 bg-gray-100 w-80 rounded-lg shadow-lg z-50"
										onClick={handleModalClose} // Đóng modal khi click ra ngoài
									>
										<div className="p-4" onClick={(e) => e.stopPropagation()}>
											{/* Header modal */}
											<div className="flex justify-between items-center border-b pb-2">
												<h2 className="text-lg font-bold">Thông báo</h2>
											</div>

											{/* Nội dung modal */}
											<Notification />
										</div>
									</div>
								)}
								<button
									type="button"
									className="relative rounded-full ml-3 bg-gray-100 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden hidden sm:block"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only hidden sm:block">
										View notifications
									</span>
									<Cog6ToothIcon
										aria-hidden="true"
										className="size-6 hidden sm:block"
									/>
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Link to="/">
											<Button>Đăng Xuất</Button>
										</Link>
									</div>
								</Menu>
							</div>
						</div>
					</div>
					{/* Mobile Menu */}
					<Disclosure.Panel
						className={`fixed left-0 top-0 h-full w-[75%] max-w-xs bg-blue-900 p-4 shadow-lg z-50 
        transition-transform duration-300 ease-in-out ${
					open ? 'translate-x-0' : '-translate-x-full'
				} min-[1118px]:hidden`}
					>
						{/* Nút đóng menu */}
						<div className="flex justify-end">
							<button
								onClick={close}
								className="text-white text-2xl p-2 focus:outline-none"
							>
								✖
							</button>
						</div>

						<div className="space-y-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
								>
									{item.name}
								</Disclosure.Button>
							))}
							<Link to="/">
								<Disclosure.Button className="block rounded-md bg-amber-50 px-3 py-2 text-base font-medium text-black hover:bg-blue-600">
									ĐĂNG XUẤT
								</Disclosure.Button>
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Header;
