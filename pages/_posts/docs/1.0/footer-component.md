---
title: Footer component
layout: page
---

# Footer component
1. To make a footer use this component:
```javascript
<template>
    <footer class="py-6">
        <div class="container mx-auto px-4">
            &copy; Empathy {{ date }}
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear()
            }
        }
    }
</script>
```

2. The footer might not show if you didn't add the panel compoent because of the fixed navbar. You can add a `margin-bottom` the body element to make it visible.

3. And now we have a complete lightweight responsive admin panel.