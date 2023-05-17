export default class HeaderOver {
  constructor() {
    this.linksOver = document.querySelectorAll('[data-eventOver]');
    this.overPf = this.overPf.bind(this);
    this.overPj = this.overPj.bind(this);
  }

  overPf(e) {
    const name = document.querySelector('[data-eventover="pf"]');
    const cond = e.currentTarget.dataset.eventover;

    e.currentTarget.querySelector('a').style.color = 'white';

    if (cond === 'pf') {
      const divBg = document.createElement('div');
      const div = document.createElement('div');
      const p = document.createElement('p');
      divBg.classList.add('container-pf');
      p.innerText = 'content-pessoa-física';

      div.appendChild(p);
      divBg.appendChild(div);
      document.body.appendChild(divBg);

      //Eventos

      divBg.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('container-pf')) {
          divBg.remove();
          const pf = document
            .querySelector('[data-eventOver="pf"]')
            .querySelector('a');
          pf.style.color = 'black';

          this.linksOver.forEach((item) => {
            item.addEventListener('mouseover', function f(e) {
              //Elementos
              overPf(e);

              //Remoção do evento
              item.removeEventListener('mouseover', f);
            });
          });
        }
      });
    }
  }

  overPj(e) {
    const cond = e.currentTarget.dataset.eventover;

    if (cond === 'pj') {
      const divBg = document.createElement('div');
      const div = document.createElement('div');
      const p = document.createElement('p');
      divBg.classList.add('container-pj');
      p.innerText = 'content-pessoa-jurídica';

      div.appendChild(p);
      divBg.appendChild(div);
      document.body.appendChild(divBg);

      //Eventos

      divBg.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('container-pj')) {
          divBg.remove();

          const pj = document
            .querySelector('[data-eventOver="pj"]')
            .querySelector('a');
          pj.style.color = 'black';

          this.linksOver.forEach((item) => {
            item.addEventListener('mouseover', function f(e) {
              //Elementos
              overPj(e);

              //Remoção do evento
              item.removeEventListener('mouseover', f);
            });
          });
        }
      });
    }
  }

  evento() {
    this.linksOver.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        //Elementos
        this.overPf(e);
        this.overPj(e);

        //Remoção do evento
        item.removeEventListener('mouseover', () => {});
      });
    });
  }

  init() {
    this.evento();
    console.log('te');
  }
}
