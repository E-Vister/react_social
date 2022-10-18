import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api/1.0/',
    headers: {
        'Access-Control-Allow-Credentials': true,
    }
});

export const usersAPI = {
    getProfile(userId) {
        let url = `profile/${userId ? userId : 0}`;
        return instance.get(url).then(res => res.data);
    },
    getUsers(pageSize, currentPage) {
        let url = `users?count=${pageSize}&page=${currentPage}`;
        return instance.get(url).then(res => res.data);
    },
    follow(id) {
        let url = `follow/${id}`;
        return instance.post(url, {}).then(res => res.data);
    },
    unfollow(id) {
        let url = `follow/${id}`;
        return instance.delete(url).then(res => res.data);
    },
};

export const authAPI = {
    me() {
        let url = 'auth/me';
        return instance.get(url).then(res => res.data);
    }
}
