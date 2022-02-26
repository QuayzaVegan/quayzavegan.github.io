

window.onload = function () {
    let emailstate = false;
    let emailmodal =document.getElementsByClassName('email-modal')[0];
    let closebutton = document.getElementsByClassName('email-modal__close-btn')[0];
    let emailinput = document.getElementsByClassName('email-modal__input')[0];
    let emailbutton = document.getElementsByClassName('email-modal__button')[0];
    let thankcontainer = document.getElementsByClassName('email-thank')[0]
    let declineoffer =document.getElementsByClassName('email-modal__decline-offer')[0]

    function emailIsValid (email) {
        return /\S+@\S+/.test(email)
    }

    let showmodal = () => {
        if(emailstate == false) {
            emailmodal.classList.add('email-modal--visible');
            emailstate = true
        }
    }

    let closemodal = () => {
        emailmodal.classList.remove('email-modal--visible');
    }

    let adderrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0] .classList.add ('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0] .classList.add ('email-modal__error-message--active');
    }

    let removeerrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0] .classList.remove ('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0] .classList.remove ('email-modal__error-message--active');
    }

    let showthankmessage = () => {
        thankcontainer.classList.add('email-thank--success');
        setTimeout (() => {
            closemodal();
        }, 3000)
    }

    closebutton.addEventListener('click', () => {
        closemodal();
     });

    emailinput.addEventListener('click', () => {
        removeerrors();
    });

    emailbutton.addEventListener('click', ()  => {
        if(emailIsValid(emailinput.value)) {
            showthankmessage();
        } else {
            adderrors();
        }
    })

    declineoffer.addEventListener('click', () => {
        closemodal();
    })
    
    document.body.addEventListener('mouseout', () => {
        showmodal();
    });
    
}