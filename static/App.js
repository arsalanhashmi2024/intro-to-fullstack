var contentNode = document.getElementById("contents");
var component = React.createElement(
  "h1",
  { className: "title" },
  " Hello Universe"
);
ReactDOM.render(component, contentNode);