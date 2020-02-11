# Week 1, Day 2 Review - HTML & CSS 1

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/html-css-1
- Slides: https://slides.com/matias_perez/html-css-one#/

## Important Concepts to Review

1. Useful Extensions in Chrome and VSCode
2. Review of HTML Concepts
   - What is HTML?
   - HTML Elements
   - Semantic HTML
   - Boilerplate HTML doc review (doctype, html, head, body, meta, title, link, etc.)
   - HTML attributes
   - HTML Element Relationships
3. Review of CSS Concepts
   - What is CSS?
   - Writing CSS (inline, internal, external)
   - CSS Selectors
   - CSS Pseudo Classes
   - CSS Specificity
   - Connecting HTML and CSS with the Box Model
   - Box Sizing
   - CSS Display Properties
   - Float

## Review useful shortcuts, settings, and extensions:

1. Change autosave settings in VSCode
2. VSCode extensions

   - [Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
   - [Auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [Color highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
   - [AutoFileName](https://marketplace.visualstudio.com/items?itemName=JerryHong.autofilename)
   - [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
     OR [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
   - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
   - [Javascript (ES6) Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
   - [Markdown Preview GitHub Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)
   - [Open in Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
   - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
   - Themes - ex: Theme-TinaciousDesign or Popping and Locking Theme
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Be careful that you don't get too lazy and rely heavily on this!

3. Browser extensions
   - [Eye dropper](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en)
   - [Whatfont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en)
   - [Video Speed Controller](https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en)

## HTML Review

1. What is HTML?

   - HTML stands for Hyper Text Markup Language and is used to create the STRUCTURE of web applications

2. What is a tag or an element in html?
   - A piece of the website. If your website is a house, a tag might be a wall, or a floorboard, or a rafter.
   - What are some of the most common tags that we'll use?
     - `head`
     - `body`
     - `p`
     - `div`
     - `h1`
     - `header`
   - What are some self-closing (void) tags that we know?
     - `img`
     - `br`
3. What are semantic tags and what are their purpose?
   - Tags that specify the type of content the tag contains. Examples include: `section`, `header`, `h1`, and even `p`.
   - They serve 3 primary purposes: Readability of code, accessibility of your site, and SEO

> Type `! tab` to create boilerplate html document

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

4. What is the purpose of `DOCTYPE`?

   - Tell the browser what type of document to expect.

5. What goes in the `head` tag?
   - Information about our website.
   - What elements are we familiar with in the head tag?
     1. `meta`
        - For metadata about the website including description, author, keywords and more
     2. `title`
        - What displays in the title bar.
     3. `link`
        - Brings in outside resources, usually a stylesheet.
6. What goes in the `body` tag?

   - Whatever we want to show up on the screen. Anything in the `head` tag will not be shown.

7. What are HTML attributes?

   - HTML attributes allow you to add more information to an element. Examples include class, href, src, alt, style, id, etc.

8. Discuss Parent, Sibings and Children element relationships
   - Elements can be parent elements (contain other elements inside of it), sibling elements (next to other elements), and children elements (contained within other elements) all at the same time

## CSS Review

1. What is CSS and how is it used?

   - CSS stands for Cascading Style Sheet and is a presentational language used only for styling and layout of HTML elements

2. How do you write and connect CSS to HTML?

   - Discuss the difference between inline, internal (imported using style tag) and external (CSS file imported using link) CSS code

3. What are CSS Selectors and what are some common examples?

   - element name
   - `.` - id
   - `#` - class
   - `*` - Universal selector, selects all elements
   - `,` - Group combinator - combines selectors into one block
   - `` - Descendant Combinator
   - `>` - Child Combinator - direct children of an element
   - `+` - Adjacent Sibling Combinator
   - `~` - General Sibling Combinator

4. What are Pseudo classes?

   - Pseudo classes are keywords that can be added to selectors to specify a special state of the selected elements

5. What do we mean when we talk about CSS Specificity?

   - This is the score used to determine what CSS styling to implement when there are multiple contradicting style affecting an element. This scoring is based on how styling is applied (from lowest score to highest score element, class, id, inline)

6. Connecting HTML & CSS and the Box Model

![Box model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

7. Discuss box sizing properties and their importance - highlight border-box

8. Discuss height and width units in CSS and the pros / cons of each

   - px, %, vh, vw

9. Discuss display properties and how those affect CSS layout

10. Discuss float and how it is used

    - Float places an element to the right or left of its container and allows INLINE elements to wrap around it
