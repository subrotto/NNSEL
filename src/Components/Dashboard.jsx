"use client";

import { useState, useEffect } from "react";



const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: "", description: "" });
    const [editingProject, setEditingProject] = useState(null); 
    const [updatedDetails, setUpdatedDetails] = useState({ title: "", description: "" });

    
    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Failed to fetch projects:", err));
    }, []);

   
    const addProject = async () => {
        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProject),
            });
            const data = await res.json();
            setProjects((prev) => [...prev, data]);
            setNewProject({ title: "", description: "" });
        } catch (error) {
            console.error("Failed to add project:", error);
        }
    };

   
    const deleteProject = async (id) => {
        try {
            await fetch(`/api/projects/${id}`, { method: "DELETE" });
            setProjects((prev) => prev.filter((p) => p._id !== id));
        } catch (error) {
            console.error("Failed to delete project:", error);
        }
    };

   
    const startEditing = (project) => {
        setEditingProject(project._id); 
        setUpdatedDetails({ title: project.title, description: project.description }); 
    };

    const handleUpdate = async (id) => {
        try {
            const res = await fetch(`/api/projects/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDetails),
            });
            const updatedProject = await res.json();
            setProjects((prev) =>
                prev.map((p) => (p._id === id ? updatedProject : p))
            );
            setEditingProject(null); 
            setUpdatedDetails({ title: "", description: "" });
        } catch (error) {
            console.error("Failed to update project:", error);
        }
    };

    return (
        <>
        <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 ">
            <h1 className="text-white text-center text-6xl">Dashboard</h1>
            <hr className="w-2/3 mx-auto my-4" />
            <h2 className="text-white text-4xl text-center my-8">Total Projects : {projects.length}</h2>
            <div className="flex flex-col items-center">
                <div >
                <input
                style={{backgroundColor:'#1A1A1A'}}
                className='border border-white p-4 mx-auto my-4 w-96 text-white rounded-lg'
                    type="text"
                    placeholder="Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
                <br />
                <input
                style={{backgroundColor:'#1A1A1A'}}
                className='border border-white p-4 mx-auto w-96 text-white h-32 rounded-lg'
               
                    type="text"
                    placeholder="Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
                </div>
                <br />
                <button style={{backgroundColor:'#FF9143'}} className="text-white rounded-full px-6 py-2" onClick={addProject}>Add Project</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 ">
                {projects.map((project,index) => (
                    <div style={{borderColor:'#FF9143'}} className="text-white text-center border border-2 rounded-full p-8 bg-transparent" key={project._id || index}>
                        <h3>Project Title : {project.title}</h3>
                        <p>Description : {project.description.length<=20?project.description:project.description.slice(0,20)+'.....'}</p>
                        <button style={{backgroundColor:'#FF9143'}} className="text-white rounded-full px-6 py-4 mt-4" onClick={() => deleteProject(project._id)}>Delete</button>
                        {editingProject === project._id ? (
                            <div>
                                <input
                                style={{backgroundColor:'#1A1A1A'}}
                                className="text-white border mr-4 my-4"
                                    type="text"
                                    value={updatedDetails.title}
                                    onChange={(e) =>
                                        setUpdatedDetails({ ...updatedDetails, title: e.target.value })
                                    }
                                />
                                <input
                                style={{backgroundColor:'#1A1A1A'}}
                                className="text-white border"
                                    type="text"
                                    value={updatedDetails.description}
                                    onChange={(e) =>
                                        setUpdatedDetails({ ...updatedDetails, description: e.target.value })
                                    }
                                />
                                <button style={{backgroundColor:'#FF9143'}} className="text-white rounded-full px-6 py-4 mx-4" onClick={() => handleUpdate(project._id)}>Save</button>
                                <button style={{backgroundColor:'#FF9143'}} className="text-white rounded-full px-6 py-4 mx-4" onClick={() => setEditingProject(null)}>Cancel</button>
                            </div>
                        ) : (
                            <button style={{backgroundColor:'#FF9143'}} className="text-white rounded-full px-6 py-4 mx-4" onClick={() => startEditing(project)}>Update</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Dashboard;
