import { LitElement, html, css } from 'lit';

export class DetailCard extends LitElement {
	static properties = {
		fullname: { type: String },
		date_of_birth: { type: String },
		number: { type: String }, // CCCD
		issue_date: { type: String },
		issued_by: { type: String },
		address: { type: String },
	};

	static styles = css`
		:host {
			display: block;
			height: 100%;
		}
		.details-card {
			background: white;
			padding: 1.5rem; /* p-6 */
			border-radius: 0.5rem; /* rounded-lg */
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
				0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow */
			min-height: 400px; /* Đặt chiều cao tối thiểu để đồng đều */
			height: 100%;
			box-sizing: border-box;
		}

		.add-email-button {
			width: 100%; /* w-full */
			background: #d1d5db; /* bg-gray-300 */
			color: #6b7280; /* text-gray-500 */
			padding-top: 0.5rem; /* py-2 */
			padding-bottom: 0.7rem;
			border-radius: 0.25rem; /* rounded */
			margin-bottom: 1rem; /* mb-4 */
			cursor: not-allowed; /* cursor-not-allowed */
			border: none;
			font-size: 1rem; /* text-base (mặc định) */
			text-align: center;
		}

		p {
			margin: 0.7rem 0; /* Khoảng cách giữa các dòng */
			color: #333; /* text-black (mặc định) */
		}

		strong {
			font-weight: 600; /* font-semibold */
			color: #1f2937; /* text-gray-800 (mặc định) */
		}
	`;

	render() {
		return html`
			<div class="details-card">
				<button class="add-email-button" disabled>
					Thêm email để cập nhật tin tức ưu đãi mới
				</button>
				<p><strong>Họ tên:</strong> ${this.fullname}</p>
				<p><strong>Ngày sinh:</strong> ${this.date_of_birth}</p>
				<p><strong>CCCD:</strong> ${this.number}</p>
				<p><strong>Ngày cấp:</strong> ${this.issue_date}</p>
				<p><strong>Nơi cấp:</strong> ${this.issued_by}</p>
				<p><strong>Thường trú:</strong> ${this.address}</p>
			</div>
		`;
	}
}

customElements.define('detail-card', DetailCard);
