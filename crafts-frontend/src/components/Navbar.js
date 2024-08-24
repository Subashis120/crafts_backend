import { React, useState } from 'react'
import { Link, json } from "react-router-dom";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const products1 = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: 'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: 'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg', icon: CursorArrowRaysIcon },
]

const profile = [
    { name: 'Analytics'},
    { name: 'Engagement'},
    { name: 'Logout'},
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const users = JSON.parse(localStorage.getItem("users"))
    if (users != null) {
       // console.log("id", users.id)
    }

    const handleOnClick = (e) => {
       // console.log("data: ", e)
    }

    const css = `
    .divTop4 {
        padding: 2%;
    }
    @media (max-width: 650px) {
        .divTop4 {
            padding: 4%;
        }
    }`;
    return (
        <header className="bg-gradient-to-tr from-[#f2f7fa] to-[#cacdcf] fixed top-0 w-full z-10"
        >
            <style scoped>{css}</style>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between divTop4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only text-yellow-600">Crafts</span>
                        <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12" >
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#4e0083]">
                            Product
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-[#4e0083]" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full z-10 mt-3 w-screen max-w-2xl rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className='flex flex-row'
                                style={{ width: '60vw', }}
                            >
                                <div className='basis-1/2'>
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='basis-1/4'>
                                    <div className="p-4">
                                        {products1.map((item) => (
                                            <div
                                                key={item.name}
                                                className="mb-3 bg-white mb-4 border border-yellow-800 rounded-lg shadow dark:bg-gray-1000 dark:border-gray-700"
                                                style={{ width: '20vw', cursor: 'pointer' }}
                                            >
                                                <a href="#">
                                                    <img className="rounded-t-lg" src={item.href} alt=""
                                                        style={{ height: '25vh', width: '20vw' }} />
                                                </a>
                                                <div className="pt-2 px-2">
                                                    <a href="#">
                                                        <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                                    </a>
                                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{item.description}</p>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm text-[#4e0083] font-semibold leading-6">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-[#4e0083]">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-[#4e0083]">
                        Company
                    </a>
                </PopoverGroup>
                {!users ? <div className='hidden lg:flex lg:flex-1 lg:justify-end' id='login'>
                    <Link className="text-sm text-yellow-800 font-semibold leading-6 text-gray-900" to="/login">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <Link to="#" className="px-4 text-sm text-yellow-800 font-semibold leading-6 text-gray-900">
                        Sign Up
                    </Link>
                </div> : <div className='hidden lg:flex lg:flex-1 lg:justify-end' id='login'>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                            < UserCircleIcon aria-hidden="true" className="h-6 w-6 text-yellow-800 p-1/2" />

                            <h3 className="text-sm text-yellow-800 font-semibold">{users.name}</h3>
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-yellow-800" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full z-10 mt-3 w-screen w-10 rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className='flex flex-row'
                                style={{ width: '60vw', }}
                            >
                                <div className='basis-1/2'>
                                    <div className="p-4">
                                        {profile.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex-auto">
                                                    <Link to={"/"+item.name}
                                                    className="block font-semibold text-yellow-800"
                                                    onClick={handleOnClick}>
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>}
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">

                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />

                        </a>
                        <h3 className="sr-only">Crafts</h3>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#4e0083] hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>

                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>

                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4e0083] hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4e0083] hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4e0083] hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            {!users ? <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-800 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-800 hover:bg-gray-50"
                                >
                                    Sign Up
                                </a>
                            </div> : <div className="py-6">
                                <hr class="h-px my-8 bg-yellow-800 border-1" />
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-yellow-800 hover:bg-gray-50">
                                        < UserCircleIcon aria-hidden="true" className="h-6 w-6 text-yellow-800 p-1/2 mr-2" />
                                        {users.name}
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none right-0 group-data-[open]:rotate-180" />
                                    </DisclosureButton>

                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...profile].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                className="flex justify-center items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-yellow-800 hover:bg-gray-50"
                                            >
                                                <Link to={"/"+item.name}
                                                    className="block font-semibold text-yellow-800"
                                                    onClick={handleOnClick}>
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>

                                </Disclosure>
                            </div>}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}