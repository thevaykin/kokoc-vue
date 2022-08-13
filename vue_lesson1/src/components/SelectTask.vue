<template>
    <div>
        <input type="radio" ref="all" id="all" name="filter" value="all" @click="filterAll" checked>
        <label for="all">All</label>

        <input type="radio" ref="done" id="done" name="filter" value="done" @click="filterDone">
        <label for="done">Done</label>

        <input type="radio" ref="inOrder" id="inOrder" name="filter" value="inOrder" @click="filterInOrder">
        <label for="inOrder">In Order</label>

    </div>
</template>

<script>

export default {
    props: ["todoItems", "filterAll", "filterDone", "filterInOrder"],
    data() {
        return {
            picked: ""
        }
    },
    methods: {
        
    }

}
</script>

<style scoped>
input {
    margin-left: 20px;
    margin-bottom: 20px;
    margin-right: 5px;
}
</style>
