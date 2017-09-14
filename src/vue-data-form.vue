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
                @focus="focus"
                @blur="blur"
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
import vdfElement from './vue-data-form-element.js';
import './style/vue-data-form.css';

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
            value: {},
            initialValue: {}
        };
    },
    methods: {
        // 变更事件
        change(data) {
            this.value[data.id] = data.value;
            this.config[data.index].value = data.value;
            this.$emit('change', data);
        },
        // 聚焦事件
        focus(data) {
            this.$emit('focus', data);
        },
        // 失焦事件
        blur(data) {
            this.$emit('blur', data);
        },
        // 设置最终输出数据
        setValue() {
            this.config.forEach((element, index) => {
                element.index = index;
                this.$set(this.value, element.id, element.value);
                this.$set(this.initialValue, element.id, element.value);
            });
        },
        // 保存
        save() {
            this.$emit('save', this.value);
        },
        // 重置
        reset() {
            this.config.forEach((element, index) => {
                const id = element.id;
                const data = this.initialValue[id];
                // 编辑数据
                element.value = data;
                // 输出数据
                this.value[id] = data;
            });
            this.$emit('reset', this.value);
        },
        // 检查elements是否符合
        checkElements() {
            const o = this.elements.filter((item) => typeof item !== 'object').length <= 0;
            if (!o) {
                console.error('Config Error: element shoud be an object.');
                return false;
            }
            const t = this.elements.filter((item) => typeof item.type !== 'string').length <= 0;
            if (!t) {
                console.error('Config Error: element\'s type should be a string!');
                return false;
            }
            return true;
        },
        // 初始化
        init() {
            if (this.checkElements()) {
                this.config = this.elements;
                this.setValue();
            }
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
