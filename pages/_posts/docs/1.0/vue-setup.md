---
title: Vue setup
layout: page
---

# Vue setup
1. Next, you will need to add Vue root mount element to your HTML markup:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>title</title>
    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>

    <div id="app"></div>

    <script type="text/javascript" src="javascript/app.js"></script>
</body>
</html>
```
2. Then, we need to configure Vue in our JavaScript to mount the element:
```javascript
import Vue from 'vue';
import App from './App';

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```
3. in your `App.vue` file:
```javascript
<template>
    <div class="h-full">
        <!-- later on, we will add the main page components. -->
        <!-- <Navbar /> -->
        <!-- <Main /> -->
        <!-- <Footer /> -->
    </div>
</template>
```