(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{10:function(t,e,a){t.exports=a(16)},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);for(var o=a(0),n=a.n(o),l=a(8),r=a.n(l),c=(a(15),a(1)),i=a(2),d=a(3),s=a(5),u=a(4),m=a(6),g=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).change=function(e,a){t.props.delTodo3(e),t.props.addTodo3(a.name)},t.change2=function(e,a){t.props.addTodo1(a.name),t.props.delTodo4(e)},t}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h1",null,"\u6b63\u5728\u8fdb\u884c"),n.a.createElement("span",null,this.props.all()),n.a.createElement("ul",null,this.props.todo.map((function(e,a){return n.a.createElement("li",{key:e},n.a.createElement("input",{type:"checkbox",onChange:function(){t.change(a,e)}}),e.name,"----",n.a.createElement("button",{onClick:function(){t.props.delTodo(e,a)}},"\u5220\u9664"))})))),n.a.createElement("h1",null,"\u5df2\u7ecf\u5b8c\u6210"),n.a.createElement("span",null,this.props.all2()),n.a.createElement("ul",null,this.props.todo2.map((function(e,a){return n.a.createElement("li",{key:e},n.a.createElement("input",{type:"checkbox",onChange:function(){t.change2(a,e)}}),e.name,"----",n.a.createElement("button",{onClick:function(){t.props.delTodo2(e,a)}},"\u5b8c\u6210"))}))))}}]),e}(o.Component),h=a(9),f=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.addTodo(e.target.value)},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.state={n1:"\u6dfb\u52a0input"},t}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("label",{for:"title"},"ToDoList"),n.a.createElement("input",{name:"n1",onChange:this.handleChange,placeholder:"\u6dfb\u52a0input",onKeyDown:function(e){return t.handleInput(e)},type:"text"}))}}]),e}(o.Component),p=0,v=0;v<localStorage.length;v++){var O=localStorage.key(v);O>p&&(p=O)}console.log(p);var S=function(t){function e(){var t;Object(i.a)(this,e);for(var a=[],o=[],n=0;n<localStorage.length;n++){var l=localStorage.key(n),r=JSON.parse(localStorage.getItem(l));!1===r.isDoing?a.push({name:r.name,isDoing:r.isDoing}):o.push({name:r.name,isDoing:r.isDoing})}return(t=Object(s.a)(this,Object(u.a)(e).call(this))).addItem=function(e){p++;var a={name:e,isDoing:!1};t.setState({todo:[].concat(Object(c.a)(t.state.todo),[a])},(function(){a=JSON.stringify(a),localStorage.setItem(p,a)}))},t.addItem2=function(e){p++;var a={name:e,isDoing:!1};t.setState({todo2:[].concat(Object(c.a)(t.state.todo2),[a])},(function(){a=JSON.stringify(a),localStorage.setItem(p,a)}))},t.addItem1=function(e){var a={name:e,isDoing:!0};t.setState({todo:[].concat(Object(c.a)(t.state.todo),[a])});for(var o=0;o<=p;o++){if(JSON.stringify(a)==localStorage.getItem(o)){a.isDoing=!1;var n=JSON.stringify(a);localStorage.removeItem(o),localStorage.setItem(o,n)}}},t.addItem3=function(e){var a={name:e,isDoing:!1};t.setState({todo2:[].concat(Object(c.a)(t.state.todo2),[a])});for(var o=0;o<=p;o++){if(JSON.stringify(a)==localStorage.getItem(o)){a.isDoing=!0;var n=JSON.stringify(a);localStorage.removeItem(o),localStorage.setItem(o,n)}}},t.delItem=function(e){for(var a=Object(c.a)(t.state.todo),o=0;o<=p;o++){JSON.stringify(e)==localStorage.getItem(o)&&localStorage.removeItem(o)}for(var n=0;n<a.length;n++)a[n]==e&&a.splice(n,1);t.setState({todo:a})},t.delItem3=function(e){var a=Object(c.a)(t.state.todo);a.splice(e,1),t.setState({todo:a})},t.delItem4=function(e){var a=Object(c.a)(t.state.todo2);a.splice(e,1),t.setState({todo2:a})},t.delItem2=function(e){for(var a=Object(c.a)(t.state.todo2),o=0;o<=p;o++){JSON.stringify(e)==localStorage.getItem(o)&&localStorage.removeItem(o)}for(var n=0;n<a.length;n++)a[n]==e&&a.splice(n,1);t.setState({todo2:a})},t.all=function(){for(var e=Object(c.a)(t.state.todo),a=0,o=0;o<e.length;o++)a++;return a},t.all2=function(){for(var e=Object(c.a)(t.state.todo2),a=0,o=0;o<e.length;o++)a++;return a},t.state={todo:a,todo2:o},t}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,{addTodo:this.addItem}),n.a.createElement(g,{all2:this.all2,all:this.all,addTodo:this.addItem,addTodo2:this.addItem2,addTodo1:this.addItem1,addTodo3:this.addItem3,delTodo:this.delItem,delTodo4:this.delItem4,delTodo3:this.delItem3,delTodo2:this.delItem2,todo2:this.state.todo2,todo:this.state.todo}))}}]),e}(o.Component);r.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a10de924.chunk.js.map