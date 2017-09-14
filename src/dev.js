import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueDataForm from './vue-data-form.vue';

import exampleConfig from './example.json';

Vue.use(ElementUI);

Vue.config.productionTip = false;

window.example = new Vue({
    el: '#app',
    components: { VueDataForm },
    render: h => h('vue-data-form', {
        props: {
            id: 'myForm',
            title: '数据表单',
            elements: exampleConfig
        },
        on: {
            focus: (result) => {
                console.log('聚焦', result);
            },
            blur: (result) => {
                console.log('失焦', result);
            },
            change: (result) => {
                console.log('变更', result);
            },
            save: (result) => {
                console.log('保存数据', result);
            },
            reset: (result) => {
                console.log('重置数据', result);
            }
        },
        ref: 'form'
    })
});
