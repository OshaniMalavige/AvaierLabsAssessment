// e2e.js
import './commands' // Load commands.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors from your app if needed
    return false;
});
