document.getElementById('hugButton').addEventListener('click', function() {
    alert('Gửi chị cái ôm to đùng, [Hiro xinh nhất quả đất của em]! 🤗 I love you! 💕');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000); 
});


