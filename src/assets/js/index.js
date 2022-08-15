import './main.js'
import './timeline.js'
import './skills.js'

const showMoreObj = document.querySelector('.show-more')
const timeLineObj = document.querySelector('.section-timeline')
showMoreObj.addEventListener("click", (e) => {
    if (showMoreObj.innerHTML == '+ Mostrar mais') {
        showMoreObj.innerHTML = '- Mostrar menos'
        timeLineObj.style.height = 'auto'
    } else {
        console.log('eae')
        showMoreObj.innerHTML = '+ Mostrar mais'
        timeLineObj.style.height = '600px'
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'instant',
        });
    }
})