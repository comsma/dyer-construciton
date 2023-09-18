import React, {PropsWithChildren, useState} from "react";
import {router, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateJobForm() {
    const {data, setData, post, errors}= useForm({
        name: "",
        city: "",
        state: ""
    })


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        post(route('jobs.create'),{})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={'mt-5'}>
                <InputLabel htmlFor={"name"} value={"Name"} />
                <div className="mt-2">
                    <input
                        type="text"
                        id="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)} />
                </div>
            </div>
            <div className={'mt-5'}>
                <InputLabel htmlFor={"city"} value={"City"} />
                <div className="mt-2">
                    <input
                        type="text"
                        id="city"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={data.city}
                        onChange={(e) => setData('city', e.target.value)} />
                </div>
            </div>
            <div className={'mt-5'}>
                <InputLabel htmlFor={"state"} value={"State"} />
                <div className="mt-2">
                    <input
                        type="text"
                        id="state"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={data.state}
                        onChange={(e) => setData('name', e.target.value)} />
                </div>
            </div>

            <div className="mt-5 flex mx-auto">
                <PrimaryButton>
                    Create Job
                </PrimaryButton>
            </div>

        </form>
    )
}
