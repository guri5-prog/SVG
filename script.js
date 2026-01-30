const svg = document.getElementById("canvas");
const undoBtn = document.getElementById("undoBtn");
const countEl = document.getElementById("count");

let circles = [];

svg.addEventListener("click", (e) => {
    const rect = svg.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 60;

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 1.2);
    circle.setAttribute("fill", "#2563eb");

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
});

undoBtn.addEventListener("click", () => {
    const last = circles.pop();
    if (last) svg.removeChild(last);
    updateCount();
});

function updateCount() {
    countEl.textContent = circles.length;
}
