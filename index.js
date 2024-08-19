let AllStudents = ['كبشاية', 'طنجرة', 'جاط', 'سكينة', 'فحم', 'منقل', 'سياخ'];
function sketchstudents() {
    let students = document.getElementById('students');
    students.innerHTML = '';
    AllStudents.forEach(s => {
        let li = document.createElement('li');
        li.innerHTML = s;
        let span = document.createElement('span');
        span.innerHTML = " X";
        span.style.color = "red";
        span.addEventListener('click', () => { removestudents(s) });
        li.appendChild(span);
        students.appendChild(li);
    });
}
function addstudents() {
    let name = document.getElementById("name");
    AllStudents.push(name.value);
    name.value = "";
    sketchstudents();
}
function removestudents(x) {

    AllStudents = AllStudents.filter(s => s != x);
    sketchstudents();
}
sketchstudents();