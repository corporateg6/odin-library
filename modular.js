(function() {

    var bookshelf = {
        books: ['Book1', 'Book2'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.$bookshelf = document.querySelector(".bookshelf");
        },
        bindEvents: function() {

        },
        render: function() {
            var booksToAdd = document.createElement("div")
        },

    }

    bookshelf.init();

})();