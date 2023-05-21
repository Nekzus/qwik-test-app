import { component$ } from "@builder.io/qwik";
interface Props {
  id: number;
  size?: number;
  backImage: boolean;
}
export const PokemonImage = component$(
  ({ id, size = 200, backImage = false }: Props) => {
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    if (!backImage) {
      imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    return (
      <img
        src={imageUrl}
        alt="Pokemon Sprites"
        style={{ width: `${size}px` }}
      />
    );
  }
);
