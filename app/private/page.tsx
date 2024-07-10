// import { redirect } from 'next/navigation'
// import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default function PrivatePage() {
  // const supabase = createClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  // return <p>Hello {data.user.email}</p>
  const cookieData = cookies().getAll()
  console.log({ cookieData })
  return <h1>Hello World!!!</h1>
}