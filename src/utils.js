/** Converts `"Some String"` to `"some-string"` */
export function toDashCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

export function getRandomId() {
    return 'w' + (Math.random() + 1).toString(36).substring(2);
}
