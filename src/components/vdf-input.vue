<template>
    <div class="vdf-input">
        <el-input
            v-model="value"
            @focus="focus"
            @blur="blur"></el-input>
    </div>
</template>

<script>
export default {
    name: 'vdf-input',
    props: {
        config: {
            type: Object
        }
    },
    data() {
        return {
            value: this.config.value
        };
    },
    methods: {
        focus() {
            this.$emit('focus', {
                id: this.config.id
            });
        },
        blur() {
            this.$emit('blur', {
                id: this.config.id
            });            
            this.$emit('change', Object.assign({}, this.config, {
                value: this.value
            }));
        }
    },
    watch: {
        config: {
            handler() {
                this.value = this.config.value;
            },
            deep: true
        }
    }
};
</script>
