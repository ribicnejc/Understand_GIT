/**
 * Created by Nejc on 13. 08. 2017.
 */
function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.rsponsive*/
    } else {
        x.className = "topnav";
    }
}