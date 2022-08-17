<template>
    <div>
        <input type="number" v-model.trim="number">
        <p>{{ number | currency }}</p>
    </div>
</template>

<script>
import { liveCycle } from '@/mixins/liveCycle';

    export default {
        mixins: [liveCycle],
        data() {
            return {
                name: 'currencyFilter',
                number: 10000,
            }
        },
        filters: {
            currency(value) {
                return String(value) + ' руб'
            }
        }
    }
</script>
<style scoped>

div {
    margin-left: 20px;
}
</style>