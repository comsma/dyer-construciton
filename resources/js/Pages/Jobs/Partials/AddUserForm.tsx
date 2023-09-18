import React, {useEffect, useState} from "react";
import {router, useForm} from "@inertiajs/react";
import {AvailableUser} from "@/types/jobs";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AddUserForm({jobId, formOpen, availableUsers, onSubmitted}: {
    jobId: number, formOpen: boolean, availableUsers: [AvailableUser], onSubmitted: () => void }) {
    const [userId, setUserId] = useState<number | undefined>(undefined)


    function submit() {
        if(userId){
            router.post(route('jobs.user.add', {'job': jobId, 'user': userId}))
            onSubmitted()
        }
    }
    useEffect(() => {
        if (formOpen){
            router.reload({ only: ['available_users']})
        }
    },[formOpen])
    return (
        <>
                {availableUsers && availableUsers.length > 0? <>
                    <div className="mt-5">
                        <InputLabel htmlFor={"userId"} value={"User"} />
                        <div className="mt-2">
                            <select
                                id="userId"
                                name="userId"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                value={userId}
                                onChange={e => setUserId(+e.target.value)}
                            >
                                {availableUsers.map((user) => (
                                    <option key={user.id} value={user.id}>{user.username}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </> :null }


                <div className="mt-5 flex mx-auto">
                    <PrimaryButton onClick={() => submit()}>
                        Add User
                    </PrimaryButton>
                </div>


        </>
    )
}
