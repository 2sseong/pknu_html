console.log("파일이 임포트 되었습니다")

let num = 123
let str = "456"
let bit = true
console.log("=====================note=======================")
console.log(`${typeof(num)} 타입 ${num}의 자료형을 변환하면`)
console.log(String(num), typeof String(num))
console.log(Boolean(num), typeof Boolean(num))
console.log(`${typeof(str)} 타입 ${str}의 자료형을 변환하면`)
console.log(Number(str), typeof Number(str))
console.log(Boolean(str), typeof Boolean(str))
console.log(`${typeof(bit)} 타입 ${bit}의 자료형을 변환하면`)
console.log(String(bit), typeof String(bit))
console.log(Number(bit), typeof Number(bit))
console.log("============ Test ============")
console.log("num + str:",num + str, typeof(num+str))
console.log("num + bit:",num + bit, typeof(num+bit))
console.log("bit + str",bit + str, typeof(bit+str))
console.log("============ Tip ============")
console.log('num+"":',num+"",typeof(num+""))
console.log('!!num:',!!num,typeof(!!num))
console.log('str*1:',str*1,typeof(str*1))
console.log('+str:',+str,typeof(+str))
console.log('!!str:',!!str,typeof(!!str))
console.log('bit+"":',bit+"",typeof(bit+""))
console.log('bit*1:',bit*1,typeof(bit*1))
console.log('+bit:',+bit,typeof(+bit))

const birth = prompt("태어난 년도를 입력하세요")
console.log(birth)
if (birth == ""){
    alert("입력해주셈")
}
else if (birth>2025){
    alert("아직 안태어났네요")
}
else{
    age = 2025-Number(birth)
    if (age >19){
        document.writeln("<h1>당신은 성인입니다 건강한 생활을 하세요</h1>")
        console.log("원래성인")
    }
    else if (age = 19){
        document.writeln("<h1>이제 성인이시군요 축하축하</h1>")
        console.log("이제성인")
    }
    else{
        document.writeln("<h1>이제 성인이시군요 축하축하</h1>")
        console.log("미성년자")
    }
}
