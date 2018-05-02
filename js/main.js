$(document).ready(() => {
    $('.fa-envelope-square').click(() => {
        if ($('#emailContact')[0].innerHTML === 'curtis.cawley@icloud.com') {
          $('#emailContact').fadeOut()
          $('#emailContact').promise().done(()=>{
            $('#emailContact')[0].innerHTML = 'Email'
            $('#emailContact').fadeIn()
          })
        } else {
          $('#emailContact').fadeOut()
          $('#emailContact').promise().done(()=>{
            $('#emailContact')[0].innerHTML = 'curtis.cawley@icloud.com'
            $('#emailContact').fadeIn()
          })
        }
    })
})
