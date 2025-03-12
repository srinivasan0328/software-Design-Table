document.getElementById('enquiryBtn').addEventListener('click', function() {
    let enquiryForm = document.getElementById('enquiryForm');
    let registerForm = document.getElementById('registerForm');
    enquiryForm.style.display = enquiryForm.style.display === 'none' || enquiryForm.style.display === '' ? 'block' : 'none';
    registerForm.style.display = 'none';
});

document.getElementById('registerBtn').addEventListener('click', function() {
    let registerForm = document.getElementById('registerForm');
    let enquiryForm = document.getElementById('enquiryForm');
    registerForm.style.display = registerForm.style.display === 'none' || registerForm.style.display === '' ? 'block' : 'none';
    enquiryForm.style.display = 'none';
});