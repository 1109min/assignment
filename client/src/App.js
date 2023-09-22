import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence} from "framer-motion"; 
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Introduce from "./pages/Introduce";
import Header from "./pages/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/add" element={<Add />} />
          <Route path="/books" element={<Books />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
