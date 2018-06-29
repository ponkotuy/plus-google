window.onload = () => {
  new Vue({
    el: '#searcher',
    data: {
      query: ''
    },
    methods: {
      search: function () {
        location.href = `https://www.google.com/search?q=${this.query}`
      }
    }
  });
};
