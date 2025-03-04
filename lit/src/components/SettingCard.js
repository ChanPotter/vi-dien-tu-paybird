import { LitElement, html, css } from 'lit';

export class SettingCard extends LitElement {
	static properties = {
		name: { type: String },
		logo: { type: String },
	};

	static styles = css`
		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: white;
			padding: 12px;
			border-radius: 12px;
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
			transition: transform 0.2s, box-shadow 0.2s;
			cursor: pointer;
		}
		.card:hover {
			transform: scale(1.05);
			box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
		}
		img {
			width: 60px;
			height: 60px;
		}
		p {
			font-size: 17px;
			font-weight: bold;
			text-align: center;
		}
		@media (max-width: 478px) {
			/* Breakpoint sm của Tailwind */
			.card {
				min-height: 145px; /* Giảm chiều cao tối thiểu trên mobile */
				max-width: 150px; /* Giảm chiều rộng trên mobile */
			}
		}
	`;

	render() {
		return html`
			<div class="card">
				<img src="${this.logo}" alt="${this.name}" />
				<p>${this.name}</p>
			</div>
		`;
	}
}

customElements.define('setting-card', SettingCard);
