import {InertiaFormProps} from "@inertiajs/react/types/useForm";
import {useForm} from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {UserType} from "@/types/user";
import {Switch} from "@headlessui/react";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export function UpdateUserDetailsForm({user}: {user: UserType}) {
    const { data, setData, patch, reset, errors }: InertiaFormProps<{username: string, company: string, hasViewDocuments: boolean}> = useForm({
        username: user.username,
        company: user.company,
        hasViewDocuments: user.hasViewDocuments,
        hasModifyDocuments: user.hasModifyDocuments,
        hasModifyGallery: user.hasModifyGallery,
        hasAdmin: user.hasAdmin
    })

    function submit(e: React.FormEvent) {
        e.preventDefault();
        patch(route('admin.user.update', {userId: user.id}), {
            onError: (errors: any) => {
                if (errors.username) {
                    reset('username');
                }
            },
        })
    }

    return <>
        <div className={'mt-5'}>
            <h3 className={'text-xl font-bold'}>Profile Information</h3>
            <form onSubmit={submit}>
                <div className={'mt-5'}>
                    <InputLabel htmlFor={"username"} value={"Username"} />
                    <div className="mt-2">
                        <input
                            type="text"
                            id="username"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            value={data.username}
                            onChange={e => setData("username", e.target.value)} />
                        <InputError message={errors.username} className="mt-2" />
                    </div>
                </div>
                <div className={'mt-5'}>
                    <InputLabel htmlFor={"company"} value={"Company"} />
                    <div className="mt-2">
                        <input
                            type="text"
                            id="company"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            value={data.company}
                            onChange={e => setData("company", e.target.value)} />
                        <InputError message={errors.company} className="mt-2" />
                    </div>
                </div>
                <div className={'mt-5 flex flex-col max-w-sm gap-5'}>
                    <p className={'font-semibold text-lg'}>Permissions</p>
                    <div className={'flex flex-row justify-between'}>
                        <p className={''}>View Documents</p>
                        <Switch
                            checked={data.hasViewDocuments}
                            onChange={() => setData("hasViewDocuments", !data.hasViewDocuments)}
                            className={`${
                                data.hasViewDocuments ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">View Documents</span>
                            <span
                                className={`${
                                    data.hasViewDocuments ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Manage Documents</p>
                        <Switch
                            checked={data.hasModifyDocuments}
                            onChange={() => setData("hasModifyDocuments", !data.hasModifyDocuments)}
                            className={`${
                                data.hasModifyDocuments ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full ml-5`}
                        >
                            <span className="sr-only">Manage Documents</span>
                            <span
                                className={`${
                                    data.hasModifyDocuments ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Modify Gallery</p>
                        <Switch
                            checked={data.hasModifyGallery}
                            onChange={() => setData("hasModifyGallery", !data.hasModifyGallery)}
                            className={`${
                                data.hasModifyGallery ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">View Documents</span>
                            <span
                                className={`${
                                    data.hasModifyGallery ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Administrator</p>
                        <Switch
                            checked={data.hasAdmin}
                            onChange={() => setData("hasAdmin", !data.hasAdmin)}
                            className={`${
                                data.hasAdmin ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Administrator</span>
                            <span
                                className={`${
                                    data.hasAdmin ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>


                </div>



                <div className="mt-5 flex mx-auto">
                    <PrimaryButton>
                        Save
                    </PrimaryButton>
                </div>

            </form>
        </div>




    </>
}
