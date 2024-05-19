import { createClient, groq } from "next-sanity";

export async function getAbout() {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`*[_type == "about"]`
    )
}

export async function getExperience() {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`*[_type == "experience"] | order(start_date desc)`
    )
}

export async function getSkills() {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`*[_type == "skills"]`
    )
}

export async function projectCategories() {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`array::unique(*[_type == "projects"].category)`
    )
}

export async function projectPreview() {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`*[_type == "projects"]{
        category,
        name,
        previewImage,
        "slug": slug.current
        }`
    )
}

export async function getProject(parameter) {
    const client = createClient({
        projectId: "vilmgree",
        dataset: "production",
        apiVersion: "2023-11-05",
    });

    return client.fetch(
        groq`*[_type == "projects" && slug.current == "${parameter}"]{
            name,
            slug,
            github,
            deployment,
            start_date,
            end_date,
            detailImage,
            description,
            "tech": techStack[]->{
                name,  
                description,
                image
            }
        }`
    )
}