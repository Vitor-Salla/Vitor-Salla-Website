const timeLineInfo = require('../time-line.json')

// create the html of the cards
function createCard(titleString, subtitleString, paragraphString, side) {
    let mainDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let thirdDiv = document.createElement('div');
    let title = document.createElement('h3');
    let subtitle = document.createElement('h6');
    let paragraph = document.createElement('p');

    if (side) mainDiv.classList.add('timeline', 'left', 'fade-in')
    else mainDiv.classList.add('timeline', 'right', 'fade-in')
    secondDiv.classList.add('card')
    thirdDiv.classList.add('card-body', 'p-4')
    title.classList.add('card-title')
    subtitle.classList.add('card-subtitle')
    paragraph.classList.add('mb-0')

    title.textContent += titleString
    subtitle.textContent += subtitleString
    paragraph.textContent += paragraphString

    thirdDiv.appendChild(title)
    thirdDiv.appendChild(subtitle)
    thirdDiv.appendChild(paragraph)
    secondDiv.appendChild(thirdDiv)
    mainDiv.appendChild(secondDiv)

    return mainDiv
}

// add the created cards to webpage
function addtimeline() {
    let side = true
    const mainTimeline = document.querySelector(".main-timeline")
    for (let i in timeLineInfo) {
        let year = i
        let subtitle = timeLineInfo[i]['subtitle']
        let body = timeLineInfo[i]['body']
        let card = createCard(year, subtitle, body, side)
        mainTimeline.appendChild(card)

        if (side) side = false
        else side = true
    }
}


// Create fade effect on the timeline elements
function fadeIn() {
    const fadeInObj = document.querySelectorAll(".fade-in")

    const options = {
        threshold: 0.7,
        rootMargin: "0px"
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(
                entry => {
                    if (!entry.isIntersecting) {
                        return
                    } else {
                        entry.target.classList.add("appear")
                        observer.unobserve(entry.target)
                    }
                }
            )
        }, options)

    fadeInObj.forEach(
        section => {
            observer.observe(section);
        }
    )
}



function main() {
    addtimeline()
    fadeIn()
}

main()