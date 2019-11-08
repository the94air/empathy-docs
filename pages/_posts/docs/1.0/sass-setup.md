---
title: SASS setup
layout: page
---

# SASS setup
1. The first step is to import the empathy SASS files and make a new file for base styling. We had to do so because there are some limitations in CSS when it comes to inline styling pseudo-elements and active classes...etc. If you want to customize these styles you have to import them or [copy](https://github.com/the94air/empathy/blob/master/src/sass/empathy.scss) them to your project. Empathy will never get in the way!
```scss
@tailwind base;

@tailwind components;

// https://github.com/the94air/empathy/blob/master/src/sass/empathy.scss
@import '~@codolog/empathy/src/sass/empathy';

@import './base';

@tailwind utilities;
```

3. `base.scss` file should contain:

```scss
html {
    @apply text-gray-800;
}

body {
    @apply bg-gray-100 w-full h-full;
}

::selection {
    @apply bg-gray-400;
    text-shadow: none;
}

h1, h2, h3, h4, h5, h6 {
    @apply mb-2;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

a {
    @apply text-blue-500;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    transition: color ease 150ms;
}

a:hover {
    @apply text-blue-600;
    text-decoration: none;
}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
    outline: 0;
}

hr {
    @apply my-4 border-gray-300;
}
```