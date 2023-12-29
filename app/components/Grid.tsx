import Card from "./Card";

export default function Grid({ games }:{games: Game[]}) {
  return (
    <ul>
      {games.map((game) => (
        <Card key={game.id} />
      ))}
    </ul>
  );
}

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c31223572msh27baec236aa2afcp1e55d2jsn41f579cf1c88',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
  }
  
export async function getStaticProps() {
  const response = await fetch(url, options);
  const result = await response.json() as Game[];
  return {
    props: {
      games: result,
    },
  };
}
