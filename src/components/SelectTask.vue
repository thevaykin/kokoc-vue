<template>
    <div>
        <input type="radio" id="all" value="all" v-model="picked">
        <label for="all">All</label>
    </div>
    <div>
        <input type="radio" id="done" value="done" v-model="picked">
        <label for="done">Done</label>
    </div>
    <div>
        <input type="radio" id="inOrder" value="inOrder" v-model="picked">
        <label for="inOrder">In Order</label>
    </div>
</template>

<script>

export default {
    props: ["todoItems"],

}
</script>

<style scoped>
.searchTask {
    margin-left: 20px;
}

.showTask {
    margin-left: 20px;
    padding: 0;
}

.showTask__item {
    list-style: none;
}
</style>
