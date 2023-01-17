<?php
return array(
    'name' => 'Выбор адреса на карте',
    'description' => 'Добавляет пользователю возможность уточнить адрес на карте',
    'version' => '2022.12.02',
    'vendor' => '667213',
    'img' => 'img/icon.png',
    'handlers' => array(
        'frontend_my_nav' => 'addMap',
        'frontend_order' => 'orderMap',
    ),
);