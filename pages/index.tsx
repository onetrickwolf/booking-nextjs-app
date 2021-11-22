import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Rooms from '@/components/rooms'
import LoginForm from "@/components/login-form";

import { useAuth, useRooms } from '@/lib/swr-hooks'

export default function IndexPage() {

  const { username, isLoggedIn } = useAuth()

  if (isLoggedIn) {

    const { rooms, isLoading } = useRooms(username)

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
    } else {
      return (
        <div>
          <Nav />
          <Container>
            <div className="text-red-600">Welcome {username}!</div>
            <div className="font-bold text-xl underline">My Rooms</div>
            <Rooms rooms={rooms.myRooms} allowDelete={true} />
            <div className="font-bold text-xl underline">Booked</div>
            <Rooms rooms={rooms.booked} />
            <div className="font-bold text-xl underline">Free Rooms</div>
            <Rooms rooms={rooms.unbooked} allowBook={true} />
          </Container>
        </div>
      )
    }
  }

  return (
    <div>
      <Container>
        <LoginForm />
      </Container>
    </div>
  )
}
