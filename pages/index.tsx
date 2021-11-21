import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Entries from '@/components/entries'
import LoginForm from "@/components/login-form";

import { useEntries, useAuth } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()
  const { username, isLoggedIn } = useAuth()

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  } else if (isLoggedIn) {
    return (
      <div>
        <Nav />
        <Container>
          Welcome {username}!
          <Entries entries={entries} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <LoginForm />
      </Container>
    </div>
  )
}