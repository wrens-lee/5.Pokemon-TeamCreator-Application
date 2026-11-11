import { Router } from 'express';
import { pokemonListGet, teamsListGet, teamCreatePost, teamGetById, teamUpdateById, teamDeletebyId, teamPokemonAddPost, teamPokemonClearDelete, teamPokemonRemoveDelete };

const pokeRouter = Router();

pokeRouter.get('/pokemon', pokemonListGet);
pokeRouter.get('/teams', teamsListGet);
pokeRouter.post ('/teams', teamCreatePost);
pokeRouter.get('/teams/:id', teamGetById);
pokeRouter.post('/teams/id:', teamUpdateById);
pokeRouter.delete('/teams/:id', teamDeletebyId);
pokeRouter.post('/teams/:id/pokemon', teamPokemonAddPost);
pokeRouter.delete('/teams/:id/pokemon', teamPokemonClearDelete);
pokeRouter.delete('/teams/:id/pokemon/:pokemonId', teamPokemonRemoveDelete);

export default pokeRouter;