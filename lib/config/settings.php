<?php
return array(
    'AddressStatus' => array(
        'title' => 'Включить',
        'description' => 'Включить плагин',
        'control_type' => waHtmlControl::CHECKBOX,
        'value' => 1,
    ),
    'YandexAPI' => array(
        'title' => 'Ключ API Яндекс.Карт',
        'description' => 'Введите ключ полученный в <a href="https://developer.tech.yandex.ru/" target="_blank">личном кабинете</a>',
        'control_type' => waHtmlControl::INPUT,
    ),
    'BtnPlace' => array(
        'title' => 'Место  кнопки',
        'description' => 'Меняет положение кнопки на странице',
        'control_type' => waHtmlControl::SELECT,
        'options' => array(
            array(
                'value' => 'tittle',
                'title' => 'После заголовка "Адрес"',
            ),
            array(
                'value' => 'field',
                'title' => 'После поля ввода адреса',
            ),
        ),
        'value' => 'tittle'
    ),
    'TextBTN' => array(
        'title' => 'Текст кнопки',
        'control_type' => waHtmlControl::INPUT,
        'value' => 'Указать на карте'
    ),
    'TextColor' => array(
        'title' => 'Цвет текста',
        'control_type' => waHtmlControl::INPUT,
        'value' => '#ffffff'
    ),
    'BtnColor' => array(
        'title' => 'Цвет кнопок',
        'control_type' => waHtmlControl::INPUT,
        'value' => '#009999'
    ),
    'MarkType' => array(
        'title' => 'Цвет маркера на карте',
        'description' => '<a href="/wa-apps/shop/plugins/addressmap/img/placemark.jpg" target="_blank">Посмотреть доступные значения</a>',
        'control_type' => waHtmlControl::SELECT,
        'options' => array(
            array(
                'value' => 'islands#blueStretchyIcon',
                'title' => 'blue',
            ),
            array(
                'value' => 'islands#redStretchyIcon',
                'title' => 'red',
            ),
            array(
                'value' => 'islands#darkOrangeStretchyIcon',
                'title' => 'dark Orange',
            ),
            array(
                'value' => 'islands#nightStretchyIcon',
                'title' => 'night',
            ),
            array(
                'value' => 'islands#darkBlueStretchyIcon',
                'title' => 'dark Blue',
            ),
            array(
                'value' => 'islands#pinkStretchyIcon',
                'title' => 'pink',
            ),
            array(
                'value' => 'islands#grayStretchyIcon',
                'title' => 'gray',
            ),
            array(
                'value' => 'islands#brownStretchyIcon',
                'title' => 'brown',
            ),
            array(
                'value' => 'islands#darkGreenStretchyIcon',
                'title' => 'dark Green',
            ),
            array(
                'value' => 'islands#violetStretchyIcon',
                'title' => 'violet',
            ),
            array(
                'value' => 'islands#blackStretchyIcon',
                'title' => 'black',
            ),
            array(
                'value' => 'islands#yellowStretchyIcon',
                'title' => 'yellow',
            ),
            array(
                'value' => 'islands#greenStretchyIcon',
                'title' => 'green',
            ),
            array(
                'value' => 'islands#orangeStretchyIcon',
                'title' => 'orange',
            ),
            array(
                'value' => 'islands#lightBlueStretchyIcon',
                'title' => 'light Blue',
            ),
            array(
                'value' => 'islands#oliveStretchyIcon',
                'title' => 'olive',
            )
        ),
        'value' => 'islands#darkGreenStretchyIcon'
    )
);