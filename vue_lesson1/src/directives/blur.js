export default {
    bind(el, bindings) {
        el.onblur = () => {
            bindings.value();
        }
    }
}