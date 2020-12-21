void(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
    },

    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      // this.$ = document.querySelector('.');
      // this.$ = document.querySelector('.');
      // this.$ = document.querySelector('.');
    },

    buildUI() {
      console.log("3. Build the user interface!");
      // this.$.innerHTML = this.createHTMLFor();
      // this.$.innerHTML = this.createHTMLFor();
      // this.$.innerHTML = this.createHTMLFor();
    },

  }
  app.initialize();
})();