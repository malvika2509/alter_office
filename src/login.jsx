import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "./store/useAuthStore"; // Zustand store
import google from "./assets/googleLogo.svg";
import applicationLogo from "./assets/applicationLogo.png";
import CustomImageComponent from "./components/loginBackground";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  // Google Login handler using the hook
  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      try {
        const decoded = jwtDecode(credentialResponse.credential);
        setUser({
          name: decoded.name,
          email: decoded.email,
          image: decoded.picture,
        });
        console.log("Google User Data:", decoded);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    },
    onError: () => {
      console.error("Google Sign-In Failed");
    },
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <CustomImageComponent />
      </div>

      {/* Fixed Bottom Section */}
      <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[40px] shadow-lg z-10 flex flex-col items-center justify-center p-8">
        <img src={applicationLogo} alt="applicationLogo" />

        {/* Custom Google Login Button */}
        <button
          onClick={() => navigate("/home")}
          className="flex items-center justify-center bg-black text-white px-6 py-3 mt-6 rounded-[300px] space-x-2"
        >
          <img src={google} className="h-5" alt="Google logo" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
