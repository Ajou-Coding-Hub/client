import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "@/components/organisms/Header";
import GuideSolvingPage from "@/pages/GuideSolvingPage";
import GuidePage from "@/pages/GuidePage";
import WorkspacePage from "@/pages/WorkspacePage";
import GuideUploadPage from "@/pages/GuideUploadPage";
import CreateContainerPage from "@/pages/CreateWorkspacePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import LandingPage from "@/pages/LandingPage";
import { wrapQuery } from "@/queries";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    console.log("google", import.meta.env.GOOGLE_CLIENT_ID);
  }, []);
  return (
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="workspace" element={<WorkspacePage />} />
            <Route path="workspace/create" element={<CreateContainerPage />} />
            <Route path="guide">
              <Route path="upload" element={<GuideUploadPage />} />
              <Route path=":problemId" element={<GuideSolvingPage />} />
              <Route index element={<GuidePage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}

export default wrapQuery(App);
