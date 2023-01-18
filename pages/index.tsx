import { supabase } from '@/lib/supabaseClient'

export default function Home({ players }) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('players').select()
  return {
    props: {
      players: data
    },
  }
}
