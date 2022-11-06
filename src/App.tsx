import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "@/components/organisms/Header";
import GuideSolvingPage from "@/pages/GuideSolvingPage";
import GuidePage from "@/pages/GuidePage";
import ProjectPage from "@/pages/ProjectPage";
import GuideUploadPage from "./pages/GuideUploadPage";
import CreateContainerPage from "./pages/CreateContainerPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Header />
        <div className="h-[calc(100vh_-_64px)]">
          <Routes>
            <Route path="/" element={<ProjectPage />} />
            <Route path="guide">
              <Route path="upload" element={<GuideUploadPage />} />
              <Route path=":problemId" element={<GuideSolvingPage />} />
              <Route index element={<GuidePage />} />
            </Route>
            <Route path="/container" element={<CreateContainerPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
