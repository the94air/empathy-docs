---
title: Notifications component
layout: page
---

# Notifications component
1. First we need to use `vue-notification` package in our `app.js`:
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import Notifications from 'vue-notification';

// ...

Vue.use(Notifications);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

2. In our `Main.vue` component we add our new the notification template:
```javascript
<template>
    <div class="container mx-auto px-4">
        <Slideout menu="#sidebar" panel="#content">
            <div class="container">
                <div class="flex -mx-4 md:-mx-3">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </Slideout>
        <notifications group="notifications" position="bottom right" width="320px">
            <template slot="body" slot-scope="props">
                <div class="flex justify-between items-center bg-black text-white rounded shadow-lg px-6 pt-2 pb-2 mb-3">
                    <p class="leading-tight" v-html="props.item.text"></p>
                    <button class="inline-block bg-transparent underline font-semibold text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 focus:outline-none leading-tight select-none align-middle whitespace-no-wrap py-2 cursor-pointer ml-4" @click="props.close">
                        Close
                    </button>
                </div>
            </template>
        </notifications>
    </div>
</template>
```

3. To show a notification you can use `$notify`. visit the [docs](https://www.npmjs.com/package/vue-notification) to learn more:
```javascript
<script>
    export default {
        methods: {
            showNotification() {
                this.$notify({
                    group: 'notifications',
                    text: 'Your new post has been created.',
                    duration: 5000,
                });
            }
        }
    }
</script>
```