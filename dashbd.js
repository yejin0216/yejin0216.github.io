/** 대시보드에 필요한 공통함수 정의
 *  @author yejin kim
 */


/* 패널 Switch */
const items = document.querySelectorAll('.item');
const itemkeys = Array.from(items).map(item => item.dataset.target);
function switchPanel(e) {
    let selectedKey = this.dataset.target;
    this.classList.toggle('selected');
    document.querySelector(`.panel[data-target="${selectedKey}"]`).classList.toggle('hide');

    itemkeys.filter(itemkey => {
        if (itemkey != selectedKey) {
            document.querySelector(`.item[data-target="${itemkey}"]`).classList.remove('selected');
            document.querySelector(`.panel[data-target="${itemkey}"]`).classList.add('hide');
        }
    })
}
items.forEach(item => item.addEventListener('click', switchPanel));


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


