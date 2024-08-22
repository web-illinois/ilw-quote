# ilw-quote

Links: **[ilw-quote in Builder](https://builder3.toolkit.illinois.edu/component/ilw-quote/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This component represents a quote or testimontial, with optional attribution of author and source. The quote or testimonial is intended to be intermixed with copy and the quote is highlighted and called out.

Quotation marks are added automatically before and after the quote.

This component should not contain a heading element.

The quote should be contained within a paragraph element. The author should be contained within a paragraph elements with the slot attribute set to "author". The source should be contained within a cite element with the slot attribute set to "source".

## Code Examples

```html
<ilw-quote>
    <p>Either university presses will embrace new technology and offer scholarly content in new forms
        to researchers and under new business models, or they will follow the music industry and spend
        all of their resources on trying to protect their territory &mdash; unsuccessfully.</p>
    <p slot="author">Laura Cerruti</p>
    <cite slot="source">Director of Digital Content Development, University of California Press, profiled in Against the Grain</cite>
</ilw-quote>
```

## External References

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

https://theadminbar.com/accessibility-weekly/coding-blockquotes/