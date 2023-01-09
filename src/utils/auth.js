import BrowserStore from './BrowserStore'

const TOKEN_KEY = 'userToken'

export const isLoggedIn = () => !!BrowserStore.get(TOKEN_KEY)

export const storeAuthToken = (token) => BrowserStore.add(TOKEN_KEY, token)

export const removeAuthToken = () => BrowserStore.remove(TOKEN_KEY)

export { TOKEN_KEY }
