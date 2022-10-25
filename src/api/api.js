import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api/1.0/',
    headers: {
        'Access-Control-Allow-Credentials': true,
    }
});

export const usersAPI = {
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

export const profileAPI = {
    getProfile(userId) {
        let url = `profile/${userId ? userId : 0}`;
        return instance.get(url).then(res => res.data);
    },
    getStatus(userId) {
        let url = `profile/status/${userId ? userId : 0}`;
        return instance.get(url).then(res => res.data);
    },
    updateStatus(status) {
        let url = `profile/status`;
        return instance.put(url, {status}).then(res => res.data);
    },
    addPost(message, profileId) {
        let url = `profile/posts`;
        return instance.post(url, {message, id: profileId}).then(res => res.data);
    }
}

export const authAPI = {
    me() {
        let url = 'auth/me';
        return instance.get(url).then(res => res.data);
    },
    login(login) {
        let url = 'auth/login';
        return instance.post(url, {login}).then(res => res.data);
    },
    logout() {
        let url = 'auth/login';
        return instance.delete(url).then(res => res.data);
    }
}
