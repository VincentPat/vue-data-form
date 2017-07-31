import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueDataForm from './vue-data-form';

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
            save: (result) => {
                console.log('保存数据', result);
            },
            reset: () => {
                console.log('重置数据');
            }
        },
        ref: 'form'
    })
});
