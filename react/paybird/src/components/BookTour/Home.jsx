import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { useEffect } from 'react';
import packages from '../../database/Tour.json';
export default function Home() {
	useEffect(() => {
		// Tạo thẻ link để load Bootstrap từ public
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '/assets/css/bootstrap.min.css'; // Đường dẫn trong public
		link.id = 'bootstrap-css'; // Đặt ID để dễ xóa

		document.head.appendChild(link);

		return () => {
			// Xóa Bootstrap khỏi <head> khi rời trang
			document.getElementById('bootstrap-css')?.remove();
		};
	}, []);
	return (
		<div>
			<HeaderDashboard />
			{/* About Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-5">
						<div
							className="col-lg-6 wow fadeInUp"
							data-wow-delay="0.1s"
							style={{ minHeight: 400 }}
						>
							<div className="position-relative h-100">
								<img
									className="img-fluid position-absolute w-100 h-100"
									src="/public/assets/img/about.jpg"
									alt=""
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
							<h6 className="section-title bg-white text-start text-primary pe-3">
								About Us
							</h6>
							<h1 className="mb-4">
								Paybird và <span className="text-primary">Du lịch</span>
							</h1>
							<p className="mb-4">
								Khám phá những vùng đất mới, tận hưởng những trải nghiệm khó
								quên. Paybird đồng hành cùng bạn trên mọi hành trình.
							</p>
							<p className="mb-4">
								Dù bạn đang mơ về một kỳ nghỉ thư giãn trên bãi biển hay một
								chuyến phiêu lưu khám phá núi rừng, Paybird luôn sẵn sàng giúp
								bạn biến ước mơ thành hiện thực.
							</p>
							<div className="row gy-2 gx-4 mb-4">
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Chuyến bay hạng nhất
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Khách sạn được tuyển chọn kỹ lưỡng
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Chỗ ở 5 sao
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Phương tiện đời mới nhất
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										150 tour du lịch thành phố cao cấp
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Dịch vụ 24/7
									</p>
								</div>
							</div>
							<a className="btn btn-primary py-3 px-5 mt-2" href="">
								Xem thêm
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* About End */}
			{/* Service Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Dịch vụ
						</h6>
						<h1 className="mb-5">Dịch vụ của chúng tôi</h1>
					</div>
					<div className="row g-4">
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-globe text-primary mb-4" />
									<h5>Tour du lịch toàn cầu</h5>
									<p>
										Khám phá thế giới với những tour du lịch được thiết kế
										riêng, mang đến trải nghiệm khó quên.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-hotel text-primary mb-4" />
									<h5>Đặt phòng khách sạn</h5>
									<p>
										Dễ dàng đặt phòng khách sạn trên toàn thế giới, với nhiều
										lựa chọn phù hợp với nhu cầu của bạn.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-user text-primary mb-4" />
									<h5>Hướng dẫn viên du lịch</h5>
									<p>
										Đội ngũ hướng dẫn, giàu kinh nghiệm, sẵn sàng đồng hành cùng
										bạn trên mọi hành trình.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-cog text-primary mb-4" />
									<h5>Tổ chức sự kiện</h5>
									<p>
										Tổ chức các sự kiện du lịch chuyên nghiệp, từ hội nghị, hội
										thảo đến các chuyến đi team building.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Service End */}
			{/* Destination Start */}
			<div className="container-xxl py-5 destination">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Điểm đến
						</h6>
						<h1 className="mb-5">Điểm đến phổ biến</h1>
					</div>
					<div className="row g-3">
						<div className="col-lg-7 col-md-6">
							<div className="row g-3">
								<div
									className="col-lg-12 col-md-12 wow zoomIn"
									data-wow-delay="0.1s"
								>
									<a
										className="position-relative d-block overflow-hidden"
										href=""
									>
										<img
											className="img-fluid"
											src="/public/assets/img/destination-1.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											30% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
											Thailand
										</div>
									</a>
								</div>
								<div
									className="col-lg-6 col-md-12 wow zoomIn"
									data-wow-delay="0.3s"
								>
									<a
										className="position-relative d-block overflow-hidden"
										href=""
									>
										<img
											className="img-fluid"
											src="/public/assets/img/destination-2.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											25% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
											Malaysia
										</div>
									</a>
								</div>
								<div
									className="col-lg-6 col-md-12 wow zoomIn"
									data-wow-delay="0.5s"
								>
									<a
										className="position-relative d-block overflow-hidden"
										href=""
									>
										<img
											className="img-fluid"
											src="/public/assets/img/destination-3.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											35% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
											Australia
										</div>
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-lg-5 col-md-6 wow zoomIn"
							data-wow-delay="0.7s"
							style={{ minHeight: 350 }}
						>
							<a
								className="position-relative d-block h-100 overflow-hidden"
								href=""
							>
								<img
									className="img-fluid position-absolute w-100 h-100"
									src="/public/assets/img/destination-4.jpg"
									alt=""
									style={{ objectFit: 'cover' }}
								/>
								<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
									20% OFF
								</div>
								<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
									Indonesia
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Destination Start */}
			{/* Package Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Gói dịch vụ
						</h6>
						<h1 className="mb-5">Các gói dịch vụ tuyệt vời</h1>
					</div>
					<div className="row g-4 justify-content-center">
						{packages.map((pkg, index) => (
							<div
								className="col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay={`${0.1 * index}s`}
								key={pkg.id}
							>
								<div className="package-item">
									<div className="overflow-hidden">
										<img
											className="img-fluid"
											src={pkg.image}
											alt={pkg.country}
										/>
									</div>
									<div className="d-flex border-bottom">
										<small className="flex-fill text-center border-end py-2">
											<i className="fa fa-map-marker-alt text-primary me-2" />
											{pkg.country}
										</small>
										<small className="flex-fill text-center border-end py-2">
											<i className="fa fa-calendar-alt text-primary me-2" />
											{pkg.day} ngày
										</small>
										<small className="flex-fill text-center py-2">
											<i className="fa fa-user text-primary me-2" />
											{pkg.quantity} người
										</small>
									</div>
									<div className="text-center p-4">
										<h3 className="mb-0">{pkg.price.toLocaleString()}đ</h3>
										<div className="mb-3">
											{[...Array(5)].map((_, i) => (
												<small key={i} className="fa fa-star text-primary" />
											))}
										</div>
										<p>{pkg.description}</p>
										<div className="d-flex justify-content-center mb-2">
											<a
												href="#"
												className="btn btn-sm btn-primary px-3 border-end"
												style={{ borderRadius: '30px 0 0 30px' }}
											>
												Xem thêm
											</a>
											<a
												href={`/Dashboard/6/Checkout/${pkg.id}`}
												className="btn btn-sm btn-primary px-3"
												style={{ borderRadius: '0 30px 30px 0' }}
											>
												Đặt ngay
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Package End */}
			{/* Booking Start */}
			<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
				<div className="container">
					<div className="booking p-5">
						<div className="row g-5 align-items-center">
							<div className="col-md-6 text-white">
								<h6 className="text-white text-uppercase">Đặt chỗ</h6>
								<h1 className="text-white mb-4">Đặt chỗ trực tuyến</h1>
								<p className="mb-4">
									Tận hưởng sự tiện lợi của việc đặt chỗ trực tuyến. Tiết kiệm
									thời gian và dễ dàng quản lý lịch trình của bạn.
								</p>
								<p className="mb-4">
									Dù bạn muốn đặt tour du lịch, phòng khách sạn hay vé máy bay,
									chúng tôi đều có thể đáp ứng mọi nhu cầu của bạn.
								</p>
								<a className="btn btn-outline-light py-3 px-5 mt-2" href="">
									Xem thêm
								</a>
							</div>
							<div className="col-md-6">
								<h1 className="text-white mb-4">Đặt tour du lịch</h1>
								<form>
									<div className="row g-3">
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="text"
													className="form-control bg-transparent"
													id="name"
													placeholder="Tên của bạn"
												/>
												<label htmlFor="name">Tên của bạn</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="email"
													className="form-control bg-transparent"
													id="email"
													placeholder="Email của bạn"
												/>
												<label htmlFor="email">Email của bạn</label>
											</div>
										</div>
										<div className="col-md-6">
											<div
												className="form-floating date"
												id="date3"
												data-target-input="nearest"
											>
												<input
													type="text"
													className="form-control bg-transparent datetimepicker-input"
													id="datetime"
													placeholder="Ngày & Giờ"
													data-target="#date3"
													data-toggle="datetimepicker"
												/>
												<label htmlFor="datetime">Ngày & Giờ</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<select
													className="form-select bg-transparent"
													id="select1"
												>
													<option value={1}>Điểm đến 1</option>
													<option value={2}>Điểm đến 2</option>
													<option value={3}>Điểm đến 3</option>
												</select>
												<label htmlFor="select1">Điểm đến</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<textarea
													className="form-control bg-transparent"
													placeholder="Yêu cầu đặc biệt"
													id="message"
													style={{ height: 100 }}
													defaultValue={''}
												/>
												<label htmlFor="message">Yêu cầu đặc biệt</label>
											</div>
										</div>
										<div className="col-12">
											<button
												className="btn btn-outline-light w-100 py-3"
												type="submit"
											>
												Đặt ngay
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Booking Start */}
			{/* Process Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Quy trình
						</h6>
						<h1 className="mb-5">3 bước đơn giản</h1>
					</div>
					<div className="row gy-5 gx-4 justify-content-center">
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}
								>
									<i className="fa fa-globe fa-3x text-primary" />
								</div>
								<h5 className="mt-4">Chọn điểm đến</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Khám phá và lựa chọn điểm đến mơ ước cho chuyến đi của bạn.
								</p>
							</div>
						</div>
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}
								>
									<i className="fa fa-dollar-sign fa-3x text-primary" />
								</div>
								<h5 className="mt-4">Thanh toán online</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Thực hiện thanh toán trực tuyến nhanh chóng và an toàn.
								</p>
							</div>
						</div>
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}
								>
									<i className="fa fa-plane fa-3x text-primary" />
								</div>
								<h5 className="mt-4">Bay ngay hôm nay</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Chuẩn bị hành lý và bắt đầu chuyến bay của bạn ngay.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
