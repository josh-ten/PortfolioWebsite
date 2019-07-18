jQuery.getJSON('./projectRef.json', (data)=>{ loadBoxes(data); });

function loadBoxes(data) {
    for (let project of data) {
        if (!project.exclude && project.title != "") {
            generateBox(project.title, 
                        project.id, 
                        project.description);
        }
    }
}

function generateBox(name, id, strDescription) {
    var container = document.getElementById("grid");
    //Item
    var item = document.createElement("div");    
    item.setAttribute("class", "item");
        //a href
        var link = document.createElement("a");
        link.setAttribute("href", "project.html#" + id);

            //imageContainer
            var imageContainer = document.createElement("div");
            imageContainer.setAttribute("class", "imageContainer");

                //image
                var image = document.createElement("div");
                image.setAttribute("class", "image");

                    //img
                    var img = document.createElement("img");
                    img.setAttribute("src", "./res/projectScreenshots/" + id + ".png");

                //overlay
                var overlay = document.createElement("div");
                overlay.setAttribute("class", "overlay");
                overlay.innerHTML = name;

        //description
        var description = document.createElement("div");
        description.setAttribute("class", "description");
        description.innerHTML = strDescription;

    image.appendChild(img);
    // imageContainer.appendChild(image);
    // imageContainer.appendChild(overlay);
    // link.appendChild(imageContainer);
    link.appendChild(image);
    link.appendChild(overlay);
    item.appendChild(link);
    // item.appendChild(description);

    container.appendChild(item);
}