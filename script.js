const services = [
    {title: "علاج طبيعي", description: "جلسات علاج طبيعي منزلية", price: "200 جنيه/جلسة", icon: "🏥"},
    {title: "رعاية مسنين", description: "رعاية شاملة لكبار السن", price: "3000 جنيه/شهر", icon: "👴"},
    {title: "تمريض منزلي", description: "خدمات تمريض محترفة في بيتك", price: "150 جنيه/زيارة", icon: "💉"},
    {title: "دعم نفسي", description: "جلسات استشارة نفسية بسرية تامة", price: "250 جنيه/جلسة", icon: "🧠"},
    {title: "توصيل أدوية", description: "توصيل أدويتك لباب بيتك", price: "20 جنيه توصيل", icon: "💊"},
    {title: "استشارات طبية", description: "استشر طبيب فيديو كول", price: "100 جنيه/استشارة", icon: "👨‍⚕️"}
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('services-container');
    if(container) {
        container.innerHTML = services.map(s => `
            <div class="service-card">
                <div style="font-size:40px">${s.icon}</div>
                <h3>${s.title}</h3>
                <p>${s.description}</p>
                <strong>${s.price}</strong><br><br>
                <button onclick="alert('تم اختيار: ${s.title}')">احجز الآن</button>
            </div>
        `).join('');
    } else {
        console.log('ما لقيت services-container');
    }
});
