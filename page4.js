document.getElementsByClassName("button-submit")[0].onclick = function() {
    var new_story = document.createElement("div");
    new_story.append(document.getElementById("story").value);
    document.getElementById("stories").append(new_story);
}
