const $popup = document.querySelector("#popup");//엄격한 변수 $popup을 선언하고, #popup(class=popup) 대입한다. //querySelector(" ") 괄호, 따옴표 내에 CSS선택자를 넣어준다.
$popup.children[1].addEventListener("click", dot);//#popup의 자식들 중 botton(children[1])을 선택하여 click했을 때(조건) dot이라는 함수를 호출한다
function dot() {
    $popup.style.display = 'none';
} //dot함수에 style.display = none 입력


// dot() == 함수
// $popup == 변수


const $bottom = document.querySelector("footer");
$bottom.addEventListener("click", bo);
function bo() {
    $popup.style.display = 'block'; 
}


const $subMenu12 = document.querySelector("nav li:first-child a:last-child"); // 엄격한 변수 $subMenu12를 선언하고 querySelector로 선택한 요소를 대입한다.
function red() {
    $subMenu12.style.background = 'red';
}
//함수가 호출되었을 때 $subMenu12.style.background = 'red' 실행


const $subMenu24 = document.querySelector("#blue");
$subMenu24.addEventListener("click", blue);
function blue() {
    $subMenu24.style.background = 'blue';
}


const $subMenu41 = document.querySelector("#subMenu41");
function subMenu41() {
    $subMenu41.style.color = 'aqua';
    $subMenu41.style.textDecoration = 'none';
}
/*a {text-decoration : none;}
스크립트에서는 하이픈을 사용할 수 없다.
대신 띄어쓰기 없이 대문자를 사용한다.
textDecoration*/


$popup.addEventListener("click", notice);
    function notice() {
    $popup.style.background = 'tomato';
    }
