<template>
    <el-row class="vdf-block">
        <el-col
            :span="labelWidth"
            class="vdf-block__name">{{ config.name }}</el-col>
        <el-col
            :span="contentWidth"
            class="vdf-block__content">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'vdf-block',
    props: {
        config: {
            type: Object
        },
        labelWidth: {
            type: Number,
            default: 4
        }
    },
    computed: {
        contentWidth() {
            return 24 - this.labelWidth;
        }
    }
};
</script>
