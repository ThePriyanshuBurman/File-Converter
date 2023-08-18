document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const input = document.querySelector(".file-name input");
    const save = document.querySelector(".save-as select");
    const btn = document.querySelector(".button1");


    btn.addEventListener("click", () => {
        const blob = new Blob([textarea.value], { type: save.value });
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = input.value;
        link.href = fileUrl;
        link.click();
    });
});