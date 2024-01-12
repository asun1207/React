import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Library from "./components/Library";
import About from "./components/About";
import Nopage from "./components/Nopage";
function App() {
  const [user, setUser] = useState(null);
  const chUser = (userInfo) => {
    setUser(userInfo);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Login user={user} chuser={chUser} />} />
          <Route path="reg" element={<Register chuser={chUser} />} />
          <Route path="lib" element={<Library />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
