// List of paths to exclude from service worker
const excludePaths = [
    '/blogdev/',           // Entire WordPress directory
    '/blogdev/wp-admin/',  // WordPress admin
    '/blogdev/wp-json/',   // WordPress REST API
    '/blogdev/wp-content/' // WordPress content (optional but recommended)
];

// Check if current path should be excluded
function shouldExclude(url) {
    return excludePaths.some(path => url.pathname.startsWith(path));
}
