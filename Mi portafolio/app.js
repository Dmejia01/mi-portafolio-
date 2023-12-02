const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendemail)

const serviceid = 'service_mjjdv1n'
const templateid = 'template_dh6ff96'
const apikey = 'jARlm7oVwED9UXsgi'


function sendemail (event) {
event.preventdefault()
emailjs.init(serviceid)

emailjs.sendform(serviceid,templateid,frmEmail,apikey)
.then( rseult => Swal.fire("Su mensaje a sido exitoso") )
.catch (error => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Por qué tengo este problema?</a>'
  }));} 