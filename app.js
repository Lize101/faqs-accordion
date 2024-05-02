// Variable

const accordion = document.getElementsByClassName('accordion-container');

// for loop going through each element in the accordion (each accordion container)
for (i = 0; i < accordion.length; i++) {
    console.log('clicked');
    //'accordion[i]' represents the current accordion item element
    accordion[i].addEventListener('click', function () {
        //'this' refers to the element that triggered the event aka each specific accordion item container
        console.log('clicked');
        this.classList.toggle('active');
    })
}