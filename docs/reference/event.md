# Event

`event` is a important concept of Vue Component. [More Detail](https://vuejs.org/v2/guide/components.html#Custom-Events).

Name | Params | Description
:--- | :--- | :---
focus | id:String | emit when the cursor focus on form items.
blur | id:String | emit when the cursor leaves.
change | id:String, value:Any | emit when a element's value changed.
save | data:Object | emit when submit button is clicked.
reset | data:Object | emit when reset button is clicked.