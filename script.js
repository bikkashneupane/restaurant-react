// const heading = React.createElement(
//   "h3",
//   { id: "heading", class: "h1" },
//   "Hello from React"
// );
// console.log(heading); //object

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>im h1</h1>
 *              <h2>im h2</h2>
 *      </div>
 *       <div id="child2">
 *              <h1>im h1</h1>
 *              <h2>im h2</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm h1"),
    React.createElement("h2", { key: "h2" }, "I'm h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "h1" }, "I'm h1"),
    React.createElement("h2", { key: "h2" }, "I'm h2"),
  ]),
]);

const aaaaaa = ReactDOM.createRoot(document.getElementById("root"));
aaaaaa.render(parent);
