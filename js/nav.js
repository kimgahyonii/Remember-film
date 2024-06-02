const toggleMenu = () => {
    const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
    const navListUl = document.getElementsByClassName("nav-list")[0];
    const toggleI = navToggleDiv.getElementsByTagName("i")[0];

    navToggleDiv.onclick = () => {
        navListUl.classList.toggle("show-menu");

        toggleI.classList.toggle("bi-three-dots-vertical");
        // toggleI.classList.toggle.add("bi-list");
        // toggleI.classList.remove("bi-x-lg");
        // toggleI.classList.remove("bi-x-lg");
        // toggleI.classList.toggle.add("bi-list");
        toggleI.classList.toggle("bi-x-lg");
    }
}
toggleMenu();
