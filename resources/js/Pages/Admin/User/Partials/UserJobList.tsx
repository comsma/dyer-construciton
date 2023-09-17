import {UserJob} from "@/types/user";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import UserListItem from "@/Pages/Admin/User/Partials/UserListItem";
import UserJobListItem from "@/Pages/Admin/User/Partials/UserJobListItem";

export default function UserJobList({jobs}: {jobs: [UserJob]}) {
    console.log(jobs)
    return (
        <>
            <div className={'mt-5'}>
                <h3 className={'text-xl font-bold'}>Jobs</h3>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {jobs && jobs.length > 0? <>
                                <div className={"grid grid-cols-1"}>
                                    <p className={"col-span-1 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}>
                                        Name
                                    </p>
                                </div>
                                <div className={'border-t-2 bg-white flex flex-col divide-y-2'}>

                                        {jobs.map((job) => (
                                            <div key={job.id}><UserJobListItem job={job} /></div>
                                        ))}
                                </div>
                                </> :<>
                                    <div className={'flex place-content-center'}>
                                        <p className={'py-5'}>No Jobs Available</p>
                                    </div>


                                </>}

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
