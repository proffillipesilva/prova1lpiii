import { Game } from "../business/entities/Game";
import { Usuario } from "../business/entities/Usuario";

export const MyDB = {
    players: [] as Usuario[],
    games: [] as Game[],
};