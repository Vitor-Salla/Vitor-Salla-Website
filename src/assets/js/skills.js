const hardSkills = require('../hard-skills.json')
const softSkills = require('../soft-skills.json')

function createSkill(titleString, descriptionString, idString) {
    let mainDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let thirdDiv = document.createElement('div');
    let title = document.createElement('h5');
    let description = document.createElement('p');

    secondDiv.classList.add('progress', 'mx-auto')
    thirdDiv.classList.add('progress-bar')
    thirdDiv.id = idString
    title.classList.add('progress-bar-text')
    description.classList.add('skill-description')

    title.textContent += titleString
    description.textContent += descriptionString

    thirdDiv.appendChild(title)
    secondDiv.appendChild(thirdDiv)
    mainDiv.appendChild(secondDiv)
    mainDiv.appendChild(description)

    return mainDiv
}


function setBarValue(progressBar) {
    try {
        let value = hardSkills[progressBar.id]['value']
        progressBar.style.width = `${value}%`
    } catch {
        let value = softSkills[progressBar.id]['value']
        progressBar.style.width = `${value}%`
    }
}

function handleHardSkills() {
    for (let i in hardSkills) {
        let skillsDiv = document.querySelector('.hard-skills-div')
        let titleString = hardSkills[i]['title']
        let descriptionString = hardSkills[i]['description']
        let skill = createSkill(titleString, descriptionString, i)

        skillsDiv.appendChild(skill)
    }
}

function handleSoftSkills() {
    for (let i in softSkills) {
        let skillsDiv = document.querySelector('.soft-skills-div')
        let titleString = softSkills[i]['title']
        let descriptionString = softSkills[i]['description']
        let skill = createSkill(titleString, descriptionString, i)

        skillsDiv.appendChild(skill)
    }
}

function loadProgressBar() {
    const progressBar = document.querySelectorAll('.progress-bar')
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
                        setBarValue(entry.target)
                        observer.unobserve(entry.target)
                    }
                }
            )
        }, options)

    progressBar.forEach(
        section => {
            observer.observe(section);
        }
    )
}

function main() {
    handleSoftSkills()
    handleHardSkills()
    loadProgressBar()
}

main()


