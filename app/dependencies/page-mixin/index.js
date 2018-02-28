export const PageMixin = (superClass) => {
  return class extends superClass {
    openMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const headerBar = this.shadowRoot.querySelector('header-bar');
      const footerBar = this.shadowRoot.querySelector('footer-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.add('open');
      if (headerBar) headerBar.classList.add('hidden');
      main.classList.add('hidden');
      if (footerBar) footerBar.classList.add('hidden');
    }

    closeMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const headerBar = this.shadowRoot.querySelector('header-bar');
      const footerBar = this.shadowRoot.querySelector('footer-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.remove('open');
      if (headerBar) headerBar.classList.remove('hidden');
      main.classList.remove('hidden');
      if (footerBar) footerBar.classList.remove('hidden');
    }
  };
};
