<template>
  <li class="todoItem">
    <button 
      class="todoItem__btn" 
      v-bind:class="done ? 'btn-success' : 'btn-secondary'"
      v-bind:id="id+10"
      @click="doneTask"
    >
    {{this.done ? "completed" : "in order"}}
    </button>
    <span class="task-number">
      <span v-text="text"></span>
    </span>
    <div class="todoItem__btn-editing">
      <button class="todoItem__btn-remove btn-info" v-bind:id="id" @click="removeTask">Remove</button>
      <button class="todoItem__btn-edit btn-info" v-bind:id="id" @click="editTask">Edit</button>
    </div>
  </li>
</template>

<script>
import { liveCycle } from '@/mixins/liveCycle';


export default {
  mixins: [liveCycle],
  props: ["id", "text", "done", "removeTask", "editTask", "doneTask"],
  data() {
    return {
      name: 'todoItems', 
    }
  }
}
</script>

<style scoped>
li {
  margin: 0 10px 5px;
  border: 1px solid #000;
}

.todoItem__btn {
  margin: 10px;
  border: 0;
  border-radius: 3px;
  padding: 10px;
}

.todoItem__btn-editing{
  margin: 0 10px 10px;
  display: flex;
  gap: 10px;
}

.todoItem__btn-remove, .todoItem__btn-edit{
  border-radius: 5px;
}
</style>
