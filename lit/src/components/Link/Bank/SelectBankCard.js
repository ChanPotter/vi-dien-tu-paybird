import { LitElement, html, css } from 'lit';

export class SelectBankCard extends LitElement {
	static properties = {
		item: { type: String }, // Nhận chuỗi JSON từ JSX
	};

	static styles = css`
		.border {
			border: 1px solid #f3f4f6; /* border-gray-100 */
		}
		.rounded-lg {
			border-radius: 0.5rem;
		}
		.p-4 {
			padding: 1rem;
		}
		.text-center {
			text-align: center;
		}
		.shadow-md {
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
				0 2px 4px -1px rgba(0, 0, 0, 0.06);
		}
		.cursor-pointer {
			cursor: pointer;
		}
		.hover-shadow-xl {
			transition: all 0.3s ease;
		}
		.hover-shadow-xl:hover {
			box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
				0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
		}
		.w-20 {
			width: 5rem;
		}
		.h-20 {
			height: 5rem;
		}
		.mx-auto {
			margin-left: auto;
			margin-right: auto;
		}
		.mb-2 {
			margin-bottom: 0.5rem;
		}
		.p-1 {
			padding: 0.25rem;
		}
		.text-lg {
			font-size: 1.125rem;
		}
		.font-inder {
			font-family: 'Inder', sans-serif; /* Giả định font Inder đã được load */
		}
		.text-gray-500 {
			color: #6b7280;
		}
		.text-sm {
			font-size: 0.875rem;
		}
		.description {
			display: block; /* Mặc định hiển thị */
		}
		@media (max-width: 1023.99px) {
			/* Dưới lg (1024px) */
			.description {
				display: none; /* max-lg:hidden */
			}
		}
	`;

	get parsedItem() {
		return JSON.parse(this.item);
	}

	handleClick() {
		const id = this.parsedItem.id;
		this.dispatchEvent(
			new CustomEvent('bank-click', {
				detail: id,
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		const item = this.parsedItem;
		return html`
			<div
				class="border border-gray-100 rounded-lg p-4 text-center shadow-md cursor-pointer hover-shadow-xl"
				@click=${this.handleClick}
			>
				<img
					src=${item.image}
					alt=${item.name}
					class="w-20 h-20 mx-auto mb-2 p-1"
				/>
				<h3 class="text-lg font-inder">${item.name}</h3>
				<p class="text-gray-500 text-sm description">${item.description}</p>
			</div>
		`;
	}
}

customElements.define('selectbank-card', SelectBankCard);
