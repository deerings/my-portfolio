console.log('IT\'S ALIVE');

document.addEventListener("DOMContentLoaded", () => {
    // Color scheme selector
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;">
            Theme:
            <select id="color-scheme-selector">
                <option value="light dark">Automatic</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </label>
        `
    );

    const select = document.querySelector("#color-scheme-selector");
    
    function setColorScheme(scheme) {
        document.documentElement.style.setProperty('color-scheme', scheme);
        localStorage.colorScheme = scheme; 
    }
    
    // Load saved color scheme from localStorage
    if ("colorScheme" in localStorage) {
        select.value = localStorage.colorScheme;
        setColorScheme(localStorage.colorScheme);
    }

    // Change color scheme on input change
    select.addEventListener('input', (event) => {
        const scheme = event.target.value;
        setColorScheme(scheme);
    });

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
});
