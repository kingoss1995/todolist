(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(t,e,o){t.exports=o(60)},59:function(t,e,o){},60:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=o(18),i=o(7),s=o(8),d=o(10),u=o(9),p=o(13),m=o(1),h=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o," ",a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:f},"x"," ")," ")," ")}}]),o}(n.Component),f={backgroundColor:"brown",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},b=h,v=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(a.a.Component);function g(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null," TodoList ")," ",a.a.createElement(p.b,{to:"/todolist",style:E},"Home")," ","|"," ",a.a.createElement(p.b,{to:"/about",style:E},"About"))}var y={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=o(31),k=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addItem(t.state.title),t.setState({title:""})},t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})," ")}}]),o}(n.Component);function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null," About ")," ",a.a.createElement("p",null," This is the Todo List V1 .0 .0 it 's part of a react crash course")," ")}var x=o(14),C=o.n(x),S=(o(59),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})}))},t.addItem=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;console.log("Did Mount"),C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){console.log(e.data),t.setState({todos:Object(l.a)(e.data)})}))}},{key:"render",value:function(){var t=this;return console.log("render"),a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(m.a,{exact:!0,path:"/todolist",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addItem:t.addItem})," ",a.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})," ")}}),a.a.createElement(m.a,{path:"/about",component:O}))," "))}}]),o}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ee019ed5.chunk.js.map