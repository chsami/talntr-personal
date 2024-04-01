'use client'

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { IconMapPin } from '@tabler/icons-react'
import { Chip } from '@nextui-org/chip'
import { Image } from '@nextui-org/react'
import { Badge } from '@nextui-org/badge'
export default function JobCard({
  logo,
  title,
  location,
  categories,
  isPrivate,
  isUrgent,
  companyName,
}: {
  logo: string
  title: string
  location: string
  categories: string[]
  isPrivate: boolean
  isUrgent: boolean
  companyName: string
}) {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <div className="absolute right-1 top-1">
          <Chip className="bg-[#e2eaf8] text-primary">Full-time</Chip>
        </div>
        {isPrivate && (
          <div className="absolute left-0 top-2">
            <Chip className="bg-success text-[#58a65c]  rounded-l-none">
              Private
            </Chip>
          </div>
        )}
        {isUrgent && (
          <div className="absolute left-0 top-unit-10">
            <Chip className="bg-warning text-[#f0b855]  rounded-l-none">
              Urgent
            </Chip>
          </div>
        )}
        <div className="w-full">
          <div className="flex w-full justify-center">
            <Image
              src={logo}
              alt="Company Image"
              width="60"
              style={{ height: '60px' }}
              className="rounded-full"
            />
          </div>
          <div className="flex w-full justify-center">
            <span className="text-xs text-[#58a65c] mt-2">{companyName}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-4">
        <div className="grid w-full justify-center">
          <p className="text-lg mb-2 font-bold">{title}</p>
          <p className="flex w-full text-sm justify-center opacity-8">
            <IconMapPin />
            {location}
          </p>
        </div>
      </CardBody>
      <CardFooter className="p-4">
        <div className="grid grid-cols-1 w-full">
          <div className="flex w-full justify-center">
            {categories.map((category, index) => (
              <Chip key={index} className="mr-2">
                {category}
              </Chip>
            ))}
          </div>
          <div className="flex w-full justify-center mt-4">
            <Badge
              content={'+' + categories.length}
              color="primary"
              className="text-white"
            >
              <div></div>
            </Badge>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
