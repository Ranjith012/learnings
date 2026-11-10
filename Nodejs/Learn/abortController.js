async function fetchUser() {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 3000);

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                signal: controller.signal
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request timed out");
        } else {
            console.log("Error:", error.message);
        }
    } finally {
        clearTimeout(timeout);
    }
}

fetchUser();