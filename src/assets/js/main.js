import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

let flag = true

document.addEventListener("click", (e) => {
    const element = e.delegateTarget.activeElement
    const arrow = element.querySelector('i')
    if (element.id == 'dropdownMenuLink' && flag) {
        arrow.classList.add('bi-caret-left-fill')
        arrow.classList.remove('bi-caret-down-fill')
        if (flag) flag = false
    } else {
        arrow.classList.add('bi-caret-down-fill')
        arrow.classList.remove('bi-caret-left-fill')
        flag = true
    }
})

