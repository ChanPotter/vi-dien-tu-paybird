import { LitElement, html, css } from 'lit';

export class CustomerCodeInput extends LitElement {
	static styles = css`
		.container {
			font-family: Arial, sans-serif;
		}

		.title {
			font-size: 1.2rem;
			font-weight: bold;
			color: #333;
			margin-bottom: 10px;
		}

		.input-field {
			width: 100%;
			max-width: 450px;
			max-width: 360px;
			padding: 15px;
			font-size: 1rem;
			border: 1px solid #e7e6e6;
			border-radius: 16px;
			outline: none;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			color: #666;
			margin-bottom: 15px;
		}

		.input-field::placeholder {
			color: #999;
		}

		.input-field:focus {
			border-color: #007bff;
		}
	`;

	render() {
		return html`
			<div class="container">
				<div class="title">Nhập mã để tìm kiếm hóa đơn của bạn</div>
				<input class="input-field" type="text" placeholder="Mã khách hàng" />
			</div>
		`;
	}
}

customElements.define('customer-code-input', CustomerCodeInput);
