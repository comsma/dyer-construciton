import {Head, Link, usePage, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import CreateJobForm from "@/Pages/Jobs/Partials/CreateJobForm";
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import JobListItem from "@/Pages/Jobs/Partials/JobListItem";

export default function Index({auth}: PageProps) {
    const {jobs}: any = usePage().props;

    let [isCreateJobOpen, setCreateJobOpen] = useState(false)


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Job Dashboard</h2>}
        >

            <Transition appear show={isCreateJobOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setCreateJobOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-semibold leading-6 text-gray-900"
                                    >
                                        Add a New Job
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        <CreateJobForm />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Head title="Job Dashboard"/>
            <div className={'max-w-5xl mx-auto bg-slate-100 my-10 py-10 rounded-2xl'}>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">

                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button
                                type="button"
                                className="block rounded-md bg-slate-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                                onClick={() => setCreateJobOpen(true)}
                            >
                                Add Job
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className={"grid grid-cols-5"}>
                                        <p className={"col-span-2 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}>
                                            Name
                                        </p>
                                        <p className={"col-span-1 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}>
                                            City
                                        </p>
                                        <p className={"col-span-1 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}>
                                            State
                                        </p>
                                    </div>
                                    <div className={'border-t-2 bg-white flex flex-col divide-y-2'}>
                                        {jobs.data? <>
                                            {jobs.data.map((job:  any) => (
                                                <div key={job.id}><JobListItem job={job}/></div>
                                            ))}
                                        </> : <></>}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </AuthenticatedLayout>
    );
}


// <div className="mt-8 flow-root">
//     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-300">
//                     <thead className="bg-gray-50">
//                     <tr>
//                         <th scope="col"
//                             className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
//                             Name
//                         </th>
//                         <th scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                             City
//                         </th>
//                         <th scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                             State
//                         </th>
//                         <th scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                         </th>
//                         <th scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 bg-white">
//                     {jobs.data? <>
//                         {jobs.data.map((job:  any) => (
//
//                             <tr key={job.name}>
//
//                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
//                                     {job.name}
//                                 </td>
//                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.city}</td>
//                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.state}</td>
//                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
//                                     <Link href={`/jobs/${job.id}`}>
//                                         View
//                                     </Link>
//                                 </td>
//                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-red-600">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                                     </svg>
//                                 </td>
//                             </tr>
//
//                         ))}
//                     </> : <></>}
//
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>
