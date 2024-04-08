import http  from "../http-common";

export const logIn = (data) => {
    return http.post("/signup",data)
            .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
}
