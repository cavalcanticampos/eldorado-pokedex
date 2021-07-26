package br.com.pokeapi.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainP {

    @RequestMapping("/pokemons")

    public String  gethot(){

         return  "====rest====";
    }
}
