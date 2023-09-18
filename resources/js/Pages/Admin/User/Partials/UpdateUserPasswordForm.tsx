import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import React, {useRef} from "react";
import InputError from "@/Components/InputError";

export default function UpdateUserPasswordForm() {
    const { data, setData, post, reset, errors } = useForm({
        password: '',
        password_confirmation: '',
    })

    function submit(e: React.FormEvent) {
        post(route('admin.user.password.update', {userId: 4}), {
            onError: (errors: any) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                }
            },
        })
    }

    return <>
        <div className={'mt-5'}>
            <h3 className={'text-xl font-bold'}>Password</h3>
            <form onSubmit={submit}>
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
                        Change Password
                    </PrimaryButton>
                </div>

            </form>
        </div>


    </>
}
