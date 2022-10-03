import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import GuidePage from "@/pages/GuidePage";
import Header from "@/components/organisms/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="h-[calc(100vh_-_64px)] mt-0.5">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="/guide">가이드</Link>
                <p>ASDasd</p>
              </div>
            }
          />
          <Route path="/guide" element={<GuidePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
