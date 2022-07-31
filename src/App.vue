<template>
  <div id="app">
    {{ message }}
    <ul class="todo-btns">
      <TodoItem 
        v-for="todo in todoItems" 
        v-bind:key="todo.id" 
        v-bind:id="todo.id" 
        v-bind:text="todo.text"
        v-bind:done="todo.done"
      ></TodoItem>
    </ul>

    <!-- <FormAdd
      v-bind:todoItems="todoItems"
    ></FormAdd> -->
    <form class="form-add" 
      v-on:submit.prevent
    >
        <input 
        type="text" 
        class="form-add__input"
        v-model.trim="addTaskText" 
        placeholder="Add new task"
      >

      <button 
        type="submit" 
        v-bind:disabled="addTaskText==''"
        class="form-add__btn" 
        v-on:click="addTask"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
// import FormAdd from './components/FormAdd.vue';

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
      addTaskText: ""
    }
  },
  methods: {
    addTask() {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.addTaskText,
        done: false
      });
    }
  },
  components: {
    TodoItem,
    // FormAdd
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

.form-add__input {
  margin-left: 20px;
}
</style>
