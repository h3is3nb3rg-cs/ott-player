import { Provider } from "react-redux";
import "./App.css";
import Genre from "./Components/Genre";
import Header from "./Components/Header";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-black">
        <Header />
        <Genre />
      </div>
    </Provider>
  );
}

export default App;
