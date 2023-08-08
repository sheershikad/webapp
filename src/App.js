import "./App.css";
import { Login } from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Table from "./pages/table/Table";
import AddEmployee from "./pages/addemployee/AddEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/home" exact element={<Home></Home>}>
          <Route path="table" element={<Table></Table>} />
          <Route path="addemployee" element={<AddEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
