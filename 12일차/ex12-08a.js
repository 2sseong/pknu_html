const temp = prompt("현재 온도를 입력하세요");
const one = document.querySelector("#one") ?? "요소없음";
const two = document.querySelector("#two") ?? "요소없음";
const three = document.querySelector("#three") ?? "요소없음";
const four = document.querySelector("#four") ?? "요소없음";
const five = document.querySelector("#five") ?? "요소없음";
const state = document.querySelector("#state") ?? "dd";
if (temp < 16){
    one.innerHTML=`추워요 ㄷㄷㄷㄷ`
    state.innerHTML=`<h1>현재온도는 ${temp}이며 추워요</h1>`
} else if (temp>=16 && temp<22){
    two.innerHTML=`시원해요`
    state.innerHTML=`<h1>현재온도는 ${temp}이며 시원해요</h1>`
    
} else if (temp>=22 && temp<28){
    three.innerHTML=`보통이에요`
    state.innerHTML=`<h1>현재온도는 ${temp}이며 보통이에요</h1>`
    
} else if(temp>=28 && temp<32){
    four.innerHTML=`갑갑해요`
    state.innerHTML=`<h1>현재온도는 ${temp}이며 갑갑해요</h1>`
    
} else if(temp>=32){
    five.innerHTML=`더워요`
    state.innerHTML=`<h1>현재온도는 ${temp}이며 더워요</h1>`

}