import {router} from "@inertiajs/react";
import React from "react";
import {UserJobDocument} from "@/types/plan";
import {Document} from "postcss";

export default function PlanListItemDocumentList({documents, jobId} : {documents: [UserJobDocument], jobId: number}) {
    return (
        <>
            <dt className="text-sm font-medium leading-6 text-gray-900">Documents</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {documents && documents.length > 0 ?
                    <>
                        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                            {documents.map((document: any) => (

                                <li key={document.id} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        {/*<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">{document.title}</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href={route('job.document.view', {'document': document.id, 'job': jobId})} target={'_blank'} className="font-medium text-slate-600 hover:text-slate-500">
                                            Download
                                        </a>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </> :
                    <></>}

            </dd>
        </>
    )
}
