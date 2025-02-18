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
			border-radius: 10px;
			padding: 20px;
			text-align: center;
			color: white;
			width: 220px;
			box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
			transition: transform 0.2s ease-in-out;
		}
		.card:hover {
			transform: translateY(-5px);
		}
		.icon-container {
			background: white;
			border-radius: 10px;
			padding: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
		}
		.icon {
			width: 90px;
			height: 95px;
		}
		.title {
			font-size: 18px;
			font-weight: bold;
			margin: 5px 0;
		}
		.description {
			font-size: 14px;
			margin-bottom: 10px;
		}
		.card button {
			border: none;
			border-radius: 5px;
			padding: 10px 20px;
			cursor: pointer;
			background: white;
			color: black;
			font-weight: bold;
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
