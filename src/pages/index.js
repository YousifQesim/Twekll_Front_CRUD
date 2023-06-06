import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [occumation, setoccumation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/users', {
        firstName,
        lastName,
        age,
        occumation,
      });

      // Reset form fields
      setFirstName('');
      setLastName('');
      setAge('');
      setoccumation('');
    } catch (error) {
      console.error(error);
    }
  };

  return (<>
  <Navbar/>
      <h1 className="text-2xl font-bold mb-4 text-center mt-5">Please fill following information</h1>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="age">
          Age:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="occumation">
          occumation(job):
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
          type="text"
          id="occumation"
          value={occumation}
          onChange={(e) => setoccumation(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
          </>
  );
}
