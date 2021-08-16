package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import br.com.pokeapi.model.PokemonResults;
import br.com.pokeapi.model.Results;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/pokemons")
public class PokeController {



    @GetMapping
    public List findAll(Integer page){

        List<Pokemon> array = new ArrayList<>();
        int i;
        int pageSize = 9;
        int fromIndex;
        if (page == null || page == 0) {
             fromIndex= 0;
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
        System.out.println(response);
        List<Results>  results  =    response.getResults();


        for(i=0; i< results.size(); i++){
            Pokemon pokemon = res.getForObject(results.get(i).getUrl(),Pokemon.class);
            array.add(pokemon);
        }
        if (array.size() < fromIndex) {
            return Collections.emptyList();
        }





        return array.subList(fromIndex, Math.min(fromIndex + pageSize, array.size()));


    }

}
