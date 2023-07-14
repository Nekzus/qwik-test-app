import { Link, type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import type {
  BasicPokemonInfo,
  PokemonListResponse,
} from "../../../interfaces";

export const usePokemonList = routeLoader$<BasicPokemonInfo[]>(async () => {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
  );
  const data = (await resp.json()) as PokemonListResponse;
  return data.results;
});

export default component$(() => {
  const pokemons = usePokemonList();
  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Página actual: xxxxx</span>
        <span>Está cargando página</span>
      </div>

      <div class="mt-10">
        <Link class="btn btn-primary mr-2">Anteriores</Link>
        <Link class="btn btn-primary mr-2">Siguientes</Link>
      </div>
      <div class="grid grid-cols-6 mt-5">
        {pokemons.value.map(({ name }) => (
          <div key={name} class="m-5 flex flex-col justify-center items-center">
            <span class="capitalize">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "List SSR",
};
