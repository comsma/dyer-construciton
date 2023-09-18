import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import {Switch} from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import {useForm} from "@inertiajs/react";

export default function CreateUserOnJobForm({jobId, onSubmitted}: {jobId: number, onSubmitted: () => void}) {
    const {data, setData, post, errors}= useForm({
        username: '',
        company: '',
        password: '',
        password_confirmation: '',
    })

    function submit(e: React.FormEvent) {
        e.preventDefault()

        post(route('jobs.user.create', {'job': jobId}), {
            onSuccess: onSubmitted
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
                <div className="mt-5 flex mx-auto">
                    <PrimaryButton>
                        Create User
                    </PrimaryButton>
                </div>

            </form>

        </>
    )
}
