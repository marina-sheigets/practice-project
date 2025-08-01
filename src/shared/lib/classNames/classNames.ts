type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    if (!additional) {
        additional = [];
    }
    if (!mods) {
        mods = {};
    }
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter((arr) => Boolean(arr[1]))
            .map(([cls]) => cls)
    ].join(" ");
}