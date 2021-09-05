package br.com.pokeapi.model;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
public class Result {

    private String name;
    private String url;

    public Result( String name, String url) {

        this.name = name;
        this.url = url;
    }
}
