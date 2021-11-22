import { useState } from 'react'
import { mutate } from 'swr'

import Button from '@/components/button'
import { useAuth } from "@/lib/swr-hooks";

function Room({ id, room, time, roomOwner, allowDelete, allowBook }) {
  const [deleting, setDeleting] = useState(false)
  const [booking, setBooking] = useState(false)
  const { username } = useAuth();

  async function deleteRoom() {
    setDeleting(true)
    const res = await fetch('/api/delete-room', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id
      }),
    })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate(`/api/get-rooms`)
    setDeleting(false)
  }

  async function bookRoom() {
    setBooking(true)
    const res = await fetch('/api/book-room', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        username,
      }),
    })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-rooms')
    setBooking(false)
  }

  return (
    <div>
      <div className="flex items-center">
        <div className="font-bold">Room {room} reserved for {time}pm {roomOwner && 'by'} {roomOwner}</div>
        <div className="flex ml-4">
          {allowDelete &&
          <Button
            disabled={deleting}
            onClick={deleteRoom}
            className="h-5 py-0 mx-1"
          >
            {deleting ? 'Deleting ...' : 'Delete'}
          </Button>
          }
          {allowBook &&
          <Button
            disabled={booking}
            onClick={bookRoom}
            className="h-5 py-0 mx-1"
          >
            {booking ? 'Booking ...' : 'Book'}
          </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Room
