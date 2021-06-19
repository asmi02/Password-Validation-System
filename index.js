document.getElementById('eye').addEventListener('click', changeType)
function changeType(){
    if(
        document.getElementById('passField').type=='password'){
            document.getElementById('passField').type='text'
            this.classList.add('fa-eye')
            this.classList.remove('fa-eye-slash')
        }
    else{
        document.getElementById('passField').type='password'
        this.classList.add('fa-eye-slash')
        this.classList.remove('fa-eye')
    }
}

document.getElementById('passField').addEventListener('keyup', validate)
function validate(){
   let pswd= document.getElementById('passField').value
   if(pswd.length>=8){
       document.getElementById('length').classList.add('valid')
       document.getElementById('length').classList.remove('invalid')
   }else{
    document.getElementById('length').classList.add('invalid')
    document.getElementById('length').classList.remove('valid')
   }


   if(pswd.match(/[A-Z]/)){
    document.getElementById('capital').classList.add('valid')
       document.getElementById('capital').classList.remove('invalid')
   }else{
    document.getElementById('capital').classList.add('invalid')
    document.getElementById('capital').classList.remove('valid')
   }

   if(pswd.match(/[1-9]/)){
    document.getElementById('number').classList.add('valid')
       document.getElementById('number').classList.remove('invalid')
   }else{
    document.getElementById('number').classList.add('invalid')
    document.getElementById('number').classList.remove('valid')
   }

   if(pswd.match(/[@,$,#,%,&,*]/)){
    document.getElementById('spl_character').classList.add('valid')
       document.getElementById('spl_character').classList.remove('invalid')
   }else{
    document.getElementById('spl_character').classList.add('invalid')
    document.getElementById('spl_character').classList.remove('valid')
   }

}
