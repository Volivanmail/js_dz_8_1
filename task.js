const reveal = document.querySelectorAll('.reveal');

// 100px в коде я добавил для наглядности!
reveal.forEach((item) => {
    window.addEventListener('scroll', function() {
        const el = item.getBoundingClientRect();
        console.log(el.top,el.bottom);
        console.log(window.innerHeight);
        if (el.top < window.innerHeight - 100 && el.bottom > 100) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
})
