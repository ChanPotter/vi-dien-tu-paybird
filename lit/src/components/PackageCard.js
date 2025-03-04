import { html, css, LitElement } from 'lit';

export class PackageCard extends LitElement {
	static properties = {
		size: { type: String }, // Kích thước (ví dụ: "S")
		price: { type: String }, // Giá (ví dụ: "100.000đ")
		duration: { type: String }, // Thời gian (ví dụ: "30 ngày")
		cashback: { type: String }, // Số tiền hoàn (ví dụ: "5.000đ")
	};

	static styles = css`
		.card {
			border: 1px solid #bfdbfe; /* border-blue-200 */
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
			cursor: pointer;
			border-radius: 0.5rem; /* rounded-lg */
			background: #eff6ff; /* bg-blue-50 */
			color: #1e40af; /* text-blue-900 */
			padding: 0.99rem; /* Đảm bảo padding cho card */
		}

		.info-row {
			display: flex;
			justify-content: space-around;
		}

		.info-row p {
			margin: 0; /* Loại bỏ margin mặc định của p */
		}

		.size {
			font-size: 1.125rem; /* text-lg */
			font-weight: 600; /* font-semibold */
		}

		.price {
			font-size: 1.125rem; /* text-lg */
			font-weight: 700; /* font-bold */
		}

		.details-row {
			display: flex;
			justify-content: space-around;
			margin-top: 0.125rem; /* Giảm từ 0.25rem (4px) xuống 0.125rem (2px) */
		}

		.details-row p {
			margin: 0; /* Loại bỏ margin mặc định của p */
		}

		.duration {
			font-size: 0.75rem; /* text-xs */
			color: #6b7280; /* text-gray-500 */
		}

		.cashback {
			font-size: 0.75rem; /* text-xs */
			color: #16a34a; /* text-green-600 */
		}
	`;

	render() {
		return html`
			<div class="card">
				<div class="info-row">
					<p class="size">${this.size}</p>
					<p class="price">${this.price}</p>
				</div>
				<div class="details-row">
					<p class="duration">${this.duration}</p>
					<p class="cashback">Hoàn: ${this.cashback}</p>
				</div>
			</div>
		`;
	}
}

customElements.define('package-card', PackageCard);
