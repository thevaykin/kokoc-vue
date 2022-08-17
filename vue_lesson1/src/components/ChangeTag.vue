<script>
import { liveCycle } from '@/mixins/liveCycle';

export default {
    mixins: [liveCycle],
    props: {
        tag: String,
    },
    data() {
        return {
            name: 'changeTag',
        }
    },
    render: function (createElement) {
        return createElement(this.tag, {}, 'Изменяемый тег')
    }
}
</script>