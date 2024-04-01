'use client'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import toast from 'react-hot-toast'
import { FormEvent } from 'react'
import { createEmail } from '@/actions/create-email'

export default function JoinWaitingList() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const response = await createEmail(formData.get('email') as string)
    if (response.success) {
      toast.success(response.success)
    } else {
      toast.error(response.error)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex-col w-full h-full grid md:grid-cols-2"
    >
      <Input
        name="email"
        className="w-full"
        size="lg"
        type="email"
        color="default"
        placeholder="Enter your email"
        style={{ color: '#696969' }}
        suppressHydrationWarning={true}
      />
      <div className="self-center ml-4 mt-4">
        <Button
          type="submit"
          size="lg"
          color="primary"
          className="shadow-lg font-extrabold"
        >
          Join the waiting list
        </Button>
      </div>
    </form>
  )
}
