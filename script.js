//your code here
document.addEventListener("DOMContentLoaded", function () {
    // Create a div element
    let div = document.createElement("div");

    // Create an anchor element
    let anchor = document.createElement("a");
    anchor.textContent = "My current favourite song is Shape of You";
    anchor.href = "https://www.youtube.com/watch?v=JGwWNGJdvx8"; // Official YouTube link
    anchor.target = "_blank"; // Opens the link in a new tab

    // Append anchor inside div
    div.appendChild(anchor);

    // Append div to the body
    document.body.appendChild(div);
});
