// 객체 다루기
const user = {name:"홍길동",age:10}
// 객체의 키로 값을 읽는법
console.log(user['name'])
console.log(user.name)

// 객체를 추가하는 법
user['address'] = "부산"
user.gender = "male"
console.log(user)

// 수정하는법
user.age =17
user['name']= `슈퍼맨`
console.log(user)

// 삭제하는법
delete user['gender']
console.log(user)

// 객체
// const test = {test} // {test:test}

const updated = { ...user , age:20}
console.log(updated)