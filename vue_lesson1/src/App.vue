<template>
  <div id="app">
    <p class="message">{{ message }}</p>
    <p 
    class="checkTask" 
    v-if="allTask === 0"
    >
    Please add new task
    </p>
    <StatisticTasks
      v-bind:todoItems="todoItems"
      v-bind:complTask="completedTask"
      v-bind:allTask="allTask"
      v-bind:percentComplete="percentComplete"
    ></StatisticTasks>

    <SelectTask
      v-bind:todoItems="todoItems"
      v-bind:filterAll="filterAll"
      v-bind:filterDone="filterDone"
      v-bind:filterInOrder="filterInOrder"
    ></SelectTask>

    <SearchTask
      v-bind:todoItems="todoItems"
    ></SearchTask>

    <ul class="todo-btns">
      <TodoItem 
        v-for="todo in todos" 
        v-bind:key="todo.id" 
        v-bind:id="todo.id" 
        v-bind:text="todo.text"
        v-bind:done="todo.done"
        v-bind:removeTask="removeTask"
        v-bind:editTask="editTask"
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
import StatisticTasks from './components/StatisticTasks.vue';
import SearchTask from './components/SearchTask.vue';
import SelectTask from './components/SelectTask.vue';


export default {
  name: 'App',
  data() {
    return {
      message: 'Hello from Vue App',
      todoItems: [
        // { id: 1, text: 'task 1', done: false },
        // { id: 2, text: 'task 2', done: false },
        // { id: 3, text: 'task 3', done: true },
        // { id: 4, text: 'task 4', done: false },
        // { id: 5, text: 'task 5', done: false },
      ],
      todos: [],
      addTaskText: "",
      refreshToken: 1,
      editClickCheck: false,
    }
  },
  methods: {
    addTask() {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.addTaskText,
        done: false
      });
    },
    filterAll() {
      this.todos = [];
      for (let todo of this.todoItems) {
        // console.log(todo);
        this.todos.push(todo);
      }
    },

    filterDone() {
      this.todos = [];
      for (let todo of this.todoItems) {
        if (todo.done) {
          // console.log(todo);
        this.todos.push(todo);
        }
      }
    },

    filterInOrder() {
      this.todos = [];
      for (let todo of this.todoItems) {
        if (!todo.done) {
          // console.log(todo);
        this.todos.push(todo);
        }
      }
    },

    removeTask(e) {
      // console.log(this.todoItems);
      (e.target.parentNode).parentNode.remove();
      this.todoItems.splice(e.target.id-1, 1);

      //делаю перезапись id для элементов todoItems
      //т.к. они не изменяются динамически
      let counterId = 1;
      for(let todo of this.todoItems) {
        todo.id = counterId;
        counterId++;
      }
      // console.log(this.todoItems);
    },

    editTask(e) {
      this.editClickCheck = !this.editClickCheck; //нажата ли кнопка или нет
      let targetElement = (e.target.parentNode).parentNode.childNodes[1];
      let editedTaskText = targetElement.innerText;
      let editFormText = document.createElement('input');
      editFormText.value = editedTaskText;
      targetElement.innerText = '';
      targetElement.appendChild(editFormText);

      editFormText.onblur = () => {
        targetElement.innerText = editFormText.value;
      }

      if (!this.editClickCheck) {
        targetElement.innerText = editFormText.value;
      }
    }
  },
  computed: {
    completedTask() {
      let compltask = this.todoItems.filter(doneItems=> doneItems.done).length;
      return compltask;
    },
    allTask() {
      let allTask = this.todoItems.length;
      return allTask;
    },
    percentComplete() {
      let percentComplete = this.todoItems.filter(doneItems=> doneItems.done).length/this.todoItems.length*100;
      return percentComplete.toFixed(1);
    },
  },
  components: {
    SelectTask,
    TodoItem,
    // FormAdd,
    StatisticTasks,
    SearchTask,
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

.message {
  margin-left: 20px;
}

.todo-btns {
  padding: 0;
}

.form-add__input {
  margin-left: 20px;
}

.checkTask {
  margin-left: 20px;
}
</style>
