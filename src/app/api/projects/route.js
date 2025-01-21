import { connectDB } from "@/lib/ConnectDB";

export async function GET(request) {
    try {
        const db = await connectDB();
        const projectsCollection = db.collection("projects");

        
        const projects = await projectsCollection.find({}).toArray();
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
            status: 500,
        });
    }
}

export async function POST(request) {
    try {
        const db = await connectDB();
        const projectsCollection = db.collection("projects");

        const body = await request.json();
        const { title, description } = body;

        if (!title || !description) {
            return new Response(JSON.stringify({ error: "Title and description are required" }), {
                status: 400,
            });
        }

        const result = await projectsCollection.insertOne({ title, description });
        return new Response(JSON.stringify({ _id: result.insertedId, title, description }), { status: 201 });
    } catch (error) {
        console.error("POST Error:", error);
        return new Response(JSON.stringify({ error: "Failed to add project" }), {
            status: 500,
        });
    }
}
