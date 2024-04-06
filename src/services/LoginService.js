import http  from "../http-common";

export const createAccount = (number) => {
    return http.get("/login");
}
