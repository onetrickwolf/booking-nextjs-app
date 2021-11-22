import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'

import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

function Room({ id, room, time, user, allowDelete, allowBook }) {
  const [deleting, setDeleting] = useState(false)
  const [booking, setBooking] = useState(false)

  async function deleteRoom() {
    setDeleting(true)
    let res = await fetch(`/api/delete-room?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-rooms')
    setDeleting(false)
  }

  async function bookRoom() {
    setDeleting(true)
    let res = await fetch(`/api/delete-room?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-rooms')
    setDeleting(false)
  }
  
  return (
    <div>
      <div className="flex items-center">
        <div className="font-bold">Room {room} reserved for {time}pm {user && 'by'} {user}</div>
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
            {deleting ? 'Booking ...' : 'Book'}
          </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Room
