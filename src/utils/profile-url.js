export function slugify(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'profile';
}

export function profileUrl(id) {
    return `/about/profile.html?id=${encodeURIComponent(id)}`;
}
