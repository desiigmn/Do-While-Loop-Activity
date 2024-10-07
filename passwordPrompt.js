function passwordPrompt() {
    let correctPassword = "ainie.gm15";
    let userPassword;

    do {
        userPassword = prompt("Enter the device's password:");
        
        if (userPassword === null) {
            alert("Action canceled.");
            return;
        }

        if (userPassword !== correctPassword) {
            alert("Incorrect, try again.");
        }
    } while (userPassword !== correctPassword); 

    alert("Access granted.");
}
