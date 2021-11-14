const inputNumber1=document.querySelector('.js_number1');
const inputNumber2=document.querySelector('.js_number2');
const inputNumber3=document.querySelector('.js_number3');
const inputNumber4=document.querySelector('.js_number4');
const inputHolder=document.querySelector('.js_holder');
const inputDay=document.getElementById('day-date');
const inputYear=document.getElementById('year-date');
const inputCvv=document.querySelector('.js_cvv');
const textNumber1=document.querySelector('.js_textn1');
const textNumber2=document.querySelector('.js_textn2');
const textNumber3=document.querySelector('.js_textn3');
const textNumber4=document.querySelector('.js_textn4');
const textHolder=document.querySelector('.js_holder_text');
const textExpires_day=document.querySelector('.js_expires_text_day');
const textExpires_year=document.querySelector('.js_expires_text_year');
const textCvv=document.querySelector('.js_cvv_text');
const card=document.querySelector('.js_card');
const card_back=document.querySelector('js_card_back')

inputNumber1.addEventListener('keyup', function(){
    let texto=this.value;
    textNumber1.innerHTML=texto;
})

inputNumber1.addEventListener('keypress',function(e){
    console.log(e);
    if((e.charCode >= 48) && (e.charCode <= 57)){
        return true;
    }else{
        return false;
    }
})
inputNumber2.addEventListener('keyup', function(){
    let texto=this.value;
    textNumber2.innerHTML=texto;
})
inputNumber3.addEventListener('keyup', function(){
    let texto=this.value;
    textNumber3.innerHTML=texto;
})
inputNumber4.addEventListener('keyup', function(){
    let texto=this.value;
    textNumber4.innerHTML=texto;
})
inputHolder.addEventListener('keyup',function(){
    let texto=this.value;
    textHolder.innerHTML=texto;
})
inputDay.addEventListener('change',function(){
    let texto=this.value;
    textExpires_day.innerHTML=`${texto}/`;
})
inputYear.addEventListener('change',function(){
    let texto=this.value;
    textExpires_year.innerHTML=texto;
})
inputCvv.addEventListener('keyup',function(){
    let texto=this.value;
    textCvv.innerHTML=texto;
})
inputCvv.addEventListener('focus',function(){
     card.classList.add('cvv');
})
inputCvv.addEventListener('blur',function(){
    card.classList.remove('cvv');
})

inputNumber1.oninput = function () {
    const maxLenght = this.getAttribute("data-length");

    if (+maxLenght + 1 === this.value.length) {
      inputNumber2.focus();
    }

    if (this.value.length > maxLenght) {
      this.value = this.value.slice(0, maxLenght);
    }
};
inputNumber2.oninput = function () {
    const maxLenght = this.getAttribute("data-length");

    if (+maxLenght + 1 === this.value.length) {
      inputNumber3.focus();
    }

    if (this.value.length > maxLenght) {
      this.value = this.value.slice(0, maxLenght);
    }
};
inputNumber3.oninput = function () {
    const maxLenght = this.getAttribute("data-length");

    if (+maxLenght + 1 === this.value.length) {
      inputNumber4.focus();
    }

    if (this.value.length > maxLenght) {
      this.value = this.value.slice(0, maxLenght);
    }
};

inputNumber4.oninput = function () {
    const maxLenght = this.getAttribute("data-length");

    if (+maxLenght + 1 === this.value.length) {
      inputHolder.focus();
    }

    if (this.value.length > maxLenght) {
      this.value = this.value.slice(0, maxLenght);
    }
};