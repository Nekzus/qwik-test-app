/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
interface Props {
  id: number;
  size?: number;
  backImage: boolean;
  isVisible?: boolean;
}
export const PokemonImage = component$(
  ({ id, size = 200, backImage = false, isVisible = true }: Props) => {
    const imageLoaded = useSignal(false);
    const showImage = useSignal(true);

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
      showImage.value = true;
    });

    useTask$(({ track }) => {
      track(() => isVisible);
      showImage.value = false;
    });

    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    if (!backImage) {
      imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Cargando...</span>}

        <img
          src={imageUrl}
          alt="Pokemon Sprites"
          style={{ width: `${size}px` }}
          onLoad$={() => {
            // setTimeout(() => {
            imageLoaded.value = true;
            // }, 500);
          }}
          class={[
            {
              hidden: !imageLoaded.value,
              "brightness-0": showImage.value,
            },
            "transition-all",
          ]}
        />
      </div>
    );
  }
);
