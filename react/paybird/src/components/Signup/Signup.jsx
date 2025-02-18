import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = (event) => {
    event.preventDefault(); // Prevent form submission
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="bg-[#080710] h-screen flex items-center justify-center">
      <div className="relative w-[400px] h-[505px]">
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#1845ad] to-[#23a2f6] -left-20 -top-20"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -right-10 -bottom-20"></div>
        <div>
          <form className="h-full w-full bg-white/10 backdrop-blur-md border-2 border-white/10 rounded-lg shadow-lg p-12">
            {/* Return Button with "X" Icon */}
            <button
              onClick={handleBackClick} // Use the new handler
              className="absolute top-4 right-4 text-red-600 text-2xl hover:text-red-800"
              type="button" // Ensure it's a button type
            >
              <FaTimes /> {/* This is the "X" icon */}
            </button>
            <h3 className="text-2xl font-medium text-center text-white">
              Register Here
            </h3>
            <label
              className="block mt-8 text-white font-medium"
              htmlFor="username"
            >
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Họ và tên"
              id="username"
              className="block h-12 w-full bg-white/7 rounded-md p-2 mt-2 text-white placeholder:text-gray-300"
            />
            <label
              className="block mt-6 text-white font-medium"
              htmlFor="password"
            >
              Số điện thoại
            </label>
            <input
              type="password"
              placeholder="Số điện thoại"
              id="password"
              className="block h-12 w-full bg-white/7 rounded-md p-2 mt-2 text-white placeholder:text-gray-300"
            />
            <label
              className="block mt-6 text-white font-medium"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Mật khẩu"
              id="password"
              className="block h-12 w-full bg-white/7 rounded-md p-2 mt-2 text-white placeholder:text-gray-300"
            />
            {/* Button Container */}
            <div className="flex gap-4 mt-11">
              <button className="bg-white text-[#080710] py-2 text-lg font-semibold rounded-md cursor-pointer hover:bg-gray-400 flex-1">
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
