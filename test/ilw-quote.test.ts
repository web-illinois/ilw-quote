import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-quote";

const content = html`
<ilw-quote>
    <p slot="content">Content</p>
    <p slot="author">Author</p>
    <cite slot="source">Source</cite>
</ilw-quote>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Content");
    await expect.element(element).toBeInTheDocument();
    const author = screen.getByText("Author");
    await expect.element(author).toBeInTheDocument();
    const source = screen.getByText("Source");
    await expect.element(source).toBeInTheDocument();
});