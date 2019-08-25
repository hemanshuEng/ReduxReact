import React from "react";
import Postform from "./component/Postform";
import Posts from "./component/Posts";
import { Provider } from "react-redux";
import store from'./store';
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="container">
            <Postform />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
