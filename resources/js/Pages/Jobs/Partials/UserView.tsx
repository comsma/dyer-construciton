import {UserType} from "@/types/user";
import React from "react";

export default function UserView({users}: {users: [UserType]}) {
    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-6 text-gray-900">Users</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <button onClick={() => setIsDocumentOpen(true)} className={'my-5 p-5 flex flex-row justify-center items-center w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'}>
                        <div className={'ml-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>
                        </div>
                        <div className={'ml-4'}>
                            <p className={'font-semibold'}>Add a User</p>
                        </div>
                    </button>
                    {users && users.length > 0 ?
                        <>
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                {users.map((user) => (
                                    <li key={user.id} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">{user.username}</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                                Remove
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </> :
                        <></>}

                </dd>
            </div>
        </>
    )
}
