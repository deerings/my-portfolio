export const prerender = true;

export async function load({ url }) {
  const path = url.pathname;
  
  // Define page-specific titles
  const titles = {
    '/': 'Home - Sean Deering\'s Personal Website',
    '/projects': 'Projects - Sean Deering\'s Personal Website',
    '/cv': 'CV - Sean Deering\'s Personal Website',
    '/contact': 'Contact - Sean Deering\'s Personal Website'
  };
  
  // Handle base path for production
  const normalizedPath = path.replace(/^\/my-portfolio/, '') || '/';
  const title = titles[normalizedPath] || 'Sean Deering\'s Personal Website';
  
  return {
    title
  };
}
