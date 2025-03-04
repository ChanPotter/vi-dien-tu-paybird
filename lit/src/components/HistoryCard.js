import { LitElement, html, css, unsafeCSS } from 'lit';

export class HistoryCard extends LitElement {
	static properties = {
		item: { type: Object }, // Nhận object trực tiếp
	};

	static styles = css`
		.transaction-card {
			max-width: 100%;
			background: ${unsafeCSS('#fff')};
			border-radius: ${unsafeCSS('0.5rem')}; /* rounded-lg */
			padding: ${unsafeCSS('1rem')}; /* p-4 */
			border: ${unsafeCSS('1px solid #e5e7eb')}; /* border-gray-200 */
			box-shadow: ${unsafeCSS(
				'0 1px 2px 0 rgba(0, 0, 0, 0.05)'
			)}; /* shadow-sm */
			display: flex;
			flex-direction: column;
			gap: ${unsafeCSS('0.5rem')}; /* space-y-2 */
			font-family: sans-serif;
			cursor: pointer;
			transition: all 0.3s ease;
		}

		.transaction-card:hover {
			box-shadow: ${unsafeCSS(
				'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
			)}; /* hover:shadow-lg */
		}

		.card-icon {
			display: flex;
			align-items: center;
			gap: ${unsafeCSS('0.5rem')}; /* space-x-2 */
		}

		.card-image {
			width: ${unsafeCSS('3rem')}; /* w-12 */
			height: ${unsafeCSS('2rem')}; /* h-8 */
			background-color: ${unsafeCSS('#4a5568')}; /* gray-700 */
			border-radius: ${unsafeCSS('0.375rem')}; /* rounded-md */
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}

		.card-number {
			font-size: ${unsafeCSS('0.75rem')}; /* text-xs */
			color: ${unsafeCSS('#a0aec0')}; /* gray-400 */
			margin-top: ${unsafeCSS('0.25rem')}; /* mt-1 */
		}

		.name {
			font-size: ${unsafeCSS('1.125rem')}; /* text-lg */
			font-weight: ${unsafeCSS('600')}; /* font-semibold */
			color: ${unsafeCSS('#2d3748')}; /* gray-800 */
		}

		.description {
			font-size: ${unsafeCSS('0.875rem')}; /* text-sm */
			color: ${unsafeCSS('#4a5568')}; /* gray-600 */
			line-height: 1.5;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.amount {
			font-size: ${unsafeCSS('1.125rem')}; /* text-lg */
			font-weight: ${unsafeCSS('600')}; /* font-semibold */
			text-align: center;
		}

		.amount.negative {
			color: ${unsafeCSS('#ef4444')}; /* text-red-500 */
		}

		.details {
			font-size: ${unsafeCSS('0.875rem')}; /* text-sm */
			color: ${unsafeCSS('#6b7280')}; /* text-gray-500 */
			text-align: right;
		}
	`;

	render() {
		const item = this.item;
		const isNegative = item.amount < 0;
		const amountClass = isNegative ? 'amount negative' : 'amount';

		return html`
			<div class="transaction-card">
				<p class="name">${item.name}</p>
				<div class="card-icon">
					<div
						class="card-image"
						style="background-image: url(${item.card.image ||
						''}); background-size: contain; background-repeat: no-repeat; background-position: center;"
					></div>
					<p class="card-number">
						${item.card.number || '0000 0000 0000 0000'}
					</p>
				</div>
				<p class="description">${item.description}</p>
				<p class="${amountClass}">
					${isNegative
						? `-${Math.abs(item.amount).toLocaleString()}`
						: item.amount.toLocaleString()}
					${item.currency}
				</p>
				<p class="details">${item.time} ${item.date}</p>
			</div>
		`;
	}
}

customElements.define('history-card', HistoryCard);
