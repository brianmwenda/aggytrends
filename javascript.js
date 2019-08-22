
 
document.querySelector('.button3').addEventListener('click',function(){
    alert('Thank you for getting in touch here is my contact '+ '0702767516');
});
document.querySelector('.button4').addEventListener('click',function(){
    alert('Thank you for getting in touch here is my contact '+ <h1>0704903968</h1>);
});





function getInfo(){
    var objectPeople ={
        username:'willykinns',
        password:'kinns'
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
   // document.querySelector('.imageuploader').style.display='none';

    if(username === objectPeople.username && password === objectPeople.password){
       
            document.querySelector('.imageuploader').style.display = 'inline';
            document.querySelector('.imageuploader').style.border = '100px';
        image =  document.querySelector('.img1').value;
            
        
        document.getElementById('image-uploader').value;
       edit();
        
    };
}


/*

function edit(){
    var checklist = document.getElementById("checklist1");

var items= checklist.querySelectorAll("market-shoes");
var inputs= checklist.querySelectorAll("input");

for (var i = 0; i<items.length; i++){
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}
function editItem() {
    this.className = "edit";
    var input= this.querySelectorAll("input");
    input.setSelectionRange(0, input.value.length);
    
}
function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeypress(event) {
    if(event.which=== 13){
        updateItem.call(this);
    }
    
}
}*/



console.log(dir_photos = '');