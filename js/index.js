
/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')

    
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== SHOW MENU ===============*/


/*=============== CONTACT FORM SUBMISSION ===============*/
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        
        e.preventDefault();

       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

       
        if (name === '' || email === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        
        alert(`¡Gracias, ${name}! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto en breve.`);

    
        contactForm.reset();
    });
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function scrollHeader() {
    const header = document.querySelector('.header');
    
    
    // Se a tela for menor ou igual a 768px, o código ignora o 'add' e vai para o 'remove'
    if (this.scrollY >= 50 && window.innerWidth > 768) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

window.addEventListener('resize', scrollHeader);


/*=============== CAROSEL ===============*/

const track = document.querySelector('.featured__track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (track && nextBtn && prevBtn) {
    
    // Variáveis de Estado
    let currentIndex = 0;
    
    // Função para obter o número de slides visíveis baseado no CSS
    const getSlidesPerView = () => {
        if (window.innerWidth >= 1024) return 3; // Desktop
        if (window.innerWidth >= 768) return 2;  // Tablet
        return 1; // Mobile
    };

    // Função principal de movimento
    const updateCarousel = () => {
        const cards = document.querySelectorAll('.featured__card');
        if (cards.length === 0) return;

        const slidesPerView = getSlidesPerView();
        const totalCards = cards.length;
        
        // Largura do card + gap 
        const cardWidth = cards[0].offsetWidth; 
        const gap = 24; // O mesmo valor do CSS gap
        const moveAmount = cardWidth + gap;

        // Limites 
        const maxIndex = totalCards - slidesPerView;
        
        // Se passar do máximo, volta ao início
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }
        // Se for menor que 0, vai para o fim
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }

        // Aplica o movimento
        track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
    };

    // Event Listeners dos Botões
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    // Atualizar ao redimensionar a janela (para corrigir larguras)
    window.addEventListener('resize', () => {
        updateCarousel();
    });
}