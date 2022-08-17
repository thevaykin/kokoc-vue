<template>
    <div>
        <button @click="filterAll" class="btn-warning" id="active" v-bind:clicked="clicked()" @load="clicked">
            All
        </button>

        <button @click="filterDone" class="btn-warning">
            Done
        </button>

        <button @click="filterInOrder" class="btn-warning">
            InOrder
        </button>
    </div>
</template>

<script>
import { liveCycle } from '@/mixins/liveCycle';


export default {
    mixins: [liveCycle],
    props: ['filterAll', 'filterDone', 'filterInOrder'],
    data() {
        return {
            name: 'selectTask',
        }
    },
    methods: {
        clicked() {
            document.addEventListener("DOMContentLoaded", () => {
                document.getElementById('active').click()
            });
        }
    }

}
</script>

<style scoped>
button {
    margin-left: 20px;
    margin-bottom: 20px;
    margin-right: 5px;
}
</style>
