'use client'

import { Button } from '@nextui-org/button'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Link, NavbarItem } from '@nextui-org/react'
import Banner from '@/components/banner/banner'
import BannerImage from '@/components/banner/banner-image'
import JobCard from '@/components/job-card/job-card'
import { useState } from 'react'
import { IconCheck, IconMapPin } from '@tabler/icons-react'
import Image from 'next/image'
import searchImage from '@/public/images/search.png'
import connectImage from '@/public/images/connect.png'
import evolveImage from '@/public/images/evolve.png'
import { Divider } from '@nextui-org/divider'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Talnts', 'Bedrijven', 'Prijzen', 'Inzichten']
  return (
    <div className="bg-no-repeat bg-cover bg-center w-full h-full absolute">
      <div className="w-full h-auto">
        <div className=" container sm:mx-auto pr-16 pl-16">
          <Navbar
            position="sticky"
            onMenuOpenChange={setIsMenuOpen}
            style={{ maxWidth: '100% !important' }}
            className="justify-start mt-4"
          >
            <NavbarContent className="xs:flex md:hidden" justify="start">
              <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              />
            </NavbarContent>

            <NavbarContent className="xs:hidden" justify="start">
              <NavbarBrand>
                <h1 className="font-bold text-3xl text-primary">Talntr</h1>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent
              className="hidden md:flex gap-4 bg-[#f6f6f6] rounded-full p-8"
              justify="center"
            >
              <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className="sm:hidden"
              />
              <NavbarItem>
                <Link color="primary" href="#">
                  Talnts
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="primary" href="#">
                  Bedrijven
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="primary" href="#">
                  Prijzen
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="primary" href="#">
                  Inzichten
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden sm:flex">
                <Button
                  size="lg"
                  variant="bordered"
                  className="bg-[#e2eaf8] text-primary"
                  href="#"
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem className="hidden sm:flex">
                <Button
                  size="lg"
                  variant="bordered"
                  className="text-white bg-primary"
                  href="#"
                >
                  Registreer
                </Button>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link className="w-full" href="#" size="lg">
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
              <NavbarMenuItem>
                <div className="w-full grid grid-cols-2 justify-around absolute bottom-0 left-0">
                  <div className="p-4 w-full">
                    <Button
                      size="sm"
                      variant="bordered"
                      className="bg-[#e2eaf8] text-primary w-full"
                      href="#"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="p-4 w-full">
                    <Button
                      size="sm"
                      variant="bordered"
                      className="text-white bg-primary w-full"
                      href="#"
                    >
                      Registreer
                    </Button>
                  </div>
                </div>
              </NavbarMenuItem>
            </NavbarMenu>
          </Navbar>
        </div>
        <Divider className="mt-4 w-full h-0.5 bg-primary opacity-50" />
        <div className=" container sm:mx-auto pr-16 pl-16">
          <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 mt-32 relative h-auto lg:mb-16 xl:mb-32">
            <div className="grid justify-center place-items-start mr-16">
              <div className="">
                <Banner></Banner>
                {/*<JoinWaitingList></JoinWaitingList>*/}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -left-20 min-w-32 lg:min-w-80">
                <JobCard
                  logo={'/images/logo-1.png'}
                  title="Software Engineer"
                  location="Brussel, BE"
                  categories={['Web App', 'C#', 'Javascript', 'Vue.js']}
                  isPrivate={false}
                  isUrgent={false}
                  companyName={'Catalyst'}
                ></JobCard>
              </div>
              <div className="absolute -top-350 -right-28 min-w-32 lg:min-w-80">
                <JobCard
                  logo={'/images/logo-1.png'}
                  title="Functional Analyst"
                  location="Gent, BE"
                  categories={['Web App', 'C#', 'Javascript', 'Vue.js']}
                  isPrivate={false}
                  isUrgent={false}
                  companyName={'Catalyst'}
                ></JobCard>
              </div>
              <div className="absolute top-96 -right-10 min-w-32 lg:min-w-80">
                <JobCard
                  logo={'/images/logo-1.png'}
                  title="Lead Software Engineer"
                  location="London, UK"
                  categories={['App', 'Design', 'Digital']}
                  isPrivate={true}
                  isUrgent={true}
                  companyName={'Catalyst'}
                ></JobCard>
              </div>
              <div className="absolute top-unit-8xl left-0 min-w-32 lg:min-w-80">
                <JobCard
                  logo={'/images/logo-1.png'}
                  title="Senior Web Developer"
                  location="London, UK"
                  categories={['App', 'Design', 'Digital']}
                  isPrivate={true}
                  isUrgent={true}
                  companyName={'Catalyst'}
                ></JobCard>
              </div>
              <div className="ml-16">
                <BannerImage />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-24">
            <h1 className="text-5xl text-primary font-bold">CONNECT</h1>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-16 self-center justify-items-start">
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" /> Je
                Privacy Staat Centraal
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Data Inzichten
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" /> Uw
                Volgende Stap
              </span>
            </div>
            <div className="hidden md:block">
              <Image src={connectImage} alt={'Connect image'} />
            </div>
          </div>
          <div className="w-full flex justify-center mb-24 mt-24">
            <h1 className="text-5xl text-primary font-bold">SEARCH</h1>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block">
              <Image src={searchImage} alt="banner image" />
            </div>
            <div className="grid grid-cols-1 gap-16 self-center justify-items-end">
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Extensive Search centraal
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Personality & Value
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Data Insights
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center mt-24 mb-24">
            <h1 className="text-5xl text-primary font-bold">EVOLVE</h1>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-16 self-center justify-items-start">
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Boost Your Career centraal
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Develop Your Plan Match
              </span>
              <span className="flex text-3xl">
                <IconCheck size="32" color="#3582dc" className="mt-1 mr-1" />{' '}
                Build Your Future
              </span>
            </div>
            <div className="hidden md:block">
              <Image src={evolveImage} alt={'Evolve Image'} />
            </div>
          </div>
        </div>
      </div>
      <Divider className="mt-32 w-full h-0.5 bg-primary opacity-80" />
      <footer className="w-full md:flex justify-center bottom-0 p-8 grid grid-col-1">
        <div className="md:flex justify-evenly items-center w-1/2 grid grid-col-1 ">
          <div>About</div>
          <div>Features</div>
          <div>Pricing</div>
          <div>Gallery</div>
          <div>Team</div>
          <div className="absolute right-0 md:relative">
            <Button size="md" variant="bordered" color="primary">
              Contact us
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
