export const SERVER = {
    HOST: 'http://localhost',
    FRONT_PORT: '3000',
    BACKEND_PORT: '4000',
    BACKEND: () => `${SERVER.HOST}:${SERVER.BACKEND_PORT}`
}