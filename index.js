
const page = (
    <div>
        <h1 className="header">My awesome website in react.</h1>
        <h3>Reasons I love react</h3>
        <ul>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ul>
    </div>
);

// document.getElementById("root").append(JSON.stringify(page));
ReactDOM.render(page, document.getElementById("root"));

