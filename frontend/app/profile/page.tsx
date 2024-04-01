import { Avatar } from '@nextui-org/avatar'
import { Input } from '@nextui-org/input'

export default function Profile() {
  return (
    <div>
      <div className="h-screen flex">
        <div className="flex flex-none"></div>
        <div className="flex flex-grow h-screen justify-items-center rounded bg-white">
          <div className="container mx-auto w-full mt-14 ml-14">
            <h1 className="text-3xl mb-4 font-bold">Profile</h1>
            <div className="flex">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-25 h-25 text-large mb-14"
              />
              <div className="flex flex-col mx-auto gap-y-4 ml-4">
                <Input type="text" label="First name" />
                <Input type="text" label="Name" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow"></div>
      </div>
    </div>
  )
}
