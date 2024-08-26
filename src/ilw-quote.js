import { LitElement, html } from 'lit';
import styles from './ilw-quote.styles';
import './ilw-quote.css';

class Quote extends LitElement {
    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }


    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
            <blockquote id="quote">
                <div id="content"><slot name="content"></slot></div>
                <div id="source"><slot name="author"></slot><slot name="source"></slot></div>
            </blockquote>
    `;
    }
}

customElements.define('ilw-quote', Quote);