const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },[
       React.createElement("h1", { id: "heading" }, "I'm an h1 tag") ,
         React.createElement("h2", { id: "heading" }, "I'm an h1 tag"),
            ])
    );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
