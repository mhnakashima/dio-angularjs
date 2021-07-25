(function(){
    app
    .factory('apiService', function($http){
        var URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl";
        var COINSTORAGE = 'local_coinstorage';
        return{
            getData: function(per_page, page){
                return $http({
                        method: 'GET', 
                        url: URL,
                        params: {
                            per_page,
                            page 
                        }
                    });
            },

            setCoinStorage: function(value){
                window.localStorage.setItem(COINSTORAGE, JSON.stringify(value));
            },

            getCoinStorage: function(){
                return JSON.parse(window.localStorage.getItem(COINSTORAGE));
            }
        }
    })
})();
