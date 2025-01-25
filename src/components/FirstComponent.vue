<!-- src/components/MyComponent.vue -->
<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'You clicked the button!';
    },
  },
};
</script>
