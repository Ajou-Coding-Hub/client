import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
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
import { useAuth } from "@/store";
import ValidateGithub from "@/pages/ValidateGithub";
import SettingPage from "@/pages/SettingPage";

function App() {
  useEffect(() => {
    console.log("google", import.meta.env.GOOGLE_CLIENT_ID);
  }, []);
  const { isLoggedin } = useAuth();
  return (
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="validate-github" element={<ValidateGithub />} />
            {isLoggedin ? (
              <>
                <Route path="workspace">
                  <Route path="create" element={<CreateContainerPage />} />
                  <Route index element={<WorkspacePage />} />
                </Route>

                <Route path="guide">
                  <Route path="upload" element={<GuideUploadPage />} />
                  <Route path=":problemId" element={<GuideSolvingPage />} />
                  <Route index element={<GuidePage />} />
                </Route>

                <Route path="settings">
                  <Route
                    path="account"
                    element={<SettingPage menu={"account"} />}
                  />
                  <Route
                    path="integration"
                    element={<SettingPage menu={"integration"} />}
                  />
                  <Route index element={<Navigate to="account" replace />} />
                  <Route path="*" element={<Navigate to="account" replace />} />
                </Route>
              </>
            ) : (
              <Route path="*" element={<LandingPage />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}

export default wrapQuery(App);
