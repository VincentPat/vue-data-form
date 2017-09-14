import input from './components/vdf-input.vue';
import block from './components/vdf-block.vue';

export default {
    name: 'vdf-element',
    components: {
        'vdf-block': block,
        'vdf-input': input
    },
    methods: {
        change(data) {
            this.$emit('change', data);
        },
        focus(data) {
            this.$emit('focus', data);
        },
        blur(data) {
            this.$emit('blur', data);
        }
    },
    props: {
        config: {
            type: Object
        },
        labelWidth: {
            type: Number,
            default: 4
        }
    },
    render: function render(h) {
        const elementNode = h(`vdf-${this.config.type}`, {
            on: {
                change: this.change,
                focus: this.focus,
                blur: this.blur
            },
            props: { config: this.config }
        });
        return h('vdf-block', {
            props: {
                config: this.config,
                labelWidth: this.labelWidth
            },
            scopedSlots: {
                default: () => elementNode
            }
        });
    }
};
