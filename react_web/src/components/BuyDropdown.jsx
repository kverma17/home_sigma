import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BuyDropdown() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <Menu as="div" style={{textAlign: 'left', position:"relative",display:'inline-block' }}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" style={{
    display: 'inline-flex',
    // width: '100%',
    justifyContent: 'center',
    columnGap: '0.375rem',
    borderRadius: '0.375rem',
    backgroundColor:'white',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    // color: '#111827',
    cursor: 'pointer',
    border:"None"
  }}
  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          Buy
          <ChevronDownIcon style={{marginRight: '-0.25rem', height: '1.25rem', width: '1.25rem', color: 'black'}} aria-hidden="true" />
        </Menu.Button>
      </div>
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{
    position: 'absolute',
    right: '0',
    zIndex: 10,
    marginTop: '0.5rem',
    width: '14rem',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.05)',
    outline: 'none',
  }}>
          <div className="py-1" style={{padding: "0px 1px"}}>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
    </Menu>
  )
}
