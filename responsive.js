function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    arrow.classList.toggle('rotate');
}