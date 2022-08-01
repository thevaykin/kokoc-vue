<template>
    <div>
        <input type="search" class="searchTask" v-model="searchText">
        <ul class="showTask">
            <li class="showTask__item"
            >{{searching()}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ["todoItems"],
    data() {
        return {
            searchText: 'task 1'
        }
    },
    methods: {
        searching() {
            return this.todoItems.filter((task) => {
                return task.text.toLowerCase().includes(this.searchText.toLowerCase());
            });
        }
    },
}
</script>

<style scoped>
.searchTask {
    margin-left: 20px;
}

.showTask{
    margin-left: 20px;
    padding: 0;
}

.showTask__item {
    list-style: none;
}
</style>
