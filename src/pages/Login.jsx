import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      const data = await loginUser(userData);
      
      if (!data.token) {
        throw new Error("Invalid response: No token received.");
      }
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", userData.username);
  
      console.log("Token stored in localStorage:", data.token); // ✅ Debugging
      navigate("/home");
    } catch (error) {
      alert("Login failed!");
    }
  };
  

  return <AuthForm onSubmit={handleLogin} />;
};

export default Login;
