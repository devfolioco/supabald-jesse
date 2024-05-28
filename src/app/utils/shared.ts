export const APP_URL = `https://${process.env.VERCEL_URL}` || 'http://localhost:3003';

export const OPENSEA_COLLECTION = 'https://opensea.io/collection/supabald-jesse';

export function isNumeric(str: string | number) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str as unknown as number) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
