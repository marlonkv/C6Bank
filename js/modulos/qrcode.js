export default class Qrcode {
  constructor() {
    this.btn = document.querySelector('.links ul:last-child li:first-child');
  }

  elementQrCode() {
    const divBg = document.createElement('div');
    const div = document.createElement('div');
    const btn = document.createElement('span');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');

    //Inserindo conteudo
    btn.innerHTML = '<button>Fechar</button>';
    h1.innerHTML = 'Abra sua conta <br><strong>de graça</strong>';
    p.innerText =
      'Ligue a câmera do seu celular e aponte para o QR Code abaixo. Você será redirecionado para a loja de aplicativos. Aí é só baixar o app do C6 Bank e abrir a sua conta';
    img.setAttribute(
      'src',
      'data:image/png;base64,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',
    );

    //Nomeando classes
    divBg.classList.add('qrcodeBg');
    div.classList.add('qrcode');

    //Posicionamento dos elementos
    divBg.appendChild(div);
    div.appendChild(btn);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(img);

    document.body.appendChild(divBg);

    //tentativa de animação
    setTimeout(() => {
      console.log('test');
      div.style.left = '0px';
    }, 10);

    //Adicionando o evento de close
    [btn, divBg].forEach((i) => {
      i.addEventListener('click', () => {
        div.style.left = '512px';
        setTimeout(() => {
          divBg.remove();
        }, 100);
      });
    });
  }

  evento() {
    this.btn.addEventListener('click', () => {
      this.elementQrCode();
    });
  }

  init() {
    this.evento();
  }
}
