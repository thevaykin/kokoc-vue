<template>
    <form class="form-add">
        <input type="text" class="form-add__input" v-model="addTaskText">

        <button type="submit" class="form-add__btn" v-on:submit="addTask">
            Add
        </button>
    </form>
</template>

<script>

export default {
    props: {
        todoItems: Array
    },
    data() {
        return {
            addTaskText: ""
        }
    },
    // methods: {
    //     addTask() {
    //         this.todoItems.push({
    //             id: this.todoItems.length + 1,
    //             text: this.addTaskText,
    //             done: false
    //         });
    //     }
    // }

}
</script>

<style scoped>
</style>
