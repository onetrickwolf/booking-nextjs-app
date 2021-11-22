import Room from './room'

function Rooms({ rooms, allowDelete = false, allowBook = false}) {
  if (rooms) {
    return (
      <div>
        {rooms.map((e) => (
          <div key={e.id} className="py-2">
            <Room id={e.id} room={e.room} time={e.time} user={e.username} allowDelete={allowDelete} allowBook={allowBook} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Rooms
