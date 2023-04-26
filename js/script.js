const  btnNavEl = document.getElementById("btn-mobile-nav");
const  headerEl = document.getElementById("header-nav");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});


//Sticky Navigation

const  sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky")
    }

    if(ent.isIntersecting){
        document.body.classList.remove ("sticky")
    }
},{
    root: null,
    threshold: 0,
    rootMargin:'-60px'
});

obs.observe(sectionHeroEl);