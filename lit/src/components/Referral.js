import { html, css, LitElement } from 'lit';

export class Referral extends LitElement {
	static properties = {
		value: { type: String }, // Giá trị của input
	};

	static styles = css`
		.title {
			font-size: 24px;
			margin-bottom: 15px;
			text-align: center;
			font-weight: bold;
			color: #000;
		}

		.input {
			padding: 12px;
			border-radius: 8px;
			border: none;
			background: #f1f3f5; /* Xám nhạt */
			color: #000;
			text-align: center;
			font-size: 16px;
			transition: background 0.3s ease;
		}

		.input::placeholder {
			color: #9e9e9e;
		}

		.input:focus {
			outline: none;
			background: #e9ecef;
		}

		/* Responsive */
		@media (max-width: 640px) {
			.card {
				padding: 15px;
			}

			.title {
				font-size: 20px;
			}

			.input {
				padding: 10px;
				font-size: 14px;
			}
		}
	`;

	render() {
		return html`
			<div>
				<div class="title">Nhập mã giới thiệu</div>
				<input class="input" type="text" placeholder="Mã giới thiệu" />
			</div>
		`;
	}
}

customElements.define('referral-card', Referral);
