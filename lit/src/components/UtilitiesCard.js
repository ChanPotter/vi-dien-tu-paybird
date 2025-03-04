import { LitElement, html, css } from 'lit';

export class UtilitiesCard extends LitElement {
	static properties = {
		item: { type: Object },
		index: { type: Number },
	};

	static styles = css`
		.flex {
			display: flex;
		}
		.flex-col {
			flex-direction: column;
		}
		.items-center {
			align-items: center;
			cursor: pointer;
		}
		.bg-gray-200 {
			background-color: #e5e7eb;
		}
		.p-4 {
			padding: 1rem;
		}
		.rounded-full {
			border-radius: 9999px;
		}
		.shadow-md {
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
				0 2px 4px -1px rgba(0, 0, 0, 0.06);
		}
		.w-16 {
			width: 4rem;
		}
		.h-16 {
			height: 4rem;
		}
		.mt-2 {
			margin-top: 0.5rem;
		}
		.text-lg {
			font-size: 1.125rem;
		}
		.font-sans {
			font-family: sans-serif;
		}
		.text-center {
			text-align: center;
		}
	`;

	render() {
		return html`
			<div class="flex flex-col items-center">
				<div class="bg-gray-200 p-4 rounded-full shadow-md">
					<img src=${this.item.icon} alt=${this.item.name} class="w-16 h-16" />
				</div>
				<p class="mt-2 text-lg font-sans text-center">${this.item.name}</p>
			</div>
		`;
	}
}

customElements.define('utilities-card', UtilitiesCard);
