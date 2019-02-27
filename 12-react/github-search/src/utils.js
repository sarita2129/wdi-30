import axios from 'axios';

const Github = {
  getUserInfo(username) {
    // Return the promise from axios to allow the caller to attach .then handlers to process the response.
    return axios.get(`https://api.github.com/users/${ username }`);
  }
};

export default Github;
