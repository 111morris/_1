var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
 for (tablink of tablinks) {
  tablink.classList.remove("active_link");
 }
 for (tabcontent of tabcontents) {
  tabcontent.classList.remove("active_tab");
 }
 event.currentTarget.classList.add("actie_link");
 document.getElementById(tabname).classList.add("active_tab")
}