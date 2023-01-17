$(document).ready(function (){
    setTimeout(function() {
    let address, btnSelector, profileSelector;
    if(orderPage === '0'){$('#addressmapCont').parent().hide()}

    addButton();

    $('body').prepend($('#addressmapCont'));
    $('head').prepend($('#addressmapJS'));

    $(document).on('click', '#showmap', function(e){
        $('#addressmapCont').show();
    });

    $('#hideMap').click(function () {
        $('#addressmapCont').hide();
    });

    ymaps.ready(init);

    function init() {
        let myPlacemark, myMap;
        let geolocation = ymaps.geolocation;
        $('#showmap').bind({
            click: function () {

                if (!myMap) {
                    myMap = new ymaps.Map('addressmap', {
                        center: [55.753994, 37.622093],
                        zoom: 10,
                        controls: ['smallMapDefaultSet'],
                        mapAutoFocus: true
                    })
                }

                address = getUserAddress();

                    if (address === ', ') {
                        geolocation.get({
                            provider: 'auto',
                            mapStateAutoApply: true,
                            autoReverseGeocode: true
                        }).then(function (result){

                            getaddress(result.geoObjects.position);
                            myMap.setCenter(result.geoObjects.position, 17, {
                                checkZoomRange: true
                            });
                        });
                    } else {
                        ymaps.geocode(address, {results: 1}).then(function (res) {
                            // выбираем первый результат геокодирования.
                            let firstgeoobject = res.geoObjects.get(0),
                                // координаты геообъекта.
                                coords = firstgeoobject.geometry.getCoordinates();
                                getaddress(coords);
                                // масштабируем карту на область видимости геообъекта.
                                myMap.setCenter(coords, 17, {
                                    checkZoomRange: true
                                });
                        });
                    }

                    myMap.events.add('click', function (e) {
                        let coords = e.get('coords');
                        getaddress(coords);
                        myPlacemark.geometry.setCoordinates(coords);
                        myMap.setCenter(coords, 16, {
                            checkZoomRange: true
                        });
                    });

                    $('#saveaddress').click(function () {
                        let country = myPlacemark.properties.get('country') ,
                            city = myPlacemark.properties.get('city'),
                            okrug = myPlacemark.properties.get('okrug'),
                            postal = myPlacemark.properties.get('postal_code'),
                            shipAddress = myPlacemark.properties.get('street')+', '+ myPlacemark.properties.get('number'), obl;
                        $('#addressmapCont').fadeOut(1000);
                        obl = okrug['0'];

                        if(orderPage){
                            $("select[name='region[country]'] option").filter(function(i, e) { return $(e).text() === country}).prop('selected', 'selected').change();
                            $("select[name='region[region]'] option").filter(function(i, e) { return $(e).text() === obl}).prop('selected', 'selected');
                            $("input[name='region[city]']").val(city[0]).change();
                            $("input[name='region[zip]']").val(postal);
                            $("input[name='region[region]']").val( obl);
                            $("input[name='auth[data][adres_dostavki]']").val(shipAddress);
                            $("input[name='details[shipping_address][street]']").val(shipAddress);
                            $("input[name='details[shipping_address][zip]']").val(postal);
                        }else{
                            $("select[name='customer[address.shipping][country]'] option").filter(function(i, e) { return $(e).text() === country}).prop('selected', 'selected').change();
                            $("input[name='customer[address.shipping][zip]']").val(postal);
                            $("input[name='customer[address.shipping][region]']").val(obl);
                            $("input[name='customer[address.shipping][street]']").val(shipAddress);
                            $("select[name='customer[address.shipping][region]'] option").filter(function(i, e) { return $(e).text() === obl}).prop('selected', 'selected');
                            $("input[name='customer[address.shipping][city]']").val(city[0]).change();
                        }


                    })

                }
            });


        // создание метки.
        function createplacemark(coords, caption) {
            return new ymaps.Placemark(coords, {
                iconContent: caption
            }, {
                preset:  MarkType,
            });
        }

        // определяем адрес по координатам (обратное геокодирование).
            function getaddress(coords) {
            ymaps.geocode(coords).then(function (res) {
                let clickgeoobject = res.geoObjects.get(0),
                    caption = clickgeoobject.getAddressLine();

                if(!myPlacemark){
                    myPlacemark= createplacemark(coords, caption);
                }else{
                    myPlacemark.geometry.setCoordinates(coords);
                }


                myPlacemark.properties.set({
                            // формируем строку с данными об объекте.
                            iconContent: [
                                caption
                            ],
                            ballooncontent: clickgeoobject.getAddressLine(),
                            postal_code: clickgeoobject.properties.get('metaDataProperty.GeocoderMetaData.Address.postal_code'),
                            country: clickgeoobject.getCountry(),
                            okrug: clickgeoobject.getAdministrativeAreas(),
                            city: clickgeoobject.getLocalities(),
                            street: clickgeoobject.getThoroughfare(),
                            number: clickgeoobject.getPremiseNumber()
                        });

                myMap.geoObjects.add(myPlacemark);
                })
            }

        }

        function getUserAddress() {
            if(orderPage === "1"){
                address = $("input[name='region[city]']").attr('value') + ', ' + $("input[name='details[shipping_address][street]']").attr('value');
            }else{
                address = $("input[name='customer[address.shipping][city]']").attr('value') + ', ' + $("input[name='customer[address.shipping][street]']").attr('value');
            }
            return address;
        }

        function addButton(){

            if(BtnPlace === 'tittle'){
                btnSelector = '.wa-step-region-section';
                profileSelector = '.wa-field-address>.wa-name';
            }else{
                btnSelector = "input[name='details[shipping_address][street]']";
                profileSelector = "input[name='customer[address.shipping][street]']";
            }

            if($("#showmap").length){

            }else{
                if(orderPage === '1'){
                    $(`${btnSelector}`).after(`<br><span id="showmap" style="background: ${BtnColor};color:${txtColor}; cursor: pointer">${txtBtn}</span>`);
                }else{
                    $(`${profileSelector}`).after(`<span id="showmap" style="background: ${BtnColor};color:${txtColor}; cursor: pointer">${txtBtn}</span><br>`);
                }
            }
        }
        $( document ).ajaxComplete(function() {addButton()});
    }, 2000);
    });
