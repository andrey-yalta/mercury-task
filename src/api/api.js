import * as axios from "axios";

const instance = axios.create({
    baseURL:`https://jsonplaceholder.typicode.com`,
    headers:{'Content-Type': 'application/json'},
});

export const LoginApi ={
    login(name,password){
        debugger
    if(name === "andrey" && password === "12345"){
        return 200
    }
    return 404
    }
}

export const AdvantagesApi  = {
    getPosts() {
        return instance.get(`/posts?_page=1&_limit=4`)
            .then(response => {
                return response
            })
    },
    getPhotos() {
        return instance.get(`/photos?_page=1&_limit=4`)
            .then(response => {
                return response
            })
    },
}