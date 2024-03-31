
function generate(){
    let chara =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
    let password = ""; 
    for(i=0;i<12;i++){
        let index = Math.floor(Math.random() * chara.length);
        password += chara[index];
        
    }
    let  pwd = document.getElementById("Password");
    pwd.textContent = password;
}
function copyToClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = document.getElementById("Password").innerText;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      alert('Password copied to clipboard: ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
  }