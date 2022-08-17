<template>
  <div id="app">
    <h2 class="message" v-color:color="'white'" v-color:background="'green'">{{ message }}</h2>
    <p class="checkTask" v-if="allTask === 0">
      Please add new task
    </p>
    <StatisticTasks v-bind:todoItems="todoItems" v-bind:complTask="completedTask" v-bind:allTask="allTask"
      v-bind:percentComplete="percentComplete"></StatisticTasks>

    <SelectTask v-bind:todoItems="todoItems" v-bind:filterAll="filterAll" v-bind:filterDone="filterDone"
      v-bind:filterInOrder="filterInOrder"></SelectTask>

    <SearchTask v-bind:todoItems="todoItems"></SearchTask>

    <ul class="todo-btns">
      <TodoItem v-for="todo in todos" v-bind:key="todo.id" v-bind:id="todo.id" v-bind:text="todo.text"
        v-bind:done="todo.done" v-bind:removeTask="removeTask" v-bind:editTask="editTask" v-bind:doneTask="doneTask">
      </TodoItem>
    </ul>

    <!-- <FormAdd
      v-bind:todoItems="todoItems"
    ></FormAdd> -->
    <form class="form-add" v-on:submit.prevent>
      <input type="text" class="form-add__input" v-model.trim="addTaskText" v-blur="checkAdding"
        placeholder="Add new task">

      <button type="submit" v-bind:disabled="addTaskText == ''" class="form-add__btn" v-on:click="addTask">
        Add
      </button>
    </form>
    <ChangeTag class=change-tag tag="button">
    </ChangeTag>
    <CurrencyFilter>
    </CurrencyFilter>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import StatisticTasks from './components/StatisticTasks.vue';
import SearchTask from './components/SearchTask.vue';
import SelectTask from './components/SelectTask.vue';
// import ChangeTag from './components/ChangeTag.vue'
import CurrencyFilter from './components/CurrencyFilter.vue';
import { liveCycle } from './mixins/liveCycle';


export default {
  name: 'App',
  mixins: [liveCycle],
  data() {
    return {
      name: 'mainComponent',
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
      editClickCheck: false,
      refresh: 0
    }
  },
  mounted() {
    if (localStorage.getItem('todoItems'))
      this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
  },
  watch: {
    todoItems: {
      handler() {
        localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
      },
      deep: true,
    },
  },
  methods: {
    doneTask(e) {
      this.todoItems.filter(todo => todo.id + 10 == e.target.id)[0].done = !this.todoItems.filter(todo => todo.id + 10 == e.target.id)[0].done;
    },

    addTask() {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.addTaskText,
        done: false
      });
      this.addTaskText = '';
      this.filterAll();
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
      this.todoItems.splice(e.target.id - 1, 1);

      //делаю перезапись id для элементов todoItems
      //т.к. они не изменяются динамически
      let counterId = 1;
      for (let todo of this.todoItems) {
        todo.id = counterId;
        counterId++;
      }
      // console.log(this.todoItems);
    },

    editTask(e) {
      this.editClickCheck = !this.editClickCheck; //нажата ли кнопка или нет
      console.log(this.editClickCheck)
      let targetElement = (e.target.parentNode).parentNode.childNodes[1];
      let editedTaskText = targetElement.childNodes[0].innerText;
      let editFormText = document.createElement('input');
      editFormText.value = editedTaskText;

      if (this.editClickCheck == true) {
        targetElement.childNodes[0].style.display = 'none';
        targetElement.appendChild(editFormText);
      }

      if (this.editClickCheck == false) {
        this.todoItems.filter((todo) => todo.id == e.target.id)[0].text = editFormText.value
        targetElement.childNodes[0].style.display = 'inline'
        if (editFormText.value == editedTaskText) {
          targetElement.childNodes[1].remove();
        }
      }

      editFormText.onblur = () => {
        this.todoItems.filter((todo) => todo.id == e.target.id)[0].text = editFormText.value
        targetElement.childNodes[0].style.display = 'inline'
        editFormText.remove();
        this.editClickCheck == false
      }

    },

    checkAdding() {
        let check = confirm('Вы уверены, что хотите добавить задачу?');
        if (check) {
          this.addTask();
        } else {
          document.querySelector('.form-add__input').value = '';
          return;
        }
    }
  },
  computed: {
    completedTask() {
      let compltask = this.todoItems.filter(doneItems => doneItems.done).length;
      return compltask;
    },
    allTask() {
      let allTask = this.todoItems.length;
      return allTask;
    },
    percentComplete() {
      let percentComplete = this.todoItems.filter(doneItems => doneItems.done).length / this.todoItems.length * 100;
      return percentComplete.toFixed(1);
    },
  },
  components: {
    SelectTask,
    TodoItem,
    // FormAdd,
    StatisticTasks,
    SearchTask,
    // ChangeTag,
    CurrencyFilter
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
  width: 20%;
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

.change-tag {
  margin: 20px;
}
</style>
