document.addEventListener('DOMContentLoaded', function(){
    const popUpUlEl = document.querySelectorAll('.main-ul')

    popUpUlEl.forEach(function(eachUl){
        eachUl.addEventListener('click', function(e){

            const currentLi = e.currentTarget
            currentLi.childNodes[5].classList.toggle('active-media')

        })
    })

    const popUpMobileEl = document.querySelector('.pop-up-mobile')
    const popUpMobileBtn = document.querySelector('.main-nav .fa-bars')

    popUpMobileBtn.addEventListener('click', function(){
        popUpMobileEl.classList.toggle('active-pop-up')
    })

    const toggleEl = document.querySelector('#check')
    const threeCardsEl = document.querySelector('.three-money-cards')

    toggleEl.checked = true

    const starterNumber = document.querySelector('#starterNumber')
    const professionalNumber = document.querySelector('#professionalNumber')
    const businessNumber = document.querySelector('#businessNumber')

    toggleEl.addEventListener('input', function(){
        changeMode()
    })

    const questionsEl = document.querySelectorAll('.question-item .h3-ques')

    questionsEl.forEach(function(eachQues){
        eachQues.addEventListener('click', function(e){
            const currentQuest = e.currentTarget

            if(currentQuest.id === 'ques1'){
                currentQuest.parentNode.childNodes[3].classList.toggle('ques-on')
            }

            if(currentQuest.id === 'ques2'){
                currentQuest.parentNode.childNodes[3].classList.toggle('ques-on')
            }

            if(currentQuest.id === 'ques3'){
                currentQuest.parentNode.childNodes[3].classList.toggle('ques-on')
            }

            if(currentQuest.id === 'ques4'){
                currentQuest.parentNode.childNodes[3].classList.toggle('ques-on')
            }
        })
    })

    const mainNavEl = document.querySelector('.main-nav')
 
    document.addEventListener('scroll', function(){
        if(scrollY > 1){
            mainNavEl.classList.add('main-nav-full')
        }
        else{
            mainNavEl.classList.remove('main-nav-full')
        }
    })

    const productLi = document.querySelector('#productNormalNav')
    const industriesLi = document.querySelector('#industriesNormalNav')
    const templatesLi = document.querySelector('#templatesNormalNav')

    const popUpProductEl = document.querySelector('#pop-up-product')

    const popUpindustriesEl = document.querySelector('#pop-up-industries')

    const popUptemplatesEl = document.querySelector('.pop-up-third')

    productLi.addEventListener('mouseover', function(){

        popUpProductEl.classList.add('active')
        popUpindustriesEl.classList.remove('active')
        popUptemplatesEl.classList.remove('active')

        popUpProductEl.addEventListener('mouseleave', function(){
            popUpProductEl.classList.remove('active')
        })
    })

    industriesLi.addEventListener('mouseover', function(){

        popUpindustriesEl.classList.add('active')
        popUpProductEl.classList.remove('active')
        popUptemplatesEl.classList.remove('active')

        popUpindustriesEl.addEventListener('mouseleave', function(){
            popUpindustriesEl.classList.remove('active')
        })
    })

    templatesLi.addEventListener('mouseover', function(){

        popUptemplatesEl.classList.add('active')
        popUpProductEl.classList.remove('active')
        popUpindustriesEl.classList.remove('active')

        popUptemplatesEl.addEventListener('mouseleave', function(){
            popUptemplatesEl.classList.remove('active')
        })
    })

    function changeMode(){
        if(toggleEl.checked){
            
            starterNumber.textContent = '$ 17'
            professionalNumber.textContent = '$ 32'
            businessNumber.textContent = '$ 52'    
        }
        else{
            starterNumber.textContent = '$ 24'
            professionalNumber.textContent = '$ 39'
            businessNumber.textContent = '$ 79'
        }
    }

})