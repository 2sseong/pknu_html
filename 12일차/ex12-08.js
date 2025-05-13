const temp = prompt("현재 온도를 입력하세요")
const mt = document.querySelector("#state") ?? "요소없음";
if (temp < 16){
    mt.innerHTML = 
    `<table>
    <tr>
      <td colspan="6">16미만</td>
      <td colspan="4">16이상~22미만</td>
      <td colspan="4">22이상~28미만</td>
      <td colspan="3">28이상~32 미만</td>
      <td colspan="6">32이상</td>
    </tr>
    <tr>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
    </tr>
    <tr>
      <td colspan="6" id="one">추워요 ㄷㄷㄷㄷ</td>
      <td colspan="4" id="two"></td>
      <td colspan="4" id="three"></td>
      <td colspan="3" id="four"></td>
      <td colspan="6" id="five"></td>
    </tr>
  </table>
  <h1>지금 온도는 ${temp}이며, 상태는 정상온도 이하로 벗어났습니다</h1>`;
} else if(temp>=16 && temp<22){
    mt.innerHTML = 
    `<table>
    <tr>
      <td colspan="6">16미만</td>
      <td colspan="4">16이상~22미만</td>
      <td colspan="4">22이상~28미만</td>
      <td colspan="3">28이상~32 미만</td>
      <td colspan="6">32이상</td>
    </tr>
    <tr>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
    </tr>
    <tr>
      <td colspan="6" id="one"></td>
      <td colspan="4" id="two">거 죽기 딱 좋은 날씨네</td>
      <td colspan="4" id="three"></td>
      <td colspan="3" id="four"></td>
      <td colspan="6" id="five"></td>
    </tr>
  </table>
  <h1>지금 온도는 ${temp}이며, 상태는 시원하네요</h1>`;
} else if(temp>=22 && temp <28){
        mt.innerHTML = 
    `<table>
    <tr>
      <td colspan="6">16미만</td>
      <td colspan="4">16이상~22미만</td>
      <td colspan="4">22이상~28미만</td>
      <td colspan="3">28이상~32 미만</td>
      <td colspan="6">32이상</td>
    </tr>
    <tr>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
    </tr>
    <tr>
      <td colspan="6" id="one"></td>
      <td colspan="4" id="two"></td>
      <td colspan="4" id="three">보통</td>
      <td colspan="3" id="four"></td>
      <td colspan="6" id="five"></td>
    </tr>
  </table>
  <h1>지금 온도는 ${temp}이며, 상태는 보통이에요</h1>`;
} else if(temp>=28 && temp <32){
        mt.innerHTML = 
    `<table>
    <tr>
      <td colspan="6">16미만</td>
      <td colspan="4">16이상~22미만</td>
      <td colspan="4">22이상~28미만</td>
      <td colspan="3">28이상~32 미만</td>
      <td colspan="6">32이상</td>
    </tr>
    <tr>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
    </tr>
    <tr>
      <td colspan="6" id="one"></td>
      <td colspan="4" id="two"></td>
      <td colspan="4" id="three"></td>
      <td colspan="3" id="four">갑갑</td>
      <td colspan="6" id="five"></td>
    </tr>
  </table>
  <h1>지금 온도는 ${temp}이며, 상태는 갑갑하네요</h1>`;
} else{
        mt.innerHTML = 
    `<table>
    <tr>
      <td colspan="6">16미만</td>
      <td colspan="4">16이상~22미만</td>
      <td colspan="4">22이상~28미만</td>
      <td colspan="3">28이상~32 미만</td>
      <td colspan="6">32이상</td>
    </tr>
    <tr>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
      <td class="tp"></td>
    </tr>
    <tr>
      <td colspan="6" id="one"></td>
      <td colspan="4" id="two"></td>
      <td colspan="4" id="three"></td>
      <td colspan="3" id="four"></td>
      <td colspan="6" id="five">더워요 ㄷㄷㄷ</td>
    </tr>
  </table>
  <h1>지금 온도는 ${temp}이며, 상태는 정상온도를 넘겼습니다.</h1>`;
}