# HTML & CSS 1 morning review

## Review useful shortcuts, settings, and extensions:

1. Change autosave settings in VSCode
2. `! tab` to create boilerplate html document
3. Extensions
   1. [Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
   2. [Auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   3. [Color highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body></body>
</html>
```

### Review HTML boilerplate.

1. What is the purpose of `DOCTYPE`?
   - Tell the browser what type of document to expect.
2. What is a tag or an element in html?
   - A piece of the website. If you website is a house, a tag might be a wall, or a floorboard, or a rafter.
   1. What are some of the most common tags that we'll use?
      - `head`
      - `body`
      - `p`
      - `div`
      - `h1`
      - `header`
3. What are semantic tags and what are their purpose?

   - Tags that specify the type of content the tag contains. Examples include: `section`, `header`, `h1`, and even `p`.
   - They serve 3 primary purposes: Readability of code, accessibility of your site, and SEO

4. What goes in the `head` tag?
   - Information about our website.
5. What elements are we familiar with in the head tag?
   1. `meta`
      - For metadata about the website.
   2. `title`
      - What displays in the title bar.
   3. `link`
      - Brings in outside resources, usually a stylesheet.
6. What goes in the `body` tag?
   - Whatever we want to show up on the screen. Anything in the `head` tag will not be shown.
