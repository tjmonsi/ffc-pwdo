export const PageMixin = (superClass) => {
  return class extends superClass {
    openMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const headerBar = this.shadowRoot.querySelector('header-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.add('open');
      headerBar.classList.add('hidden');
      main.classList.add('hidden');
    }

    closeMenu () {
      const sideBar = this.shadowRoot.querySelector('side-bar');
      const headerBar = this.shadowRoot.querySelector('header-bar');
      const main = this.shadowRoot.querySelector('.main');
      sideBar.classList.remove('open');
      headerBar.classList.remove('hidden');
      main.classList.remove('hidden');
    }
  };
};
