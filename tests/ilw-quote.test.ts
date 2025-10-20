import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-quote";

const content = html`
    <ilw-quote>
        <p slot="content">Either university presses will embrace new technology and offer scholarly content in new forms
            to researchers and under new business models, or they will follow the music industry and spend
            all of their resources on trying to protect their territory &mdash; unsuccessfully.</p>
        <p slot="author">Laura Cerruti</p>
        <cite slot="source">Director of Digital Content Development, University of California Press, profiled in Against the Grain</cite>
    </ilw-quote>

`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Either university presses");
    await expect.element(element).toBeInTheDocument();
});

test("renders slotted author", async () => {
    const screen = render(content);
    const element = screen.getByText("Laura Cerruti");
    await expect.element(element).toBeInTheDocument();
});

test("renders slotted source", async () => {
    const screen = render(content);
    const element = screen.getByText("Director of Digital");
    await expect.element(element).toBeInTheDocument();
});
