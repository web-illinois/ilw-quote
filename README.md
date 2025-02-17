# ilw-quote

Links: **[ilw-quote in Builder](https://builder3.toolkit.illinois.edu/component/ilw-quote/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This component represents a quote or testimonial, with optional attribution of author and source. The quote or testimonial is intended to be intermixed with copy and the quote is highlighted and called out.

An open quotation mark is added automatically before the quote.

This component should not contain a heading element.

The quote should be contained within a paragraph element with the slot attribute set to "content". The author should be contained within a paragraph element with the slot attribute set to "author". The source should be contained within a cite element with the slot attribute set to "source".

The following attributes can be used to control the display of the quote:

- `font="sans"` will display the quote text with a sans-serif font.
- `size="medium"` and `size="large"` will increase the font sizes and spacing.
- `align="left"` and `align="right"` will align the text left or right, respectively. The default alignment is `center`. Note that right-aligned text should be used sparingly for better accessibility.

## Code Examples

```html
<ilw-quote>
    <p slot="content">Either university presses will embrace new technology and offer scholarly content in new forms
        to researchers and under new business models, or they will follow the music industry and spend
        all of their resources on trying to protect their territory &mdash; unsuccessfully.</p>
    <p slot="author">Laura Cerruti</p>
    <cite slot="source">Director of Digital Content Development, University of California Press, profiled in Against the Grain</cite>
</ilw-quote>
```

## Upgrade Process
* Rename `il-quote` to `ilw-quote`
* For the content, place it inside a `p` tag with a slot attribute `slot="content"`
* for the author, change `slot="attributed"` to `slot="author"`
* for the source, change `p` tag to `cite` tag and change `slot="secondary"` to `slot="source"`

## External References

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

https://theadminbar.com/accessibility-weekly/coding-blockquotes/