<?php

class shopAddressmapPlugin extends shopPlugin{

    public function addMap(){

        if($this->getSettings('AddressStatus')){

            $path = $this->path;

            $this->addJs('js/addressmap.js');
            $this->addCss('css/addressmap.css');

            $settings = $this->getSettings();
            $settings['orderPage'] = false;
            $view = wa()->getView();
            $view->assign('settings',$settings);
            return $view->fetch($path.'/templates/addScript.html');
        }else{
            return ;
        }
    }

    public function orderMap(){

        if($this->getSettings('AddressStatus')){
            $path = $this->path;

            $this->addJs('js/addressmap.js');
            $this->addCss('css/addressmap.css');

            $settings = $this->getSettings();
            $settings['orderPage'] = true;
            $view = wa()->getView();
            $view->assign('settings', $settings);
            return $view->fetch($path . '/templates/addScript.html');
        }else{
            return;
        }
    }

}