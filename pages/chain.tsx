import Nav from '@/components/nav'
import Container from '@/components/container'
import { useChain } from "@/lib/swr-hooks";
import Skeleton from "react-loading-skeleton";
import Rooms from "@/components/rooms";
import Room from "@/components/rooms/room";

export default function NewEntryPage() {
  const { chain, isLoading } = useChain()

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
          <div>
            {chain.map((e, index) => (
              <div key={e.timestamp} className="py-2">
                {index === 0 && 'Chain started'} {e.data.username} {e.data.action} at {new Date(Number(e.timestamp)).toLocaleTimeString("en-US")} (hash: {e.hash}) (nonce: {e.nonce})
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }
}
