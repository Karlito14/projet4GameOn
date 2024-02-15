const focusableElementsArray = [
    '[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
];

const modalContent = document.querySelector('#content');
const focusableElements = Array.from(modalContent.querySelectorAll(focusableElementsArray));
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

export class modal { 

    static launchModal(modal, main) {
        this.focusInFirstFocusableElement();

        modal.style.display = "block";
        modal.removeAttribute('aria-hidden');
        main.setAttribute('aria-hidden', true);
    }

    static closeModal(modal, main) {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', true);
        main.removeAttribute('aria-hidden');
    }

    static focusInFirstFocusableElement() {

        setTimeout(() => {
            firstFocusableElement.focus(); 
        },100);
    }

    static closeFocusInModal(event) {

        let focusableElement;

        const elementfocus = modalContent.querySelector(':focus');

        if(elementfocus === lastFocusableElement && !event.shiftKey) {
            event.preventDefault();
            focusableElement = firstFocusableElement;
        } else if (elementfocus === firstFocusableElement && event.shiftKey) {
            event.preventDefault();
            focusableElement = lastFocusableElement;
        }

        if(focusableElement) {
            focusableElement.focus();
        }
    }
}