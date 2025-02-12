import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ForgotPassword = ({ isOpen, onClose }) => {
	const [phoneNumber, setPhoneNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle the phone number submission logic here
		console.log('Phone number submitted:', phoneNumber);
		// Close the modal after submission
		onClose();
	};

	if (!isOpen) return null; // Don't render anything if the modal is not open

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-96">
				<h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
				<form onSubmit={handleSubmit}>
					<label className="block mb-2" htmlFor="phone">
						Enter your phone number:
					</label>
					<input
						type="tel"
						id="phone"
						placeholder="Phone Number"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className="block w-full h-12 border rounded-md p-2 mb-4"
						required
					/>
					<div className="flex justify-between">
						<button
							type="button"
							onClick={onClose}
							className="bg-gray-300 text-black py-2 px-4 rounded-md"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="bg-blue-600 text-white py-2 px-4 rounded-md"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
