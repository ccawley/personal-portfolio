$(document).ready(() => {
    $('.fa-envelope').click(() => {
        if ($('#emailTag')[0].innerHTML === 'curtis.cawley@icloud.com') {
          $('#emailTag').fadeOut()
          $('#emailTag').promise().done(()=>{
            $('#emailTag')[0].innerHTML = 'Email'
            $('#emailTag').fadeIn()
          })
        } else {
          $('#emailTag').fadeOut()
          $('#emailTag').promise().done(()=>{
            $('#emailTag')[0].innerHTML = 'curtis.cawley@icloud.com'
            $('#emailTag').fadeIn()
          })
        }
    })
})
