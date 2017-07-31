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
                v-for="(element, index) in config"
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
            <el-button
                @click="reset">重置</el-button>
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
            config: [],
            dist: {},
            initialDist: {}
        };
    },
    methods: {
        // 变更事件
        change(data) {
            this.dist[data.id][data.property] = data.value;
        },
        // 设置最终输出数据
        setDist() {
            this.config.forEach((element) => {
                this.$set(this.dist, element.id, Object.assign({}, element.dist));
            });
            this.config.forEach((element) => {
                this.$set(this.initialDist, element.id, Object.assign({}, element.dist));
            });
        },
        // 保存
        save() {
            this.$emit('save', this.dist);
        },
        // 重置
        reset() {
            this.config.forEach((element, index) => {
                const id = element.id;
                const data = this.initialDist[id];
                // 编辑数据
                element.dist = Object.assign({}, data);
                // 输出数据
                this.dist[id] = Object.assign({}, data);
            });
            this.$emit('reset');
        },
        // 初始化
        init() {
            this.config = this.elements;
            this.setDist();
        }
    },
    watch: {
        elements() {
            this.init();
        }
    },
    mounted() {
        this.init();
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
