import axios from 'axios';

export default axios.create(
    {
        baseURL: "https://se-backend-310335d51d82.herokuapp.com/api/",
        header: {
            "content-type":  "application/json"
            }
        }
)

