// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};


// Definition of type 'Address'
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

// Definition of type 'User'
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}

// TypeScript를 사용하는 이유 1 - 에디터 상에서 타입 검증을 통한 에러 방지를 할 수 있다
fetchUser().then(function(response){
  response.address.city;
})


function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user[0].name;
      email.innerText = user[0].email;

      //address.innerText = user[0].addres;
      /*
        기존JS : 위와 같은 코드상의 오류를 화면에서만 확인할 수 있음
        => TS는 이와 같은 에러를 사전에 방지할 수 있다
      */

      address.innerText = user[0].address.s;

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
