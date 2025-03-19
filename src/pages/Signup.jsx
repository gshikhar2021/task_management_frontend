import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/api";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (userData) => {
    try {
      await registerUser(userData);
      navigate("/login");
    } catch (error) {
      alert("Signup failed!");
    }
  };

  return <AuthForm onSubmit={handleSignup} isSignup />;
};

export default Signup;
