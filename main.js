
// select all section 
const sections = document.querySelectorAll('section');

// select all li 
const navLi = document.querySelectorAll('nav .container ul li');

// when window is scrolling then trigger scroll event
window.addEventListener('scroll', ()=>{
    let currentPosition = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        const sectionResult = sectionTop - (sectionHeight / 3);
        const finalResult = pageYOffset >= sectionResult;

        if(finalResult) {
            currentPosition = section.getAttribute('id');
            console.clear();
            console.log("page Scroll: " + pageYOffset + " section name : "+ currentPosition + " section top : " + sectionTop + " section height : " + sectionHeight + " section result : "+ sectionResult + " final result : "+ finalResult);
            
        }

        navLi.forEach(li => {
            li.classList.remove('active');
            if(li.classList.contains(currentPosition)){
                li.classList.add('active');
            }
        })
        
    })
});