function darkMode() {
    const body = document.body; 
    body.classList.toggle("dark-mode");
    const footer = document.getElementById('fot');
    footer.classList.toggle("dark-mode1");
    const header = document.getElementById('hed');
    header.classList.toggle("dark-mode2");
    const table = document.getElementById('tbl1');
    table.classList.toggle("dark-mode");
}