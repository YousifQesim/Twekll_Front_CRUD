import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request to save user
    const { firstName, lastName, age, occumation } = req.body;

    try {
      await axios.post('http://localhost:9090/api/save', {
        firstName,
        lastName,
        age,
        occumation,
      });

      res.status(200).json({ message: 'User saved successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to save user.' });
    }
  }
}
