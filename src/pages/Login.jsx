import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import useRedirectBasedOnAbility from '../@core/useRedirectBasedOnAbility'; 
import CustomInput from '@/component/GlobalComponent/Form/CustomInput';
import CustomButton from '@/component/GlobalComponent/Form/CustomButton';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useRedirectBasedOnAbility(); // Use the hook for automatic redirection

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="p-56">
      <div className="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-3xl font-bold text-gray-700">Log into FLEX_ONE</h1>
          <p className="text-gray-500">Login to access your account</p>
        </div>

        <form>
          <CustomInput
            id="email"
            type="email"
            label="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5"
          />
          <CustomInput
            id="password"
            type="password"
            label="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5"
          />

          <CustomButton 
            type="button" 
            variant="default" 
            color="blue" 
            label="Login" 
            className="text-white"
            onClick={handleLogin} 
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
