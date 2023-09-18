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
                <button onClick={() => setDeleteOpen(true)} className="font-medium text-red-600 hover:text-red-500">
                    Remove
                </button>
            </div>

        </>
    )
}
