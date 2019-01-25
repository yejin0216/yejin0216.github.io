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

wdgtCntrl.forEach( cntrl => {
    cntrl.addEventListener('mouseover', showEditCntrl);
    cntrl.addEventListener('mouseleave', showEllipsisCntrl);
});

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


