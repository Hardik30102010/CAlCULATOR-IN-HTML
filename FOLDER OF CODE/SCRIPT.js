function showpage(id) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
