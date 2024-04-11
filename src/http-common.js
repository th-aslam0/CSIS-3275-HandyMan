import axios from "axios";

export default axios.create(
    {
        baseURL: "https://96c9-2605-b100-932-da64-ad8c-e334-7ec9-8ef6.ngrok-free.app/api/",
        header: {
            "content-type":  "application/json"
            }
        }
)

