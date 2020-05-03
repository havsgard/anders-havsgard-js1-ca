document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let p= document.querySelectorAll("blockquote > p");
        let quotation = document.querySelector("p replacing");

        p.forEach(paragraph => {
            if (!paragraph.contains(quotation)) {
                paragraph.innerText = paragraph.innerText
                    .replace(/\sthe\s/g, " banana ")
                    .replace(/The\s/g, "Banana ");
            }
        });
    }, 3000);
});