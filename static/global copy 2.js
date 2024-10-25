console.log('IT\'S ALIVE');

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

document.addEventListener("DOMContentLoaded", () => {
    let navLinks = $$("nav a");

    const ARE_WE_HOME = document.documentElement.classList.contains('home');

    let pages = [
    { url: './', title: 'Home' },
    { url: 'projects', title: 'Projects' },
    { url: 'contact', title: 'Contact' },
    { url: 'cv', title: 'CV' },
    { url: 'https://www.github.com/deerings', title: 'Github' },
    ];

    let nav = document.createElement('nav');
    document.body.prepend(nav);

     for (let p of pages) {
        let url = !ARE_WE_HOME && !p.url.startsWith('http') ? '../' + p.url : p.url; 
        let title = p.title;

        let a = document.createElement('a'); 
        a.href = url;                       
        a.textContent = title;              

        // Check if the link is external
    //    if (p.url.startsWith('https')) {
    //        a.target = "_blank"; // Open in new tab
        }

document.querySelectorAll('a').forEach(a => {
    let isExternal = a.href.startsWith('https') && a.host !== location.host;

    if (isExternal) {
        a.target = "_blank";
    }
});

        /*// Highlight the current page
        a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);*/

        nav.append(a); 
    }

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
    
    if ("colorScheme" in localStorage) {
        select.value = localStorage.colorScheme;
        setColorScheme(localStorage.colorScheme);
    }

    select.addEventListener('input', (event) => {
        const scheme = event.target.value;
        setColorScheme(scheme);
    });
  
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
