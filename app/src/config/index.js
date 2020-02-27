
export function getCurrentConfig () {
    const backendApi = process.env.REACT_APP_BACKEND_API;
    if(backendApi === undefined) {
        throw new Error(`Please set REACT_APP_BACKEND_API value in your .env file.`);
    }
    return {
        backendApi,
    };
};

export function getBackendApiUrl () {
    return getCurrentConfig().backendApi;
};