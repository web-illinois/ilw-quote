import {LitElement, html, unsafeCSS} from 'lit';
import { customElement, property, query, queryAll } from "lit/decorators.js";
// @ts-ignore
import styles from "./ilw-quote.styles.css?inline";
import './ilw-quote.css';

@customElement("ilw-quote")
export default class Quote extends LitElement {
    @property()
    theme: string = '';

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
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

declare global {
    interface HTMLElementTagNameMap {
        "ilw-quote": Quote;
    }
}
