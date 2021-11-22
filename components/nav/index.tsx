import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Button from "@/components/button";
import Router from "next/router";

function logoutHandler(e) {
  e.preventDefault()
  try {
    if (process.browser) {
      localStorage.removeItem('user');
    }
    Router.push('/')
  } catch (e) {
    throw Error(e.message)
  }
}

export default function Nav({ title = 'Booking' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
          <Button onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      </nav>
    </Container>
  )
}
