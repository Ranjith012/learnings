const getAllUsers = (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ];
    return res.status(200).json(users);
}

const setUser = async (req, res) => {
    const data = req.body;
    console.log("Data received:", data);

    return res.status(201).json({
        message: "User created successfully",
        data: data
    });
}

const getHeaders = async (req, res) => {
    const headers = req.headers;
    const authorizationHeader = headers.authorization;

    console.log("Headers received:", headers);
    console.log("Authorization header:", authorizationHeader);
    res.set("Content-Type", "application/json");
    return res.status(201).json({
        message: "Header data received successfully",
    });
}


const getQueryParams = async (req, res) => {

    const params = req.params.id;
    console.log("Parameters received:", params);

    const queryParams = req.query.age;
    console.log("Query parameters received:", queryParams);

    res.set("Content-Type", "application/json");
    return res.status(201).json({
        message: "Query parameters received successfully",
        data: { params, queryParams }
    });
}

export { getAllUsers, setUser, getHeaders, getQueryParams };