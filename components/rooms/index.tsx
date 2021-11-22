import Room from './room'

function Rooms({ rooms, allowDelete = false, allowBook = false}) {
  if (rooms) {
    if(rooms.length > 0) {
      return (
        <div>
          {rooms.map((e) => (
            <div key={e.id} className="py-2">
              <Room id={e.id} room={e.room} time={e.time} roomOwner={e.username} allowDelete={allowDelete}
                    allowBook={allowBook} />
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <div className="text-red-600">No rooms!</div>
        </div>
      )
    }
  } else {
    return null
  }
}

export default Rooms
