import "./App.css";
import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us" />
      <Avatar
        size={40}
        person={{
          name: "awais",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "awais",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

export default App;
