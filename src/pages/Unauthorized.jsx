import { useNavigate } from 'react-router-dom'
import CustomButton from '@/component/GlobalComponent/Form/CustomButton';
const Unauthorized = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-red-600">401 - Unauthorized</h2>
      <p className="mb-4">You do not have permission to access this page.</p>
      <CustomButton className="bg-red-600 text-white px-4 py-2" onClick={() => navigate('/')} label="Go Home">
        
      </CustomButton>
    </div>
  )
}

export default Unauthorized
