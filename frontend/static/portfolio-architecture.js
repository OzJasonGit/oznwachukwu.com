



























const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard")},
        { path: "/the-lion-club", view: () => console.log("Viewing The Lion Club")},
        { path: "/", view: () => console.log("Viewing Dashboard")},
    ];

    // Test each route for a potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log (potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => {
    router();
});