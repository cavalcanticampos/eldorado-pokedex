package br.com.pokeapi.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RaizController {
    @RequestMapping("/")
    public String Raiz(){

        return "=============================API-REST=============================";
    }
}
