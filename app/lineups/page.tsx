import { createClient } from '@/utils/supabase/server';

export default async function Lineups() {
  const supabase = await createClient();
  const { data: lineups } = await supabase.from("lineups").select();

  return <pre>{JSON.stringify(lineups, null, 2)}</pre>
}