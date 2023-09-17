import {UserType} from "@/types/user";
import {Link, router} from "@inertiajs/react";
import React, {useState} from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";

export default function UserListItem({user}: {user: UserType}){

    const [isDeleteOpen, setDeleteOpen] = useState(false)

    function deleteUser() {
        router.delete(route('admin.user.destroy', {userId: user.id}))
    }
    return (
        <>
            <Modal show={isDeleteOpen} onClose={() =>setDeleteOpen(false)}>
                <div className={'p-5 m-5'}>
                    <div className={'flex justify-startr'}>
                        <p className={'font-bold text-xl'}>Delete user {user.username}?</p>
                    </div>
                    <div className={"flex flex-row justify-end pt-10 gap-5"}>
                        <SecondaryButton onClick={() => setDeleteOpen(false)} aria-label={"cancel delete"}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton onClick={() => deleteUser()} aria-label={`delete user ${user.id}`}>
                            Delete
                        </DangerButton>
                    </div>
                </div>

            </Modal>
            <div className={'grid grid-cols-5'}>
                <Link href={route('admin.user.get', {userId: user.id})} className={'col-span-4 grid grid-cols-4 hover:opacity-50'}>
                    <p className={'col-span-2 whitespace-nowrap px-3 py-4 text-sm text-gray-900'}>{user.username}</p>
                    <p className={'col-span-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500'}>{user.company}</p>
                </Link>
                <button className={'col-span-1 whitespace-nowrap px-3 py-4 text-sm text-red-600 hover:text-red-400'} onClick={() => setDeleteOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>

        </>
    )
}
