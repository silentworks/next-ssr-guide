import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Welcome to your app</h1>
     
    </main>
  );
}