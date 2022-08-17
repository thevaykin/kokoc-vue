<script>
export default {
    props: {
        tag: String,
    },
    render: function (createElement) {
        return createElement(this.tag, {}, 'Изменяемый тег')
    }
}
</script>