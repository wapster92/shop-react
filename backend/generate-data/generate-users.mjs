import axios from 'axios';
import faker from '@faker-js/faker/locale/ru';

const getRoles = async () => {
  const {data: {data}} = await axios.get('http://localhost:5000/api/roles');
  return data;
}

const generateUsers = async () => {
  const faceUsers = Array(100).fill({}).map(user => ({
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.middleName(),
    email: faker.internet.email(),
    password: faker.random.word(),
    roles: [{id: 2}],
  }));

  console.log(faceUsers);

  const promises = faceUsers.map(user => {
    return axios.post('http://localhost:5000/api/users', user)
  })
  const info = await Promise.all(promises);
  console.log(info);
}

generateUsers().then()

