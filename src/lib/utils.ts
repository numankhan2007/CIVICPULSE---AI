export function cn(...classes: Array<string | false | undefined | null>) { return classes.filter(Boolean).join(' '); }
export function initials(name: string) { return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase(); }
