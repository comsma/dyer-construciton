import {PageProps} from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import DocumentView from "@/Pages/Jobs/Partials/DocumentView";
import UserView from "@/Pages/Jobs/Partials/UserView";
import React from "react";
import UpdateJobForm from "@/Pages/Jobs/Partials/UpdateJobForm";
import {AvailableUser, JobData} from "@/types/jobs";

export default function View({auth, job, available_users}: PageProps<{ job: JobData, available_users: [AvailableUser] }>) {


    return(
        <>
            <AuthenticatedLayout
                user={auth.user}
            >
                <Head title={job.data[0].name}/>
                <div className={'py-10'}>
                    <div className={'max-w-5xl mx-auto bg-white py-10 rounded-2xl'}>
                        <div className="">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">{job.data[0].name}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 mt-8 flow-root">
                                <dl className="divide-y divide-gray-100">
                                    <UpdateJobForm job={job.data[0]} />
                                    <DocumentView jobId={job.data[0].id} documents={job.data[0].documents} />
                                    <UserView availableUsers={available_users} jobId={job.data[0].id} users={job.data[0].users} />
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>



        </>
    )
}
