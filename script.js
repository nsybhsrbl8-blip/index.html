orderService(serviceName) {
    alert(`شكراً لاهتمامك بخدمة "${serviceName}" 💜\nسيتم تحويلك لصفحة تواصل معنا لإكمال الطلب`);
    window.location.href = `contact.html?service=${serviceName}`;
}

document.addEventListener('DOMContentLoaded', function() {
    let pageTitle = document.title;
    
    // 1. ترحيب باسم المستخدم في الرئيسية
    if (pageTitle.includes('الرئيسية')) {
        let params = new URLSearchParams(window.location.search);
        let username = params.get('username');
        if (username) {
            let welcomeMsg = document.querySelector('section h2');
            if (welcomeMsg) welcomeMsg.innerHTML = `مرحباً بك يا ${username} في نبض 💜`;
        }
    }
    
    // 2. نموذج تواصل معنا + تعبئة الخدمة تلقائياً
    if (pageTitle.includes('تواصل معنا')) {
        // لو جاي من زر "اطلب الخدمة" املأ الرسالة تلقائياً
        let params = new URLSearchParams(window.location.search);
        let service = params.get('service');
        if (service) {
            let textarea = document.querySelector('textarea');
            if (textarea) textarea.value = `أرغب في الاستفسار عن خدمة: ${service}`;
        }
        
        let contactForm = document.querySelector('form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let name = document.querySelector('input[type="text"]').value;
            let email = document.querySelector('input[type="email"]').value;
            let message = document.querySelector('textarea').value;
            
            if (name === '' || email === '' || message === '') {
                alert('رجاءً املأ كل الحقول المطلوبة 💜');
            } else {
                alert(`شكراً يا ${name}! تم استلام طلبك بنجاح\nفريق نبض حيتواصل معاك خلال 24 ساعة`);
                contactForm.reset();
            }
        });
    }
    
    // 3. تسجيل الدخول
    if (pageTitle.includes('تسجيل الدخول')) {
        let loginForm = document.querySelector('form');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let username = document.querySelector('input[type="text"]').value;
            if (username === '') alert('اكتب اسم المستخدم أول 💜');
            else window.location.href = `home.html?username=${username}`;
        });
    }
});
