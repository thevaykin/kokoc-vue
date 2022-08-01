<template>
  <li class="todoItem">
    <button 
      class="todoItem__btn" 
      v-bind:class="done ? 'btn-success' : 'btn-secondary'"
    >
    {{this.done ? "completed" : "in order"}}
    </button>
    <span class="task-number" v-text="text"></span>
  </li>
</template>

<script>

export default {
  props: {
    id: Number,
    text: String,
    done: Boolean,
  },
}
</script>

<style scoped>
li {
  margin: 0 10px;
}

.todoItem__btn {
  margin: 10px;
  border: 0;
  border-radius: 3px;
  padding: 10px;
}
</style>
