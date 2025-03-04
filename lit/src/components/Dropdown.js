import { LitElement, html, css } from 'lit';

export class Dropdown extends LitElement {
	static properties = {
		items: { type: Array }, // Nhận mảng các item để hiển thị
	};

	static styles = css`
		.dropdown {
			background: white;
			border-radius: 0.5rem; /* rounded-lg */
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
			width: 14rem; /* w-56 */
			position: absolute;
			left: 0;
			z-index: 10;
		}

		.dropdown.dark {
			background: #374151; /* dark:bg-gray-700 */
		}

		ul {
			padding-top: 0.5rem; /* py-2 */
			padding-bottom: 0.5rem;
			list-style: none;
			margin: 0;
		}

		li {
			display: block;
		}

		a {
			display: block;
			padding: 0.75rem 1rem; /* px-4 py-3 */
			color: #000; /* text-black */
			font-size: 0.875rem; /* text-sm */
			text-decoration: none;
		}

		a:hover {
			background: #f3f4f6; /* hover:bg-gray-100 */
		}

		.dark a {
			color: #d1d5db; /* dark:text-gray-200 */
		}

		.dark a:hover {
			background: #4b5563; /* dark:hover:bg-gray-600 */
		}
	`;

	constructor() {
		super();
		// Định nghĩa dữ liệu mặc định nếu cần
		this.items = [
			{ label: 'Pay with PayBird', path: '/Login' },
			{ label: 'Shop Online Securely', path: '/shop-securely' },
			{ label: 'Buyer Protection', path: '/buyer-protection' },
			{ label: 'Send Payment', path: '/send-payment' },
		];
	}

	// Xử lý sự kiện click để dispatch event cho React
	handleItemClick(path) {
		this.dispatchEvent(
			new CustomEvent('navigate', {
				detail: { path },
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html`
			<div class="dropdown">
				<ul class="py-2 text-sm text-black dark:text-gray-200">
					${this.items.map(
						(item) => html`
							<li>
								<a
									href="${item.path}"
									class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
									@click=${(e) => {
										e.preventDefault(); // Ngăn chuyển hướng mặc định của thẻ <a>
										this.handleItemClick(item.path);
									}}
								>
									${item.label}
								</a>
							</li>
						`
					)}
				</ul>
			</div>
		`;
	}
}

customElements.define('drop-down', Dropdown);
