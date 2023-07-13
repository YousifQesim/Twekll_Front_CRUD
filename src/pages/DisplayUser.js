import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function UsersPage({ users }) {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Users</h1>

  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="px-4 py-3 bg-gray-200 text-gray-700 font-bold uppercase">First Name</th>
        <th className="px-4 py-3 bg-gray-200 text-gray-700 font-bold uppercase">Last Name</th>
        <th className="px-4 py-3 bg-gray-200 text-gray-700 font-bold uppercase">Age</th>
        <th className="px-4 py-3 bg-gray-200 text-gray-700 font-bold uppercase">occupation</th>
      </tr>
    </thead>
    <tbody>
      {/* ?kk? */}
      {users.map((user) => (
        <tr key={user.id} className="border-b border-gray-300 relative left-12">
          <td className="px-8 py-4 whitespace-nowrap">{user.firstName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
          <td className=" py-4 whitespace-nowrap">{user.age}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.occumation}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>
  );
}

export async function getStaticProps() {
  // Fetch users from API
  const response = await axios.get('http://localhost:9090/api/users');
  const users = response.data;
  
  return {
    props: {
      users,
    },
  };
}
