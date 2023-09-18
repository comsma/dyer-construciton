import {useForm} from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import {Switch} from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";

type props = {
    job: {
        id: number,
        name: string,
        city: string,
        state: string
    }
}
export default function UpdateJobForm({job}: props) {
    const { data, setData, patch, reset, errors} = useForm({
        name: job.name,
        city: job.city,
        state: job.state
    })

    function submit(e: React.FormEvent){
        e.preventDefault();
        patch(route('job.edit', {'jobId': job.id}), {

        })
    }

    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-6 text-gray-900">Job Information</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <form onSubmit={submit}>
                        <div className={'mt-5'}>
                            <InputLabel htmlFor={"name"} value={"Name"} />
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                    value={data.name}
                                    onChange={e => setData("name", e.target.value)} />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                        </div>
                        <div className={'mt-5'}>
                            <InputLabel htmlFor={"city"} value={"Company"} />
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="city"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                    value={data.city}
                                    onChange={e => setData("city", e.target.value)} />
                                <InputError message={errors.city} className="mt-2" />
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
                                    onChange={e => setData("state", e.target.value)} />
                                <InputError message={errors.state} className="mt-2" />
                            </div>
                        </div>

                        <div className="mt-5 flex mx-auto">
                            <PrimaryButton>
                                Save
                            </PrimaryButton>
                        </div>

                    </form>
                </dd>

            </div>
        </>
    )
}
