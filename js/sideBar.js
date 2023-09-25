
    function OpenSideBar() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    }


    function CloseSideBar() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "#111";
    }
function FooterSide(){
    document.getElementById('footerSide').style.width = "100%"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function CloseFooter(){
    document.getElementById('footerSide').style.width = "0";
    document.body.style.backgroundColor = "#111";
}
// const sidebar = document.getElementById("mySidenav");
// const sidebarToggle = document.getElementById("sidebar-toggle");
// sidebarToggle.addEventListener("click", () => {
//    x = document.getElementById("mySidenav").style.width = "0px";
//     if (x) {
//         document.getElementById("mySidenav").style.width = "250px";
//         document.getElementById("main").style.marginLeft = "250px";
//         document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//     } else {
//        return{
//         x
//        }
       
       
//     }


// })
