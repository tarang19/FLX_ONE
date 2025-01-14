// App.js
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router
import AppRoutes from '@/routes/AppRoutes'; // Your routes component
import Navbar from '@/component/GlobalComponent/Nav'; // Your navbar

const App = () => {
  return (
    <Router>  {/* This will wrap your entire app */}
      <div>
        {/* Navbar will appear here */}
        <Navbar />

        {/* Routes will be rendered here */}
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
