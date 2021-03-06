$.getJSON('./projectRef.json', data => { 
    let url = window.location.href;
    let projectId = url.split('#')[1];
    let project = findDataForId(data, projectId);
    let gitHubName = (project.gitHubName == null) ? 
        project.title.replace(/\s/g, '') : project.gitHubName;
    let hostBaseUrl = "https://cdn.jsdelivr.net/gh/josh-ten/";
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js');
    for (let fileName of project.files) {
        let fileUrl = hostBaseUrl + gitHubName + '/' + fileName;
        $.getScript(fileUrl);
    }

    let topnav = document.getElementById("topnav");
    let githubLink = document.createElement("a");
    githubLink.setAttribute("href", hostBaseUrl + projectId);
    githubLink.innerHTML = projectId;
    // https://cdn.jsdelivr.net/gh/josh-ten/AdditiveHarmonics/harmonic.js?_=1563442379444
    topnav.appendChild(githubLink);
});

function findDataForId(data, id) {
    return data.find((project) => { return project.id == id; });
}

function attachCanvasToContainer() {
    let canvas = document.getElementById("defaultCanvas0");
    let container = document.getElementById("canvasContainer");
    container.appendChild(canvas);
}