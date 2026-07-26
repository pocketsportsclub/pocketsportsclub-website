const previewImages = document.querySelectorAll(".workbook-preview-image");

const lightbox = document.createElement("div");
lightbox.className = "workbook-lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close preview">&times;</button>
    <img class="lightbox-image" alt="Expanded workbook preview">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeButton = lightbox.querySelector(".lightbox-close");

previewImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
    });
});

function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightbox();
    }
});