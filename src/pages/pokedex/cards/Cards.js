import React, { useState ,useEffect} from "react";
import { IoIosArrowDown } from "react-icons/io";



import {
  ContainerCard,
  WrapperCards,
  CardSkill,
  CardsTitle,
  CardsPropContainer,
  CardSkillItems,
  CardTag,
  CardImg,
  StyledLink,
  Iconeimage
} from "./StylesCard";
import { Container, Item } from "../pagination/StylesPagination";
import { usePoke } from "../../../components/context/Provider";
import { MdSystemUpdateAlt } from "react-icons/md";
import ModelEdit from "../../modelEdit/ModelEdit";
import { Link,useHistory, useParams } from "react-router-dom";
import { IoCloseSharp, IoCreateOutline } from "react-icons/io5";
import EditPokemon from "../../editPokemon/EditPokemon";
import api from "../../../service/Api";
export default function Cards({
  nextPagePokemon,
  previousPagePokemon,
  actualPage,
}) {
  const { pokemonData, active } = usePoke();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sprite, setSprite] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const history = useHistory();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    api.get(`/pokemon/${id}`).then((response) => {
      console.log(response);
      setName(response.data);
      setType(response.data);
      setSprite(response.data);
      setAttack(response.data);
      setDefense(response.data);
      setBackgroundColor(response.data);
    });
  }, []);

  async function handleCreate(ev) {
    ev.preventDefault();
    const data = { name, type, sprite, attack, defense, backgroundColor };

    try {
      const response = await api.put(`/pokemon/${id}`, data);
      alert("Atualizaçao  realizado com sucesso");
      history.push("/Pokedex");
    } catch (err) {
      alert("Erro na atualizaço, tente novamente");
      console.log(err);
    }
  }
  

  return (
    <>
      <ContainerCard>
        {pokemonData.map((pokemon) => (
          <WrapperCards key={pokemon.id}>
            <CardSkill>
              <CardsTitle>{pokemon.name}</CardsTitle>
              <CardsPropContainer>
                <span className="firt-child">{pokemon.attack}</span>
                <span>{pokemon.defense}</span>
              </CardsPropContainer>

              <CardSkillItems>
                <span>Ataque</span>
                <span>Defesa</span>
              </CardSkillItems>

              <CardTag
                pokeTypeColor={pokemon.backgroundColor}
                josaph={pokemon.color}
              >
                <span>{pokemon.type}</span>
              </CardTag>
            </CardSkill>

            <CardImg backgroundColor={pokemon.backgroundColor}>
              <img src={pokemon.sprite} alt={pokemon.name} />
            </CardImg>
           
            <StyledLink to={`/edit/${pokemon.id}`}>
              <MdSystemUpdateAlt />
            </StyledLink>
            
            
            












































          </WrapperCards>
        ))}
      </ContainerCard>

      <Container>
        {actualPage - 1 === 0 ? (
          ""
        ) : (
          <Item onClick={previousPagePokemon}>{actualPage - 1}</Item>
        )}
        <Item isSelected={active}>{actualPage}</Item>
        <Item onClick={nextPagePokemon}>{actualPage + 1}</Item>
      </Container>
    </>
  );
}
