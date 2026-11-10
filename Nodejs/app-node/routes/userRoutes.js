export async function userRoutes(req, res) {
    // console.log("req", req)
    const { url, method } = req;
    console.log('url:', url, 'method:', method);

    if (url == "/api/user" && method == "GET") {
        return "Message from userRoutes.js";
    } else if (url == "/api/user" && method == "POST") {
        let body = "";
        console.log("Headers : ", req.headers.authorization)

        // Read incoming request data
        for await (const chunk of req) {
            body += chunk;
        }
        const data = JSON.parse(body);

        console.log('data:', data);
        return "User created successfully";
    } else if (url.startsWith("/api/user") && method == "PUT") {
        console.log('Updating user with ID:', url.split("/")[3]);
        return "User updated successfully";
    } else if (url.startsWith("/api/user") && method == "PATCH") {
        console.log('Updating user with ID:', url.split("/")[3]);
        return "User PATCHed successfully";
    } else if (url.startsWith("/api/user") && method == "DELETE") {
        console.log('Deleting user with ID:', url.split("/")[3]);
        return "User deleted successfully";
    }
    return false;
}