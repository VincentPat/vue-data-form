<template>
    <div class="vdf-input">
        <el-input
            v-model="value"
            @blur="blur"></el-input>
    </div>
</template>

<script>
import vdfEventBus from '../vdf-event-bus';

export default {
    name: 'vdf-input',
    props: {
        config: {
            type: Object
        }
    },
    data() {
        return {
            value: this.config.dist.value
        };
    },
    methods: {
        blur() {
            this.$emit('change', {
                id: this.config.id,
                value: this.value,
                property: 'value'
            });
        }
    },
    mounted() {
        vdfEventBus.$on(`reset-${this.config.id}`, (data) => {
            this.value = data.value;
        });
    }
};
</script>

<style lang="scss">
.vdf-input {}    
</style>
