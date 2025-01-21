import { connectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";

export async function PUT(request, { params }) {
    try {
        const db = await connectDB();
        const projectsCollection = db.collection("projects");

        const { id } = params; 
        const body = await request.json();
        const { title, description } = body;

        const updatedProject = await projectsCollection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { title, description } },
            { returnDocument: "after" }
        );

        if (!updatedProject.value) {
            return new Response(JSON.stringify({ error: "Project not found" }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify(updatedProject.value), { status: 200 });
    } catch (error) {
        console.error("PUT Error:", error);
        return new Response(JSON.stringify({ error: "Failed to update project" }), {
            status: 500,
        });
    }
}

export async function DELETE(request, { params }) {
    try {
        const db = await connectDB();
        const projectsCollection = db.collection("projects");

        const { id } = params; 
        const result = await projectsCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return new Response(JSON.stringify({ error: "Project not found" }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify({ message: "Project deleted successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error("DELETE Error:", error);
        return new Response(JSON.stringify({ error: "Failed to delete project" }), {
            status: 500,
        });
    }
}
