// src/components/TransactionCard.js
import { LitElement, html, css } from 'lit';

export class TransactionCard extends LitElement {
	static properties = {
		title: { type: String },
		description: { type: String },
		icon: { type: String },
		bgColor: { type: String },
	};

	static styles = css`
		:host {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
		.card {
			border-radius: 30px;
			padding: 20px;
			text-align: center;
			color: white;
			width: 220px;
			box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1),
				0px 0px 10px rgba(255, 105, 180, 0.5); /* Bóng màu hồng */
			transition: transform 0.2s ease-in-out;
			display: flex;
			flex-direction: column;
			justify-content: center; /* Căn giữa theo chiều dọc */
			align-items: center; /* Căn giữa theo chiều ngang */
			height: 270px; /* Đảm bảo đủ chiều cao để căn giữa */
		}

		.card:hover {
			transform: translateY(-5px);
		}
		.icon-container {
			width: 105px;
			height: 105px; /* Thêm chiều cao để tạo ra hình tròn hoàn chỉnh */
			background: white;
			border-radius: 50%;
			padding: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
		}

		.icon {
			width: 95px;
			height: 95px;
		}
		.description {
			font-size: 14px;
			margin-bottom: 12px;
		}
		.card button {
			border: none;
			border-radius: 50px;
			padding: 12px 25px;
			cursor: pointer;
			background: white;
			color: black;
			font-weight: 700;
			font-family: 'Roboto', sans-serif;
			font-size: 14px;
		}

		/* Responsive cho màn hình nhỏ */
		/* @media (max-width: 768px) {
			.card {
				width: 180px;
				padding: 15px;
			}
			.title {
				font-size: 16px;
			}
			.description {
				font-size: 12px;
			}
			.card button {
				padding: 8px 15px;
				font-size: 12px;
			}
		} */
	`;

	render() {
		return html`
			<div class="card" style="background-color: ${this.bgColor}">
				<div class="icon-container">
					<img class="icon" src="${this.icon}" alt="icon" />
				</div>
				<p class="description">${this.description}</p>
				<button>${this.title}</button>
			</div>
		`;
	}
}

customElements.define('transaction-card', TransactionCard);
