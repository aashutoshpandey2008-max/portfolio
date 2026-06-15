fetch("https://portfolio-0g3n.onrender.com/api/projects")
    .then(response => response.json())
    .then(projects => {

        const projectSection =
            document.getElementById("project-list");

        projects.forEach(project => {

            projectSection.innerHTML += `
                <div class="card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
        });

    })
    .catch(error => {
        console.log(error);
    });
