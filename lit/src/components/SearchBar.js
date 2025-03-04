import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
export class SearchBar extends LitElement {
	static styles = css`
		:host {
			display: block;
			width: 100%;
			max-width: 400px;
		}

		.search-container {
			position: relative;
		}

		.search-input {
			width: 100%;
			padding: 12px 40px 12px 12px;
			font-size: 14px;
			border: 1px solid #d1d5db;
			border-radius: 8px;
			background-color: #f9fafb;
			color: #1f2937;
			outline: none;
		}

		.search-input:focus {
			border-color: #3b82f6;
			box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
		}

		.search-icon {
			position: absolute;
			left: 12px;
			top: 50%;
			transform: translateY(-50%);
			color: #6b7280;
		}

		.search-button {
			position: absolute;
			right: 10px;
			bottom: 8px;
			background-color: #1d4ed8;
			color: white;
			border: none;
			padding: 6px 12px;
			border-radius: 6px;
			cursor: pointer;
			font-size: 14px;
		}

		.search-button:hover {
			background-color: #1e40af;
		}
	`;

	render() {
		return html`
			<form class="search-container">
				<span class="search-icon">🔍</span>
				<input
					type="search"
					class="search-input"
					placeholder="Search events..."
				/>
				<button type="submit" class="search-button">Search</button>
			</form>
		`;
	}
}
