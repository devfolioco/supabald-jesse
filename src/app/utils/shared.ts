let _APP_URL = 'http://localhost:3000';

if (process.env.VERCEL_ENV === 'production') {
    _APP_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
} else if (process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development') {
    _APP_URL = `https://${process.env.VERCEL_URL}`
}

export const OPENSEA_COLLECTION = 'https://opensea.io/collection/supabald-jesse';

export function isNumeric(str: string | number) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str as unknown as number) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export { _APP_URL as APP_URL }
