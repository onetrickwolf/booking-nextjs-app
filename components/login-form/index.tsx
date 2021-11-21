import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function LoginForm() {
  const [login, setLogin] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      if (process.browser) {
        localStorage.setItem('user', login);
      }
      setSubmitting(false)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="login">
          <h3 className="font-bold">Login</h3>
        </label>
        <input
          id="login"
          className="shadow border rounded w-full"
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Logging in ...' : 'Login'}
      </Button>
    </form>
  )
}
