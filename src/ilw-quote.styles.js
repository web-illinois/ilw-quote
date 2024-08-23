import { css } from 'lit';

export default css`
  :host {
    display: block;
    background: var(--ilw-quote--background);
  }

  #quote {
    margin: 0 auto;
    max-width: var(--ilw-quote--max-width);
    padding: 50px 80px;
  }

  #content {
    color: var(--ilw-quote--color);
    font: var(--ilw-quote--font);
    text-align: center;
  }

  #content {
    position: relative;
  }

  #content::before {
    position: absolute;
    content: var(--ilw-quote--mark-content-before);
    font-style: normal;
    color: var(--ilw-quote--mark-color);
    font: var(--ilw-quote--mark-font);
    top: var(--ilw-quote--mark-top);
    left: var(--ilw-quote--mark-left);
  }

  #content::after {
    position: absolute;
    content: var(--ilw-quote--mark-content-after);
    font-style: normal;
    bottom: 0px;
    color: var(--ilw-quote--mark-color);
    font: var(--ilw-quote--mark-font);
    right: var(--ilw-quote--mark-left);
`;