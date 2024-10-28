console.log('IT\'S ALIVE');

    // Form submission handling
    const form = document.getElementById("contactform");

    if (form) { 
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            const data = new FormData(form);
            const params = [];

            for (let [name, value] of data) {
                params.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
            }

            const url = `${event.currentTarget.action}?${params.join("&")}`;

            // Redirect to the mailto URL
            if (url) {
                window.location.href = url; // Redirects to the mailto link
                form.reset(); // Optional: reset form fields after submission
            } else {
                console.error("URL is not valid.");
                alert("There was an error processing your request."); // Optional error feedback
            }
        });
    }

