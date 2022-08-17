export default {
    install(Vue) {
        Vue.directive('color', {
            bind(el, bindings) {
                let arg = bindings.arg;
                el.style[arg] = bindings.value;
            }
        });

        Vue.directive('blur', {
            bind(el, bindings) {
                el.onblur = () => {
                    bindings.value();
                }
            }
        });

        Vue.component('ChangeTag', {
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
        });

        Vue.filter('currency', (value) => {
            return String(value) + ' руб'
        });
    }
}