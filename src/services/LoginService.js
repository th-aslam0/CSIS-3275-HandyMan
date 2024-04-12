import http from "../http-common";

export const LOGIN = (data) => {
    return http.post("/login",data)
            .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
}
