export default {
    bind(el, bindings) {
        let arg = bindings.arg;
        el.style[arg] = bindings.value;
    }
}