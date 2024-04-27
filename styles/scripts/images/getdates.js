
const currentYear = new Date().getFullYear();

const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
}

const lastModifiedDate = document.lastModified;

const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
}
