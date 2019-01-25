/** view 제어함수
 *  @author yejin kim
 */

// 위젯 수정 버튼 Toggle 제어
const wdgtCntrl = document.querySelectorAll('.widget-control');
function showEditCntrl(e) {
    this.querySelector('.fa-ellipsis-v').classList.add('fa-pen');
    this.querySelector('.fa-pen').classList.remove('fa-ellipsis-v');
}
function showEllipsisCntrl(e) {
    this.querySelector('.fa-pen').classList.add('fa-ellipsis-v');
    this.querySelector('.fa-ellipsis-v').classList.remove('fa-pen');
}
function moveToEditMode(e) {
    let dashbd = document.getElementsByClassName('dashbd')[0];
    let editMode = document.getElementsByClassName('edit-mode')[0];
    dashbd.style.display = 'none';
    editMode.style.display = 'block';
}

wdgtCntrl.forEach( cntrl => {
    cntrl.addEventListener('mouseover', showEditCntrl);
    cntrl.addEventListener('mouseleave', showEllipsisCntrl);
    cntrl.addEventListener('click', moveToEditMode)
});




/* 타이틀 Toggle */
const titles = document.querySelectorAll('.panel-subtitle');
function toggleContent(e) {
    let keycode = this.getAttribute('data-target');
    let content = document.querySelector(`.panel-contents[data-target="${keycode}"]`);
    this.querySelector('.fa-angle-down').classList.toggle('fa-angle-up');
    content.classList.toggle('hide');
}
titles.forEach(title => title.addEventListener('click', toggleContent));


/* 데이터 개체 Tree Toggle */
const fields = document.querySelectorAll('.contents-item');
function toggleField(e) {
    this.childNodes[0].classList.toggle('fa-caret-right');
    this.parentNode.childNodes[2].classList.toggle('hide');
}
fields.forEach(field => field.addEventListener('click', toggleField));


/* 패널 horizontal resize */
const grips = document.querySelectorAll('.panel-grip');
let startY, startH, gripcode, resizer;
function moveGrip(e) {
    gripcode = this.getAttribute('data-target');
    resizer = document.querySelector(`.contents-list[data-target="${gripcode}"]`);

    startY = e.clientY;
    startH = parseInt(document.defaultView.getComputedStyle(resizer).height, 10);

    document.documentElement.addEventListener('mousemove', dragGrip);
    document.documentElement.addEventListener('mouseup', stopGrip);
}
function dragGrip(e) {
    resizer.style.maxHeight = (startH+e.clientY-startY) + 'px';
}
function stopGrip(e) {
    document.documentElement.removeEventListener('mousemove', dragGrip);
    document.documentElement.removeEventListener('mouseup', stopGrip);
}
grips.forEach(grip =>grip.addEventListener('mousedown', moveGrip));


