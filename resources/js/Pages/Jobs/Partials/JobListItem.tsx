import {Link, router} from "@inertiajs/react";
import Modal from "@/Components/Modal";
import React, {useState} from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

type Props = {
    job: {
        id: number,
        name: string,
        city: string,
        state: string
    }
}
export default function JobListItem({job}: Props) {

    const [isDeleteOpen, setDeleteOpen] = useState(false)

    function deleteJob(){
        router.delete(`/jobs/${job.id}`)
    }

    return(
        <>
            <Modal show={isDeleteOpen} onClose={() =>setDeleteOpen(false)}>
                <div className={'p-5 m-5'}>
                    <div className={'flex justify-startr'}>
                        <p className={'font-bold text-xl'}>Delete Job {job.name}?</p>
                    </div>
                    <div className={"flex flex-row justify-end pt-10 gap-5"}>
                        <SecondaryButton onClick={() => setDeleteOpen(false)} aria-label={"cancel delete"}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton onClick={() => deleteJob()} aria-label={`delete job ${job.id}`}>
                            Delete
                        </DangerButton>
                    </div>
                </div>

            </Modal>


            <div className={'grid grid-cols-5'}>
                <Link href={route('jobs.get', {'job': job.id})} className={'col-span-4 grid grid-cols-4 hover:opacity-50'}>
                    <p className={'col-span-2 whitespace-nowrap px-3 py-4 text-sm text-gray-900 overflow-hidden'}>{job.name}</p>
                    <p className={'col-span-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500'}>{job.city}</p>
                    <p className={'col-span-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500'}>{job.state}</p>
                </Link>
                <button onClick={() => setDeleteOpen(true)} className="font-medium text-red-600 hover:text-red-500">
                    Remove
                </button>
            </div>
        </>
    )
}
