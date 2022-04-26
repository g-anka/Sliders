function init() {

    const btnPrev = document.querySelector(".slider-prev")
    const btnNext = document.querySelector(".slider-next")
    const allSliderItems = document.querySelectorAll(".slider-item")
    const pagination = document.querySelector(".slider-pagination")
    let index = 0;

//добавление активного класса текущему индексу
    function makeSliderActive(i) {
        for (let slider of allSliderItems) {
            console.log("slider.classList", slider.classList)
            slider.classList.remove("active")
        }
        allSliderItems[i].classList.add("active")
        console.log("allSliderItems[i].classList", allSliderItems[i].classList)

        changePagination(i)
    }

//переключение слайдов
//назад
    function goPrev() {
        if (index > 0) {
            index--
        } else {
            index = allSliderItems.length - 1
        }
        console.log("current index", index)
        makeSliderActive(index)
    }

//вперед
    function goNext() {
        if (index < allSliderItems.length - 1) {
            index++
        } else {
            index = 0
        }
        console.log("current index", index)
        makeSliderActive(index)
    }

    function changePagination(i) {
        pagination.innerText = `${i + 1}/${allSliderItems.length}`
    }

//стартовый слайд
    makeSliderActive(index)

    btnPrev.onclick = goPrev;
    btnNext.onclick = goNext;
}

window.onload = init;