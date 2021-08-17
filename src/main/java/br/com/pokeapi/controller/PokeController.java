package br.com.pokeapi.controller;

import br.com.pokeapi.model.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;


@RestController

@RequestMapping
@Api("Api Rest Pokemons")
@CrossOrigin(origins = "*")
public class PokeController {


    @GetMapping("/pokemons")
    @ApiOperation("Retorna uma lista de api com sua devidas propiedades")
    public List findAll(Integer page) {

        List<Pokemon> array = new ArrayList<>();

        int i;
        int pageSize = 9;
        int fromIndex;
        if (page == null || page == 0) {
            fromIndex = 0;
        } else {
            fromIndex = (page - 1) * pageSize;
        }

        CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
        requestFactory.setHttpClient(httpClient);


        RestTemplate res = new RestTemplate(requestFactory);
        PokemonResults response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0", PokemonResults.class);

        List<Results> results = response.getResults();


        for (i = 0; i < results.size(); i++) {

            Pokemon pokemon = res.getForObject(results.get(i).getUrl(), Pokemon.class);
            String grass = "grass";
            String normal = "normal";
            String fighting = "fighting";
            String flying = "flying";
            String poison = "poison";
            String ground = "ground";
            String rock = "rock";
            String bug = "bug";
            String ghost = "ghost";
            String steel = "steel";
            String fire = "fire";
            String water = "water";
            String electric = "electric";
            String psychic = "psychic";
            String ice = "ice";
            String dragon = "dragon";
            String dark = "dark";
            String fairy = "fairy";
            String unknown = "unknown";
            String shadow = "shadow";

            if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), grass)) {
                pokemon.setBackgroundColor("#70A83B");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), normal)) {
                pokemon.setBackgroundColor("#76AADB");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), fighting)) {
                pokemon.setBackgroundColor("#F76545");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), flying)) {
                pokemon.setBackgroundColor("#76AADB");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), poison)) {
                pokemon.setBackgroundColor("#A974BC");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), ground)) {
                pokemon.setBackgroundColor("#9B897B");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), rock)) {
                pokemon.setBackgroundColor("#A1A1A1");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), bug)) {
                pokemon.setBackgroundColor("#70A83B");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), ghost)) {
                pokemon.setBackgroundColor("#A974BC");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), steel)) {
                pokemon.setBackgroundColor("#A1A1A1");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), fire)) {
                pokemon.setBackgroundColor("#F76545");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), water)) {
                pokemon.setBackgroundColor("#A2CFF0");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), electric)) {
                pokemon.setBackgroundColor("#F7C545");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), psychic)) {
                pokemon.setBackgroundColor("#A974BC");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), ice)) {
                pokemon.setBackgroundColor("#A2CFF0");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), dragon)) {
                pokemon.setBackgroundColor("#F76545");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), dark)) {
                pokemon.setBackgroundColor("#A1A1A1");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), fairy)) {
                pokemon.setBackgroundColor("#A974BC");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), unknown)) {
                pokemon.setBackgroundColor("#A1A1A1");
            } else if (Objects.equals(pokemon.getTypes().get(0).getType().getName(), shadow)) {
                pokemon.setBackgroundColor("#A974BC");
            }


            array.add(pokemon);


            System.out.println(pokemon.getTypes().get(0).getType().getName());


        }


        if (array.size() < fromIndex) {
            return Collections.emptyList();
        }
        return array.subList(fromIndex, Math.min(fromIndex + pageSize, array.size()));


    }

}
