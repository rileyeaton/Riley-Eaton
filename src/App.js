import "./App.css";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Web Page is Coming Soon</h1>
        <h3>
          Feel free to visit{" "}
          <a
            class="badge-base__link LI-simple-link"
            href="https://ca.linkedin.com/in/rileyeaton?trk=profile-badge"
          >
            my LinkedIn
          </a>{" "}
          while you wait
        </h3>
        <InfinitySpin width="200" color="#4AC3B5" />
      </header>
      <body></body>
    </div>
  );
}

function LinkedIn() {
  return (
    <div
      class="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="dark"
      data-type="VERTICAL"
      data-vanity="rileyeaton"
      data-version="v1"
    ></div>
  );
}

export { App, LinkedIn };
