import { useRouter } from "next/router";
import { useEffect } from "react";
import Landing from "./../components/Landing"
import { useUser } from "../firebase/AuthContextProvider"

export default function Home() {
  const Router = useRouter();

  const {isLoading, user} = useUser();
  useEffect(() => {
    if (!isLoading && user) {
      Router.push('/home')
    }
  }, [user])

  return (
    <div>
      <Landing />
    </div>
  )
}
