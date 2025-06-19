import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from "react-router-dom";



const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Skills', href: '/skills', current: false },
  { name: 'Certificates', href: '/certificates', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Social Icons */}
              <div className="flex space-x-4 items-center">
                <a
                  href="https://www.linkedin.com/in/utkarsh-raj-patel-03b3b1251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition duration-300 text-xl"
                >
                  <FaLinkedin className="hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/utkarsh2324?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-white transition duration-300 text-xl"
                >
                  <FaGithub className="hover:scale-110 transition-transform" />
                </a>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=utkarsh0217rajpatel@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-400 hover:text-white transition duration-300 text-xl"
>
  <HiOutlineMail className="hover:scale-110 transition-transform" />
</a>
              </div>

              {/* Desktop navigation */}
              <div className="hidden sm:flex sm:ml-auto sm:space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.name === 'Resume' ? '_blank' : '_self'}
                    className={classNames(
                      'text-sm font-medium px-3 py-2 rounded-md transition-all',
                      item.current
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu items */}
          <DisclosurePanel className="sm:hidden bg-black/60 backdrop-blur-md">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === 'Resume' ? '_blank' : '_self'}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    item.current
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}