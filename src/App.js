import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TodoProvider from "./contex/todoProvider";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <TodoProvider>
              <Todos />
            </TodoProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
