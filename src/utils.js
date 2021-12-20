/** Converts `"Some String"` to `"some-string"` */
export function toDashCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

export function getRandomId() {
    return 'w' + (Math.random() + 1).toString(36).substring(2);
}

export function toCamelCase(str) {
    return str.replace(/^\w|[A-Z]|\b\w|\s+/g, function (match, index) {
        if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

export function formikSubmitPlaceholder(values, { setSubmitting }) {
    setTimeout(() => {
        alert(
            `If you see it, replace with corresponding API call.\n` +
                `Values from the form:\n` +
                JSON.stringify(values, null, 2)
        );
        setSubmitting(false);
    }, 400);
}
