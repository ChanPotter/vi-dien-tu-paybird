import { html, css, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'; // Import unsafeHTML để render HTML từ string

export class ServiceCard extends LitElement {
	static properties = {
		title: { type: String },
		description: { type: String },
		icon: { type: String }, // Sử dụng String thay vì React component
		bgColor: { type: String },
	};

	constructor() {
		super();
		this.bgColor = '#3b82f6'; // Màu xanh dương mặc định
		this.icon = ''; // Khởi tạo icon là string rỗng
	}

	static styles = css`
		.card {
			padding: 1.5rem;
			border-radius: 0.5rem;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			background-color: white;
			transition: box-shadow 0.3s ease;
			cursor: pointer;
		}

		.card:hover {
			box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
		}

		.icon-container {
			width: 5rem;
			height: 5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9999px;
			margin: 0 auto 1rem;
			border: 2px solid #ffffff;
		}

		.icon {
			font-size: 2.5rem;
			color: white;
			padding-top: 0.4rem;
		}

		.title {
			font-size: 1.25rem;
			font-weight: 600;
			margin-bottom: 0.5rem;
			color: #2d3748;
			text-align: center;
		}

		.description {
			color: #718096;
			text-align: center;
		}
	`;

	render() {
		return html`
			<div class="card">
				<div class="icon-container" style="background-color: ${this.bgColor}">
					<!-- Render icon từ string HTML -->
					<div class="icon">${unsafeHTML(this.icon)}</div>
				</div>
				<h2 class="title">${this.title}</h2>
				<p class="description">${this.description}</p>
			</div>
		`;
	}
}

customElements.define('service-card', ServiceCard);
