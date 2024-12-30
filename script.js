// Adding interactivity to the project cards
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("click", () => {
            alert(`More details about ${project.querySelector("h3").textContent} coming soon!`);
        });
    });
});
