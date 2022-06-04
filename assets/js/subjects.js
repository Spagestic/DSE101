// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//reminder
// Open menu 
const reminder = document.querySelector(".reminder");
const reminderToggle = document.querySelector(".reminder-closebtn")

reminderToggle.addEventListener('click', () =>{
        const reminder_visibility = reminder.getAttribute('reminder-data-visible')

        // console.log(reminder_visibility);

        if (reminder_visibility === "true"){
            reminder.setAttribute('reminder-data-visible', false)
        }
        // console.log(reminder_visibility);
}
);