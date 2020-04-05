import axios from 'axios';

export default class AuthService {

    static getJwtByEmailAndPassword(email, password){
        axios.post(`/auth`, {email, password})
                .then(function (response) {
                    return response.data['token'];
                });
    }

}