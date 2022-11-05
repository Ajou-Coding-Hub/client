import { GoogleLogin } from "@react-oauth/google";
function LoginPage() {
  console.log(import.meta.env.GOOGLE_CLIENT_ID);
  return (
    <div>
      <GoogleLogin
        onSuccess={(e) => console.log(e)}
        onError={() => console.log("asd")}
        // cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default LoginPage;
