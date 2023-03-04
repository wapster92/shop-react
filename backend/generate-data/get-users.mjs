import axios from 'axios';

const getUsers = async () => {
  console.time('get');
  const {data: {data}} = await axios.get('http://localhost:5000/api/users?limit=10');
  console.log(data);
  console.timeEnd('get');
}
getUsers().then()
