export async function fetchProjects() {
    try {
        const response = await fetch("projects.json");
        if (!response.ok) {
            throw new Error("Kunde inte hämta projektdata");
        }
        return await response.json();
    } catch (error) {
        console.error("Fel vid hämtning av projekt:", error);
        return [];
    }
}