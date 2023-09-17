import {Link} from "@inertiajs/react";
import React from "react";
import {UserJob} from "@/types/user";

export default function UserJobListItem({job}: {job: UserJob}) {
    return (
        <>
            <div className={'grid grid-cols-1'}>
                <Link href={route('jobs.get', {jobId: job.id})} className={'col-span-4 grid grid-cols-4 hover:opacity-50'}>
                    <p className={'col-span-1 whitespace-nowrap px-3 py-4 text-sm text-gray-900'}>{job.name}</p>
                </Link>
            </div>

        </>
    )
}
