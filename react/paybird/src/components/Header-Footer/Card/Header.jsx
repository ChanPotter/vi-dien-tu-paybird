import bang from '../../../assets/logo/logo3.png';
import { Button } from '../../lit-wrapper';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { DropDown } from '../../LitItem/DropDown';

const navigation = [
	{ name: 'PRICING', href: '/Pricing', current: false },
	{ name: 'ABOUT US', href: '/About', current: false },
	{ name: 'TRỢ GIÚP & HỎI ĐÁP', href: '/Support', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
// eslint-disable-next-line react/prop-types
const Header = ({ className }) => {
	return (
		<Disclosure as="nav" className={`bg-white ${className}`}>
			<div className="mx-auto px-2 lg:px-8 mt-2">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center min-[1118px]:hidden p-2">
						{/* Mobile menu button*/}
						<DisclosureButton className="border border-blue-600 rounded-lg group relative inline-flex items-center justify-center p-1 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>

							{/* Icon Menu */}
							<Bars3Icon
								aria-hidden="true"
								className="block size-6 text-blue-600 group-data-open:hidden"
							/>

							<span className="px-2 text-blue-600 group-data-open:text-blue-600">
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
								<DropDown>CÁ NHÂN</DropDown>
								{navigation.map((item) => (
									<Link
										to={item.href}
										key={item.name}
										className={`relative group rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 
          ${item.current ? 'text-white bg-blue-600' : 'text-gray-800 hover:text-white'}`}
									>
										<span className="relative z-10">{item.name}</span>

										{/* Hiệu ứng màu nền hover */}
										<span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-md"></span>

										{/* Hiệu ứng underline trượt */}
										<span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</Link>
								))}
							</div>
						</div>	
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 lg:pr-0">
						<button
							type="button"
							className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden hidden sm:block"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only hidden sm:block">
								View notifications
							</span>
							<BellIcon aria-hidden="true" className="size-6 hidden sm:block" />
						</button>

						{/* Profile dropdown */}
						<Menu as="div" className="relative ml-3">
							<div>
								<Link to="/Signup">
									<Button className="me-2 hidden sm:inline">Đăng kí</Button>
								</Link>
								<Link to="/Login">
									<Button>Đăng Nhập</Button>
								</Link>
							</div>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
							>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
									>
										Your Profile
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
									>
										Settings
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
									>
										Sign out
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</div>
			{/* Mobile menu */}
			<DisclosurePanel className="min-[1118px]:hidden">
				<div className="space-y- px-2 pt-2 pb-3 bg-blue-900">
					<div
						className="text-white  hover:bg-gray-700 hover:text-white,
								block rounded-md px-3 py-2 text-base font-medium"
					>
						CÁ NHÂN
					</div>
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? 'page' : undefined}
							className={classNames(
								item.current
									? 'bg-gray-900 text-white'
									: 'text-white  hover:bg-gray-700 hover:text-white',
								'block rounded-md px-3 py-2 text-base font-medium '
							)}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
};

export default Header;
