import { supabase } from '@/lib/supabaseClient'

export default function Home({ players }) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Total points</th>
          <th>Games played</th>
          <th>Games won</th>
          <th>Points per game</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.player_statistics[0].point_count}</td>
            <td>{player.player_statistics[0].game_count}</td>
            <td>{player.player_statistics[0].win_count}</td>
            <td>{Math.round(player.player_statistics[0].point_count * 100 / player.player_statistics[0].game_count) / 100}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('players').select(`id, name, player_statistics (game_count, point_count, win_count)`)
  return {
    props: {
      players: data
    },
  }
}
