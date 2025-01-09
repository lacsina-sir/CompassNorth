document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");

    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (moreText.classList.contains("hidden")) {
            moreText.classList.remove("hidden");
            readMoreBtn.textContent = "Read Less";
        } else {
            moreText.classList.add("hidden");
            readMoreBtn.textContent = "Read More";
        }
    });
});
