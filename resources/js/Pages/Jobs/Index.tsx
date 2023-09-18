import {Head, Link, usePage, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import CreateJobForm from "@/Pages/Jobs/Partials/CreateJobForm";
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import JobListItem from "@/Pages/Jobs/Partials/JobListItem";
import Modal from "@/Components/Modal";

export default function Index({auth}: PageProps) {
    const {jobs}: any = usePage().props;

    let [isCreateJobOpen, setCreateJobOpen] = useState(false)


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-200 leading-tight">Job Dashboard</h2>}
        >

            <Modal show={isCreateJobOpen} onClose={() => (setCreateJobOpen(false))}>
                <div className={'p-5 m-5'}>
                    <CreateJobForm />
                </div>
            </Modal>

            <Head title="Job Dashboard"/>
            <div className={'py-10'}>
                <div className={'max-w-5xl mx-auto py-10 bg-white rounded-2xl'}>
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
            </div>
        </AuthenticatedLayout>
    );
}
