import { LitElement, html, css } from 'lit';
import loudspeaker from '../../assets/promotion.png'; // Giữ nguyên đường dẫn import

export class PaymentPromo extends LitElement {
	static styles = css`
		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1.5rem; /* tương đương với space-x-4 */
			background-color: #cbe4fd;
			border-radius: 16px;
			padding: 0.2rem;
		}
		img {
			width: 40px;
		}
		p {
			text-align: center;
			font-size: 1rem; /* tương đương text-2xl */
			color: #374151; /* tương đương text-gray-800 */
		}
	`;

	render() {
		return html`
			<div class="container">
				<img src="${loudspeaker}" alt="loudspeaker" />
				<p>Thanh toán bằng thẻ visa không mất phí</p>
			</div>
		`;
	}
}

customElements.define('payment-promo', PaymentPromo);
