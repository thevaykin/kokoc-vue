<template>
  <div id="app">
    {{message}}
    <ul class="todo-btns">
      <TodoItem
        v-for="todo in todoItems"
        v-bind:key="todo.id"
        v-bind:id="todo.id"
        v-bind:text="todo.text"
        v-bind:done="todo.done"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  data() {
    return {
      message: 'Hello from Vue App',
      todoItems: [
        { id: 1, text: 'task 1', done: false },
        { id: 2, text: 'task 2', done: false },
        { id: 3, text: 'task 3', done: true },
        { id: 4, text: 'task 4', done: false },
        { id: 5, text: 'task 5', done: false },
      ],
    }
  },
  components: {
    TodoItem
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}

.todo-btns {
  padding: 0;
}
</style>
