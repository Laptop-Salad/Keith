const modals = document.getElementsByClassName("modalBtn");

for (let i = 0; i < modals.length; i++) {    
    // Add event listener to modal open button
    modals[i].addEventListener("click", function() {

        // data-for would contain the id of the html modal to open
        let forModal = this.getAttribute('data-for');
        document.getElementById(forModal).showModal();
        document.getElementById(forModal).style.display = "flex";

        // Find all elements in modal
        let elems = document.getElementById(forModal).getElementsByTagName("*");

        // Add event listener to modal close button
        for (let i = 0; i < elems.length; i++) {

            // Item with data-close would be the modal close button
            if(elems[i].getAttribute('data-close')) {
                elems[i].addEventListener("click", function() {
                    document.getElementById(forModal).close();
                    document.getElementById(forModal).style.display = "none";
                })
            }
        }
    });
}