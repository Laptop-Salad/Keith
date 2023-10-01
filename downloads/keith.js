const modals = document.getElementsByClassName("modalBtn");
const yesEvent = new Event("yes");
const noEvent = new Event("no");

function yesModal(modal) {
    modal.close();
    modal.style.display = "none";
    modal.dispatchEvent(yesEvent);
}

function noModal(modal) {
    modal.close();
    modal.style.display = "none";
    modal.dispatchEvent(noEvent);
}

function closeModal(modal) {
    modal.close();
    modal.style.display = "none";
}

for (let i = 0; i < modals.length; i++) {   
    let forModal = modals[i].getAttribute('data-for');
    let modal = document.getElementById(forModal);

    // Add event listener to modal open button
    modals[i].addEventListener("click", function() {
        // data-for would contain the id of the html modal to open
        modal.showModal();
        modal.style.display = "flex";
    });
        
    // Find all elements in modal
    let elems = modal.getElementsByTagName("*");

    // Add event listener to modal close button
    for (let i = 0; i < elems.length; i++) {

        // Item with data-close would be the modal close button
        if(elems[i].getAttribute('data-close')) {
            elems[i].addEventListener("click", function () {
                closeModal(modal);
            });
        }

        // Item with data-yes would be the modal close button and fire yes event
        if(elems[i].getAttribute('data-yes')) {
            elems[i].addEventListener("click", function () {
                yesModal(modal);
            });
        }

        // Item with data-no would be the modal close button and fire yes event
        if(elems[i].getAttribute('data-no')) {
            elems[i].addEventListener("click", function () {
                noModal(modal);
            });
        }

    };
}