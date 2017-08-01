<template>
    <div class="vdf-input">
        <el-input
            v-model="value"
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
    watch: {
        config: {
            handler: function(value) {
                this.value = this.config.dist.value;
            },
            deep: true
        }
    }
};
</script>
