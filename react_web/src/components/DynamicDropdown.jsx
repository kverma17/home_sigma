import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function DynamicDropdown({ dropdownName, options }) {
  return (
    <Menu as="div" style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
      <div>
        <Menu.Button style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          gap: '0.375rem',
          borderRadius: '0.375rem',
          backgroundColor: 'white',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          margin:"10px"
        }}>
          {dropdownName}
          <ChevronDownIcon style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items style={{
          position: 'absolute',
          right: '0',
          zIndex: '10',
          marginTop: '0.5rem',
          width: '14rem',
          borderRadius: '0.375rem',
          backgroundColor: 'white',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          outline: 'none'
        }}>
          <div style={{ padding: '0.5rem 0' }}>
            {Object.keys(options).map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <a
                    href={options[option]}
                    style={{
                      display: 'block',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: active ? '#1f2937' : '#4b5563',
                      backgroundColor: active ? '#f3f4f6' : 'white',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {option}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DynamicDropdown;