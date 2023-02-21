import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import MainLayout from "./layouts/MainLayout";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((element, index) => {
          let Layout = MainLayout;
          if (element.layout) {
            Layout = element.layout;
          } else {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={element.path}
              element={<Layout>{element.element}</Layout>}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
