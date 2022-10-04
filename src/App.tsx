import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "@/components/organisms/Header";
import LoginPage from "@/pages/LoginPage";
import GuideSolvingPage from "@/pages/GuideSolvingPage";
import GuidePage from "@/pages/GuidePage";
import ProjectPage from "@/pages/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="h-[calc(100vh_-_64px)] mt-0.5">
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="guide">
            <Route path=":problemId" element={<GuideSolvingPage />} />
            <Route index element={<GuidePage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
