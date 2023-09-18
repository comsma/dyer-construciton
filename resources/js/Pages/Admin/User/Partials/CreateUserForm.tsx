
import React from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {Switch} from "@headlessui/react";
import {useForm} from "@inertiajs/react";

export default function CreateUserForm() {
    const {data, setData, post, errors} = useForm({
        username: '',
        company: '',
        password: '',
        password_confirmation: '',
        has_view_documents: false,
        has_modify_documents: false,
        has_modify_gallery: false,
        has_admin: false
    })

    function submit(e: React.FormEvent) {
        e.preventDefault()

        post(route('admin.user.create'), {
            onError: (errors: any) => {
            }
        })
    }

    return (
        <>
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

                <div className={'mt-5'}>
                    <InputLabel htmlFor={"password"} value={"Password"} />
                    <div className="mt-2">
                        <input
                            type="password"
                            id="password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            value={data.password}
                            onChange={e => setData("password", e.target.value)} />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
                <div className={'mt-5'}>
                    <InputLabel htmlFor={"password_confirmation"} value={"Confirm Password"} />
                    <div className="mt-2">
                        <input
                            type="password"
                            id="password_confirmation"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                            value={data.password_confirmation}
                            onChange={e => setData("password_confirmation", e.target.value)} />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>
                <div className={'mt-5 flex flex-col max-w-sm gap-5'}>
                    <p className={'font-semibold text-lg'}>Permissions</p>
                    <div className={'flex flex-row justify-between'}>
                        <p className={''}>View Documents</p>
                        <Switch
                            checked={data.has_view_documents}
                            onChange={() => setData("has_view_documents", !data.has_view_documents)}
                            className={`${
                                data.has_view_documents ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">View Documents</span>
                            <span
                                className={`${
                                    data.has_view_documents ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Modify Documents</p>
                        <Switch
                            checked={data.has_modify_documents}
                            onChange={() => setData("has_modify_documents", !data.has_modify_documents)}
                            className={`${
                                data.has_modify_documents ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full ml-5`}
                        >
                            <span className="sr-only">Modify Documents</span>
                            <span
                                className={`${
                                    data.has_modify_documents ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Modify Gallery</p>
                        <Switch
                            checked={data.has_modify_gallery}
                            onChange={() => setData("has_modify_gallery", !data.has_modify_gallery)}
                            className={`${
                                data.has_modify_gallery ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">View Documents</span>
                            <span
                                className={`${
                                    data.has_modify_gallery ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                    <div className={'flex flex-row justify-between'}>
                        <p>Administrator</p>
                        <Switch
                            checked={data.has_admin}
                            onChange={() => setData("has_admin", !data.has_admin)}
                            className={`${
                                data.has_admin ? 'bg-slate-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Administrator</span>
                            <span
                                className={`${
                                    data.has_admin ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />

                        </Switch>
                    </div>
                </div>

                <div className="mt-5 flex mx-auto">
                    <PrimaryButton>
                        Create User
                    </PrimaryButton>
                </div>

            </form>
        </>
    )
}
