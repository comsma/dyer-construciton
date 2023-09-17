import React, {PropsWithChildren, useState} from "react";
import {router, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateJobForm() {

    const [values, setValues] = useState({
        name: "",
        city: "",
        state: ""
    })


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        const key = e.currentTarget.id;
        const value = e.currentTarget.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        router.post('/jobs', values)
        setValues({
            name: "",
            city: "",
            state: ""})
        onSubmit();
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
                        value={values.name}
                        onChange={handleChange} />
                </div>
            </div>
            <div className={'mt-5'}>
                <InputLabel htmlFor={"city"} value={"City"} />
                <div className="mt-2">
                    <input
                        type="text"
                        id="city"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={values.city}
                        onChange={handleChange} />
                </div>
            </div>
            <div className={'mt-5'}>
                <InputLabel htmlFor={"state"} value={"State"} />
                <div className="mt-2">
                    <input
                        type="text"
                        id="state"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={values.state}
                        onChange={handleChange} />
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
