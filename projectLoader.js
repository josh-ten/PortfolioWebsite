// $(document).ready(() => {
    $.getJSON('./website/projectRef.json', (data) => { 
        let url = window.location.href;
        let projectId = url.split('#')[1];
        // console.log(projectId);
        let project = findDataForId(data, projectId);
        let gitHubName = (project.gitHubName == null) ? 
            project.title.replace(/\s/g, '') : project.gitHubName;
        let hostBaseUrl = "https://cdn.jsdelivr.net/gh/josh-ten/";
        for (let fileName of project.files) {
            let fileUrl = hostBaseUrl + gitHubName + '/' + fileName;
            console.log(fileUrl);
            $.getScript(fileUrl);
        }
    });
// });

function findDataForId(data, id) {
    let projectData;
    for (let project of data) {
        if (project.id == id) {
            projectData = project;
            break;
        }
    }
    return projectData;
}

function attachCanvasToContainer() {
    let canvas = document.getElementById("defaultCanvas0");
    let container = document.getElementById("canvasContainer");
    container.appendChild(canvas);
}