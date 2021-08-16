package br.com.pokeapi.controller;
import br.com.pokeapi.model.Pokemon;
import br.com.pokeapi.model.PokemonResults;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/pokemons")
public class PokeController {

    @GetMapping
    public List findAll(){

        List<Pokemon> array = new ArrayList<>();

        CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
        requestFactory.setHttpClient(httpClient);
        int i;

        RestTemplate res = new RestTemplate(requestFactory);
        PokemonResults response = res.getForObject("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", PokemonResults.class);
        System.out.println(response);
        List poke = response.getResults();
        return poke ;

    }

}
