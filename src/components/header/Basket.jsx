import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { IoCheckmarkDone } from "react-icons/io5";
import { BasketCntx } from '../../services/CntxBasket';

export default function Basket({ openBasket, setOpenBasket, data }) {

    const { basketArr } = useContext(BasketCntx)
    const { setBasketArr } = useContext(BasketCntx)
    console.log(basketArr);

    function handleCount(itemId, n) {        
        const index = basketArr.findIndex(item => item.id == itemId)
        n == -1 && basketArr[index].count > 1 ? basketArr[index].count += n : n == 1 ? basketArr[index].count += n : ''
        console.log(basketArr);
        setBasketArr([...basketArr])
        
    }

    return (
        <Transition.Root show={openBasket} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenBasket}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpenBasket(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                Səbət
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {
                                                basketArr.map(item => (
                                                    <div key={item.id} className="flex w-full space-x-2 sm:space-x-4 my-[15px] shadow-lg shadow-indigo-10/40">
                                                        <img className="flex-shrink-0 object-cover w-[35%] h-25 dark:border-transparent outline-none sm:w-[30%] sm:h-32 dark:bg-gray-500" src={item.img} alt="Polaroid camera" />
                                                        <div className="flex flex-col justify-between w-full pb-2">
                                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                                <div className="space-y-1">
                                                                    <h3 className="text-lg font-semibold leadi sm:pr-8">{item.name.slice(0, 13)}...</h3>
                                                                    <p className="text-sm dark:text-gray-400">{item.category}</p>
                                                                </div>
                                                                <div>
                                                                    <span className="text-lg font-semibold">{item.price.xs || item.price.sm || item.price.md || item.price.lg} ₼</span>
                                                                </div>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <button onClick={() =>handleCount(item.id, -1)} type="button" className="inline-flex items-center rounded-[5px] border border-transparent bg-indigo-600 pb-[3px] px-[7px] text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">-</button>
                                                                <span className='px-[5px]'>{item.count}</span>
                                                                <button onClick={() =>handleCount(item.id, 1)} type="button" className="inline-flex items-center rounded-[5px] border border-transparent bg-indigo-600 pb-[3px] px-[5px] text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">+</button>
                                                                <span className='px-[10px] py-[5px] ml-2'>Ümumi qiymət: {basketArr.filter(crd => crd.id == item.id)[0].count * (item.price.xs || item.price.sm || item.price.md || item.price.lg)} ₼</span>
                                                            </div>
                                                            <div className="flex text-sm divide-x">
                                                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                                        <rect width="32" height="200" x="168" y="216"></rect>
                                                                        <rect width="32" height="200" x="240" y="216"></rect>
                                                                        <rect width="32" height="200" x="312" y="216"></rect>
                                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                                    </svg>
                                                                    <span>Remove</span>
                                                                </button>
                                                                <button type="button" className="flex items-center lg:px-2 py-1 space-x-1">
                                                                    <div className='flex items-center lg:gap-[5px]'><IoCheckmarkDone />Səbəti tamamla</div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
