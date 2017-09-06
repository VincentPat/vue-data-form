# Prop

`prop` is a important concept of Vue Component. [More Detail](https://vuejs.org/v2/guide/components.html#Props).

Name | Type | Default | Necessary | Description
:--- | :--- | :--- | :--- | :---
id | String | '' | N | It will be add to DOM attribute of the form.
title | String | '' | N | Title of the form, you can use `slot[name='title']` either.
labelWidth | String | 4 | N | Label's width ranged from 1 to 23, which is using ElementUI Layout.[More Detail](http://element.eleme.io/#/zh-CN/component/layout)
elements | Array | [] | Y | Elements' Config, the data source of the form.