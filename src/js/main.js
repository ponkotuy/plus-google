window.onload = () => {
  const redirect = (query) => {
    const json = JSON.parse(localStorage.getItem('json')) || [];
    const addQuery = encodeURIComponent(json.map( elem => `-${elem.key}:${elem.value}` ).join(' '));
    location.href = `https://www.google.com/search?q=${query}+${addQuery}`
  };

  const firstQuery = location.search.replace('?', '').replace('q=', '');
  if(firstQuery !== '') redirect(firstQuery);

  new Vue({
    el: '#searcher',
    data: {
      query: ''
    },
    methods: {
      search: function () {
        redirect(this.query)
      }
    }
  });

  const init = localStorage.getItem('json') || '[{"key": "site", "value": "example.com"}]';
  new Vue({
    el: '#loader',
    data: {
      json: init
    },
    methods: {
      load: function () {
        localStorage.setItem('json', this.json);
      }
    }
  })
};
