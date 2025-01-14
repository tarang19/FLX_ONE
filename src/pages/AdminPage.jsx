import  { useState, useEffect } from 'react';
import withAuthorization from '@/hooks/withAuthorization'
import ReusableTable from '@/component/GlobalComponent/ReusableTable';
import users from '@/@core/FakeDB/users.json';
const AdminPage = () => {
  const [userData, setUsers] = useState([]);

   // Fetch users data from JSON file
   useEffect(() => {
    setUsers(users); // Setting users from JSON
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl">Admin Dashboard</h1>
      <ReusableTable
        headers={['ID', 'Name', 'Email', 'Role']} // 'Password' removed from the headers
        data={userData}
      />
    </>
  )
}

const AuthorizedAdminPage = withAuthorization(AdminPage, 'manage', 'all');
export default AuthorizedAdminPage;
