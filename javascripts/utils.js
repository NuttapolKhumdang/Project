async function walk(path, json = true) {
    try {
        const response = await fetch(path);
        if (json) return await response.json();
        else return await response.text();
    } catch (e) {
        console.error(e);
        return null;
    }
}