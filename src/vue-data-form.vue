<template>
    <div class="vdf" :id="id">
        <!-- 标题 -->
        <div class="vdf__title">
            <template v-if="title">
                <div>{{ title }}</div>
            </template>
            <template v-else>
                <slot name="title"></slot>
            </template>
        </div>
        <!-- 内容 -->
        <div class="vdf__content">
            <vdf-element
                v-for="(element, index) in elements"
                @change="change"
                :labelWidth="labelWidth"
                :key="index"
                :config="element"></vdf-element>
        </div>
        <!-- 动作 -->
        <div class="vdf__actions">
            <el-button
                type="primary"
                @click="save">保存</el-button>
            <!-- <el-button
                @click="reset">重置</el-button> -->
        </div>
    </div>
</template>

<script>
import vdfElement from './vue-data-form-element';

export default {
    name: 'vdf',
    components: {
        'vdf-element': vdfElement
    },
    props: {
        id: {
            type: String
        },
        title: {
            type: String
        },
        labelWidth: {
            type: Number,
            default: 4
        },
        elements: {
            type: Array
        }
    },
    data() {
        return {
            dist: {},
            initialDist: {}
        };
    },
    methods: {
        change(data) {
            this.dist[data.id][data.property] = data.value;
        },
        setDist() {
            this.elements.forEach((element) => {
                this.dist[element.id] = element.dist;
            });
            this.elements.forEach((element) => {
                this.initialDist[element.id] = Object.assign({}, element.dist);
            });
        },
        save() {
            const result = JSON.stringify(this.dist);
            console.log(result);
        },
        // reset() {
        //     Object.keys(this.dist).forEach((id) => {
        //         const elementDist = this.dist[id];
        //         Object.keys(elementDist).forEach((key) => {
        //             this.dist[id][key] = this.initialDist[id][key];
        //         });
        //     });
        // }
    },
    watch: {
        elements() {
            this.setDist();
        }
    },
    mounted() {
        this.setDist();
    }
};
</script>

<style lang="scss">
.vdf {
    padding: 20px;
    border: 1px solid #bfcbd9;
    &__title {
        margin: 20px 0px;
        font-weight: bold;
    }
    &__content {
        padding: 10px 0px;
        margin: 20px 0px;
        border-radius: 4px;
        background: white;
    }
    &__actions {
        margin-top: 20px;
    }
}
</style>
