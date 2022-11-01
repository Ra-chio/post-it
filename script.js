var random_background_color = [
    "#FFF700",
    "#FB4A7A",
    "#FF7400",
    "#23FF00",
    "#00C1FF",
    "#CC6BFF",
];

var i = 0;

window.onload = document.querySelector("#text-input").select();

document.querySelector("#add-note").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
});

document.querySelector("#text-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const text = document.querySelector("#text-input");
        createPostIt(text.value);
        event.preventDefault();
        text.value = "";
    }
});

createPostIt = (text) => {
    let note = document.createElement("div");
    let noteContent = document.createElement("div");
    let dlt_btn = document.createElement("i");
    let note_msg = document.createElement("h1");

    note.className = "note";
    noteContent.className = "noteContent";
    dlt_btn.id = "dlt";
    dlt_btn.classList.add("fa-solid");
    dlt_btn.classList.add("fa-trash");
    note_msg.textContent = text;

    noteContent.appendChild(note_msg);
    noteContent.appendChild(dlt_btn);
    note.appendChild(noteContent);

    if (i > random_background_color.length - 1) {
        i = 0;
    }

    note.setAttribute(
        "style",
        `background-color: ${random_background_color[i++]}`
    );

    note.addEventListener("mouseover", () => {
        dlt_btn.style.display = "flex";
    });

    note.addEventListener("mouseout", () => {
        dlt_btn.style.display = "none";
    });

    dlt_btn.addEventListener("click", () => {
        note.remove();
    });

    document.querySelector("#notes-list").appendChild(note);
};
