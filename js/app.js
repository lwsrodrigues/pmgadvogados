document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel .list");
    const items = document.querySelectorAll(".carousel .list .item");
    const thumbnails = document.querySelectorAll(".thumbnail .item");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transition = "transform 0.3s ease"; // Transição suave
        carousel.style.transform = `translateX(${offset}%)`;

        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle("active", index === currentIndex);
        });
    };

    // Eventos de navegação nos botões
    prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    // Eventos de clique nos thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Função de iniciar arrastar
    const startDrag = (e) => {
        isDragging = true;
        startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        carousel.style.transition = "none"; // Remover transição enquanto arrasta
    };

    // Função de arrastar
    const dragging = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
        const delta = currentX - startX;
        currentTranslate = previousTranslate + delta;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    };

    // Função de soltar
    const endDrag = () => {
        isDragging = false;

        const movedBy = currentTranslate - previousTranslate;

        if (movedBy < -50 && currentIndex < items.length - 1) {
            currentIndex++;
        } else if (movedBy > 50 && currentIndex > 0) {
            currentIndex--;
        }

        previousTranslate = -currentIndex * carousel.offsetWidth;
        carousel.style.transition = "transform 0.3s ease";
        carousel.style.transform = `translateX(${previousTranslate}px)`;

        updateCarousel();
    };

    // Adicionar eventos para mouse e toque
    carousel.addEventListener("mousedown", startDrag);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", endDrag);
    carousel.addEventListener("mouseleave", endDrag);

    carousel.addEventListener("touchstart", startDrag);
    carousel.addEventListener("touchmove", dragging);
    carousel.addEventListener("touchend", endDrag);

    updateCarousel(); // Inicializar carrossel
});

// Obter os elementos do modal
var modal = document.getElementById("locationModal");
var closeModal = document.getElementById("closeModal");
var locationLink = document.querySelector("a[href='#']");

// Função para inicializar o mapa
function initMap() {
    var location = { lat: -23.55052, lng: -46.633308 }; // Exemplo de coordenadas (São Paulo)
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Localização",
    });
}
// Inicializa o mapa
function initMap() {
    const mapOptions = {
        center: { lat: -23.55052, lng: -46.633308 }, // Substitua pelas coordenadas do seu endereço
        zoom: 15,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: "Nosso Local",
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o mapa
    function initMap() {
        const mapOptions = {
            center: { lat: -23.55052, lng: -46.633308 }, // Substitua pelas coordenadas do seu endereço
            zoom: 15,
        };
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
        new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: "Nosso Local",
        });
    }


});
document.addEventListener('DOMContentLoaded', () => {
    const h2Element = document.querySelector('h2');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h2Element.classList.add('visible');
            }
        });
    });

    observer.observe(h2Element);
});
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});
function initMap() {
    // Coordenadas fornecidas
    const location = { lat: -27.581581, lng: -48.504425 };

    // Criação do mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,  // Define o nível de zoom
        center: location,  // Centraliza o mapa nas coordenadas fornecidas
    });

    // Adiciona um marcador no local especificado
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

/*BOTÃO TOPO*/
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopButton = document.querySelector(".scroll-button-top");

    // Função para mostrar o botão com transição suave
    const showButton = () => {
        scrollTopButton.style.opacity = "1";
        scrollTopButton.style.pointerEvents = "auto";
    };

    // Função para esconder o botão com transição suave
    const hideButton = () => {
        scrollTopButton.style.opacity = "0";
        scrollTopButton.style.pointerEvents = "none";
    };

    // Detecta o movimento do mouse na área superior
    document.addEventListener("mousemove", (event) => {
        if (event.clientY < 100) {
            showButton();
        } else {
            hideButton();
        }
    });

    // Garante que o botão desapareça ao sair da área do topo
    scrollTopButton.addEventListener("mouseleave", hideButton);
});


/*BOTÃO DE BAIXO*/



document.addEventListener("DOMContentLoaded", () => {
    const scrollBottomButton = document.querySelector(".scroll-button-bottom");

    // Inicialmente, esconda o botão
    scrollBottomButton.style.opacity = "0";
    scrollBottomButton.style.pointerEvents = "none";

    window.addEventListener("scroll", () => {
        // Verifica se o usuário está no final da página
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
            scrollBottomButton.style.opacity = "1"; // Mostra o botão
            scrollBottomButton.style.pointerEvents = "auto"; // Habilita o clique
        } else {
            scrollBottomButton.style.opacity = "0"; // Esconde o botão
            scrollBottomButton.style.pointerEvents = "none"; // Desabilita o clique
        }
    });
});




// Detectar quando o vídeo está visível na tela
function checkVideoVisibility() {
    const video = document.getElementById('video-frame');
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Adiciona autoplay caso o vídeo seja visível
        if (!video.src.includes("autoplay=1")) {
            video.src += "?autoplay=1";  // Inicia o vídeo automaticamente
        }
    }
}

// Verifica a visibilidade do vídeo quando a página rolar
window.addEventListener('scroll', checkVideoVisibility);

// Verifica a visibilidade assim que a página carregar
window.addEventListener('load', checkVideoVisibility);


/* nome sobre escritório */
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento do título
    const titulo = document.querySelector('#sobre-nos h2');

    // Cria o observer para detectar quando o elemento estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe de animação quando o elemento é visível
                entry.target.classList.add('titulo-animado');
            }
        });
    });

    // Observa o título
    observer.observe(titulo);
});

