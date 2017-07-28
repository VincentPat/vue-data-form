import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueDataForm from './vue-data-form';

Vue.use(ElementUI);

Vue.config.productionTip = false;

window.example = new Vue({
    el: '#app',
    components: { VueDataForm },
    render: h => h('vue-data-form', {
        props: {
            id: 'myForm',
            title: '数据表单',
            elements: [
                {
                    id: 'title',
                    type: 'input',
                    name: '标题',
                    dist: {
                        value: 'VUE-DATA-FORM'
                    }
                },
                {
                    id: 'desc',
                    type: 'input',
                    name: '描述',
                    dist: {
                        value: '这是一个神奇的表单'
                    }
                }
            ]
        },
        ref: 'form'
    })
});
