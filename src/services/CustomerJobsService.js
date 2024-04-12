import http from "../http-common";

export const jobs = (data) => {
    return http.post("/jobs",data)
            .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
}


export const customerJobs = (custId) => {
  return http.get("/jobs/customer/"+custId)
          .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error getting Customer:', error);
    });
}

