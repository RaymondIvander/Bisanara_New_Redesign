function changeImage(imageSrc) {
    const displayImage = document.getElementById("display-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    displayImage.src = imageSrc;

    thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));

    const activeThumbnail = Array.from(thumbnails).find(
        (thumbnail) => thumbnail.src.includes(imageSrc)
    );
    if (activeThumbnail) {
        activeThumbnail.classList.add("active");
    }
}
