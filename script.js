function myFunc() {

    let displayName = document.getElementById("myName");
    let displayRollno = document.getElementById("myRollno");
    let displayDate = document.getElementById("dateToday");

    displayName.innerText = "Bhavay Garg";
    displayRollno.innerText = "201510009";

    // date
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;

    displayDate.innerText = formattedToday;
}