
let atalhos = [
    {
        titulo: 'Youtube',
        img: 'https://cdn-icons-png.flaticon.com/256/1383/1383260.png',
        link: 'https://www.youtube.com/'
    },
    {
        titulo: 'Mercado Livre',
        img: 'https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png',
        link: 'https://www.mercadolivre.com.br/'
    },
    {
        titulo: 'Git Hub',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        link: 'https://github.com/srkayrez'
    },
    {
        titulo: 'Prime gaming',
        img: 'https://seeklogo.com/images/P/prime-gaming-logo-61A701B3F5-seeklogo.com.png',
        link: 'https://gaming.amazon.com/home'
    },
    {
        titulo: 'Outlook',
        img: 'https://seeklogo.com/images/M/microsoft-outlook-logo-188AB32C94-seeklogo.com.png',
        link: 'https://outlook.office365.com/mail/'
    },
    {
        titulo: 'Twitch',
        img: 'https://cdn-icons-png.flaticon.com/256/2335/2335303.png',
        link: 'https://www.twitch.tv/'
    },
    {
        titulo: 'Photoshop',
        img: 'https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png',
        link: 'https://www.photopea.com/'
    },
    {
        titulo: 'Alura',
        img: 'https://scontent.faqa4-1.fna.fbcdn.net/v/t39.30808-6/326774820_553751640114537_2779309560966115963_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Le-ZLyBq9cMAX-MTrRw&_nc_ht=scontent.faqa4-1.fna&oh=00_AfBC2janEJbUn2gMAzOWqpz2FtmMmves-mJZgy4DhMpHIQ&oe=6497770D',
        link: 'https://www.alura.com.br/'
    },
    {
        titulo: 'Teams',
        img: 'https://seeklogo.com/images/M/microsoft-teams-logo-E5BF810325-seeklogo.com.png',
        link: 'https://teams.microsoft.com/'
    }
];



window.onload = function() {
  
    exibirAtalhos(atalhos);
    // exibirCalendarios(atalhos);
    
  };

function exibirAtalhos(atalhos){
    const inserirAtalhos = document.getElementById('Atalhos');
    inserirAtalhos.innerHTML = '';

    atalhos.forEach(element => {
      inserirAtalhos.innerHTML += ` <div class="cards__atalhos">
      <a href='${element.link}'>
      <img width="100px" height="100px" src="${element.img}">
      <p class="titulo">${element.titulo}</p>
        </a>
        </div>`  
        
    });
}

/* <iframe src="https://calendar.google.com/calendar/embed?src=srkayrez%40gmail.com&ctz=America%2FSao_Paulo" style="border: 0" width="500" height="500" frameborder="0" scrolling="no"></iframe>
        <iframe id="compormissos" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showTabs=1&showPrint=0&showTz=0&showCalendars=1&mode=AGENDA&src=c3JrYXlyZXpAZ21haWwuY29t&color=%23039BE5" style="border-width:0" width="300" height="500" frameborder="0" scrolling="no"></iframe> */