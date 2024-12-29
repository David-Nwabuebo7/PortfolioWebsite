(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


let sender = document.querySelector('.send')


sender.addEventListener('click',(e)=>{
    e.preventDefault()
    location.assign('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=davidnwabuebo7@gmail.com')
    console.log('clicked');
})