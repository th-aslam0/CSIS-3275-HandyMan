import http from "../http-common";

export const LOGIN = (data) => {
    return http.post("/login",data);
}
