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
    public List findAll(int page){

        List<Pokemon> array = new ArrayList<>();
        int i;
        int pageSize = 9;






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

        if(pageSize <= 0 || page <= 0) {
            throw new IllegalArgumentException("invalid page size: " + pageSize);
        }

        int fromIndex = (page - 1) * pageSize;
        if(array == null || array.size() <= fromIndex){
            return Collections.emptyList();
        }



        return array.subList(fromIndex, Math.min(fromIndex + pageSize, array.size()));


    }

}
