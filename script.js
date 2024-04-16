document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("comment-form");
    const commentsSection = document.getElementById("comments");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.elements["name"].value;
        const comment = form.elements["comment"].value;

        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
            <strong>${name}</strong>: ${comment}
        `;

        commentsSection.appendChild(commentElement);

        form.reset();
    });
});
