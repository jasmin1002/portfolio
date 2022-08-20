import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./utils/auth";
import SharedLayout from "./pages/sharedLayout";
import Signup from "./pages/signup"
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Page404 from "./pages/page404";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<Login />} />
            <Route index path="login" element={<Navigate to={"/"} />} />
            <Route path='signup' element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
