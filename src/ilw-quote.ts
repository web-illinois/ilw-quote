import {LitElement, html, unsafeCSS} from 'lit';
import { customElement, property } from "lit/decorators.js";
// @ts-ignore
import styles from "./ilw-quote.styles.css?inline";
import './ilw-quote.css';

@customElement("ilw-quote")
export default class Quote extends LitElement {
    @property()
    theme: string = '';

    @property()
    align: "left" | "right" | "center" = "center";

    @property()
    size: "small" | "medium" | "large" = "small";

    @property()
    font: "sans" | "serif" = "serif";

    @property()
    padding: string = '';

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    get paddingStyle() {
      return this.padding == '' ? 'padding: 1rem 0;' : 'padding: ' + this.padding + ';';
    }

    render() {
        return html`
            <blockquote id="quote" style="${this.paddingStyle}">
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
