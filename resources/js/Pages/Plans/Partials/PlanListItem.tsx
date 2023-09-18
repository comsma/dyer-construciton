import {UserJob} from "@/types/plan";
import React from "react";
import PlanListItemDocumentList from "@/Pages/Plans/Partials/PlanListItemDocumentList";

export default function PlanListItem({job}: {job: UserJob}) {
    return (
        <>
            <div className={'my-10 p-5 rounded-2xl border-2'}>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{job.name}</h3>
                </div>
                <div className="mt-6">
                    <dl className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">City</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{job.city}</dd>
                        </div>
                        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">State</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{job.state}</dd>
                        </div>
                        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                            <PlanListItemDocumentList jobId={job.id} documents={job.documents} />
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}
