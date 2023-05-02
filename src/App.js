import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Blogrecord from "./components/Blogrecord";
import Updateblog from "./components/Updateblog";
import Header from "./containers/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogrecord />} />
          <Route path="/updateblog/:id" element={<Updateblog />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;