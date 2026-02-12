function showpage(id) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function append(value) {
            document.getElementById('display').value += value;
                }
function clearDisplay() {
            document.getElementById('display').value = "";
        }
