//w JS nie ma prywatnych/protected metod, bo wszystko jest PUBLICZNE
//można je tworzyć, ale robi się to inaczej niż w normalnych językach programowania
//nie mozna tworzyc PRYWATNYCH METOD, ale można tworzyć PRYWATNE ZMIENNE
//Jak sa obiekty w takiej funkcji, to trzeba wrzucic je do globalneog obiektu window
//ALE MOŻNA TEŻ zamiast przypisywac obiekty do window, przekazac obiekty globalne do tej funkcji (spoko opcja jak chce sie robic aliasy)
(function(window, $) {
    'use strict';
    //use strict mozna tez dodawac na samej gorzae skryptu i lepiej go uzywac w funkcjach, gdy uzywamy programow spajających pliki JS do jednego

    window.RepLogApp = {
        initialize: function($wrapper) {
            this.$wrapper = $wrapper;
            this.helper = new Helper($wrapper);

            this.$wrapper.find('.js-delete-rep-log').on(
                'click',
                this.handleRepLogDelete.bind(this)
            );
            this.$wrapper.find('tbody tr').on(
                'click',
                this.handleRowClick.bind(this)
            );
            console.log(this.helper, Object.keys(this.helper)); //instancja helpera
            console.log(Helper, Object.keys(Helper)); //sam obiekt(klasa) helper
            //Nowe instancje obiektów nie mają metod
            //funckja calculateTotalWeight praktycznie jest dalej statyczna - nie mozna jej wywolywac w nowych instancjach tego obiektu
            //jak chcemy dodac metode do nowych instancji, w glowynm obiekcie musimy dodac slowo prototype
            //Gdy towrzymy obiekt, z ktorego maja byc tworzone instancje, musimy jego propercje i metody dodac do klucza prototype
            //Każdy obiekt posiada klucz __proto__
            var playObject = {
                lift: 'stuf'
            };
            playObject.__proto__.cat = 'meow';
            console.log(playObject.lift, playObject.cat);
            console.log([].__proto__);
        },

        updateTotalWeightLifted: function() {
            this.$wrapper.find('.js-total-weight').html(
                this.helper.calculateTotalWeight()
            );
        },

        handleRepLogDelete: function(e) {
            e.preventDefault();

            var $link = $(e.currentTarget);
            $link.addClass('text-danger');
            $link.find('.fa')
                .removeClass('fa-trash')
                .addClass('fa-spinner')
                .addClass('fa-spin');

            var deleteUrl = $link.data('url');
            var $row = $link.closest('tr');
            var self = this;
            $.ajax({
                url: deleteUrl,
                method: 'DELETE',
                success: function() {
                    $row.fadeOut('normal', function() {
                        $(this).remove();
                        self.updateTotalWeightLifted();
                    });
                }
            });
        },

        handleRowClick: function() {
            console.log('row clicked!');
        },

    };
    //Immediately Invoked Function Expression - self executing function - pozwalaja wybrac ktore zmienne maja byc publicznie dostepne, a które nie;
    //czyli owijanie kodu w funkcję, która wywołuje samą siebie
    /**
     * A "private" object
     */
    //jak zabiorę var to ten obiekt bedzie publiczny (ustawiony na window)
    var Helper = function ($wrapper) {
        this.$wrapper = $wrapper;
    };

    //nazwy metod, które mają byc prywatne, oznaczamy przez '_'
    Helper.prototype.calculateTotalWeight = function () {
        var totalWeight = 0;
        this.$wrapper.find('tbody tr').each(function() {
            totalWeight += $(this).data('weight');
        });

        return totalWeight;
    }

})(window, jQuery);
//W JS wszystko jest obiektem

//Aby robić instancje obiektow: 1. zamien obiekt na funkcje, ktora pelni role konstruktora. 2. wszysrkie propercje i metody dodaj do przez prototype i beda pod kluczem __proto__
