<template>
    <div 
        class="statistics"
    >
        <p
            class="statistics__completed"

        >
            Completed tasks {{complTask}}
        </p>
        <p
            class="statistics__all"    
        >
            all tasks {{allTask}}
        </p>
        <p
            class="statistics__percent"
        >
            Percent complete taskslist {{percentComplete}}%
        </p>
    </div>
</template>

<script>

export default {
    props: ["todoItems", "complTask", "allTask", "percentComplete"]
    // {
    //     todoItems: Array,
    //     complTask: Number,
    //     allTask: Number,
    //     percentComplete: Number

    // }
}
</script>

<style scoped>
.statistics {
    display: flex;
    gap: 10px;
    margin-left: 20px;
}

.statistics__completed, .statistics__all, .statistics__percent{
    background: rgb(22, 117, 226);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}
</style>
