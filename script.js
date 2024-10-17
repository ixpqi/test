const container = document.getElementById('container');
const signInBtn = document.getElementById('signInBtn');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signInUsername = document.getElementById('username');
const signInPassword = document.getElementById('password');
// قائمة بأسماء المستخدمين والرموز السرية المسموح بها
const validUsers = {
    'admin': 's12345',
    'HR1': '54321',
    'HR2': '98765',
    'HR3': '24680',
    'Security': '13579'
};

// عند الضغط على زر "Sign In" (تسجيل الدخول)
signInBtn.addEventListener('click', (e) => {
 e.preventDefault() ;  
    // الحصول على قيمة اسم المستخدم والرمز السري المدخلين
    const username = signInUsername.value;
    const password = signInPassword.value;

    // التحقق إذا كان اسم المستخدم موجودًا وكلمة المرور صحيحة
    if (validUsers[username] && validUsers[username] === password) {
        // إذا كان اسم المستخدم والرمز السري صحيحين، الانتقال إلى الصفحة الرئيسية
        window.location.href = 'homepage.html'; // استبدل "homepage.html" برابط الصفحة الرئيسية
    } else {
        alert('Invalid Username or Password'); // رسالة تنبيه عند إدخال اسم مستخدم أو رمز سري غير صحيح
    }
});
