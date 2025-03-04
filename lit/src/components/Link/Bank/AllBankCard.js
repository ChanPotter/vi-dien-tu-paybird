import { LitElement, html, css } from 'lit';

export class AllBankCard extends LitElement {
	static properties = {
		item: { type: String },
	};

	static styles = css`
		.flex {
			display: flex;
		}
		.items-center {
			align-items: center;
		}
		.rounded-lg {
			border-radius: 0.5rem;
		}
		.p-4 {
			padding: 1rem;
		}
		.bg-white {
			background-color: #fff;
		}
		.hover-shadow-lg {
			transition: all 0.3s ease;
		}
		.hover-shadow-lg:hover {
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
				0 4px 6px -2px rgba(0, 0, 0, 0.05);
		}
		.space-x-4 > * + * {
			margin-left: 1rem;
		}
		.cursor-pointer {
			cursor: pointer;
		}
		.w-21 {
			width: 5.25rem;
		}
		.h-21 {
			height: 5.25rem;
		}
		.rounded-full {
			border-radius: 9999px;
		}
		.shadow-lg {
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
				0 4px 6px -2px rgba(0, 0, 0, 0.05);
		}
		.p-2 {
			padding: 0.5rem;
		}
		.text-left {
			text-align: left;
		}
		.text-lg {
			font-size: 1.125rem;
		}
		.font-semibold {
			font-weight: 600;
		}
		.text-gray-500 {
			color: #6b7280;
		}
		.text-sm {
			font-size: 0.875rem;
		}
		/* Sửa lại responsive */
		.description {
			display: none; /* Mặc định ẩn */
		}
		@media (max-width: 639.99px) {
			/* Dưới sm (640px) */
			.description {
				display: block;
			}
		}
		@media (min-width: 1024px) {
			/* Từ lg (1024px) trở lên */
			.description {
				display: block;
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
				class="flex items-center rounded-lg p-4 bg-white hover-shadow-lg space-x-4 cursor-pointer"
				@click=${this.handleClick}
			>
				<img
					src=${item.image}
					alt=${item.name}
					class="w-21 h-21 rounded-full shadow-lg p-2"
				/>
				<div class="text-left">
					<h3 class="text-lg font-semibold">${item.name}</h3>
					<p class="text-gray-500 text-sm description">${item.description}</p>
				</div>
			</div>
		`;
	}
}

customElements.define('allbank-card', AllBankCard);
