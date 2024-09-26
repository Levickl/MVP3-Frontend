let auth0 = null;

const configureClient = async () => {
    auth0 = await createAuth0Client({
        domain: "dev-x8z4nozeb15gmvgb.us.auth0.com",
        client_id: "7iR6yTUf5E82qiYH2hkRf6RaVUMHWalo"
    });
};

// Chama a configuração ao carregar o script
configureClient();

const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: `${window.location.origin}/src/index.html`
    });
};

const logout = () => {
    auth0.logout({
        returnTo: window.location.origin
    });
};
// Verifica se o usuário está autenticado ao carregar a página
const checkAuth = async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        //alert(`Bem-vindo ${await auth0.getUser().name}!`);
        /*(document.body.innerHTML = `<h1>Bem-vindo, ${await auth0.getUser().name}</h1>
                                   <button id="logout">Logout</button>`;
        document.getElementById('logout').addEventListener('click', logout);*/
    }
};

// Handle authentication on page load
window.onload = async () => {
    await configureClient();

    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
    }

    await checkAuth();
};
