const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const studentNoElement = document.querySelector('span.studentNo');
const emailElement = document.querySelector('span.email');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
};
const setStudentNo = (studentno) => {
  studentNoElement.textContent = studentno;
};
const setEmail = (email) => {
  emailElement.textContent = email;
};
const localName = localStorage.getItem('name');
const localStudentNo = localStorage.getItem('studentno');
const localEmail = localStorage.getItem('email');
if (localName) setUserName(localName);
if (localStudentNo) setStudentNo(localStudentNo);
if (localEmail) setEmail(localEmail);

console.log(inputModalElement);
nameH1Element.onclick = () => {
  inputModalElement.showModal();
  // const inputName = prompt('이름을 입력해 주세요.');
  // if (inputName) {
  //   localStorage.setItem('name', inputName);

  //   setUserName(inputName);
  // } else {
  //   alert('이름이 입력되지 않았습니다.');
  // }
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const ModalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(ModalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key === 'userName') {
      if (value === '') alert('이름을 입력해주세요');
      else setUserName(value);
    }
    if (key === 'studentNo') {
      if (value.length >= 9) alert('학번이 9자리 초과하면 안됩니다. 다시입력해주세요.');
      else setStudentNo(value);
    }
    if (key === 'email') {
      if (!(value.endsWith('.com') && value.includes('@'))) {
        alert('이메일 형식이 올바르지 않습니다 ex) @가 포함되고 .com으로 끝나야 합니다.');
      }
      else setEmail(value);
    }
  }
  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};

