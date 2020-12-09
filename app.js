const accordians = document.querySelectorAll(".accordian")

accordians.forEach(accordian => {
    accordian.addEventListener("click", expandAccordian)
})

function expandAccordian(event) {
    const plusMinus = event.currentTarget.querySelector(".plus-minus")
    const content = event.currentTarget.querySelector(".accordian-content")
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"
        plusMinus.textContent = "-"
    } else {
        content.style.display = "none"
        plusMinus.textContent = "+"
    }
}