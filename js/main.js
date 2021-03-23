const btn = document.querySelectorAll('button');
const para = document.querySelectorAll('.para');



for(let i = 0; i <btn.length; i++) {
  btn[i].addEventListener('click', () => {

        btn[i].classList.toggle('active');
        para[i].classList.toggle('active');




  })

}
