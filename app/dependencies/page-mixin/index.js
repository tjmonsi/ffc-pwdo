export const PageMixin = (superClass) => {
  return class extends superClass {
    openMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.add('open');
      main.classList.add('hidden');
    }

    closeMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.remove('open');
      main.classList.remove('hidden');
    }
  };
};
