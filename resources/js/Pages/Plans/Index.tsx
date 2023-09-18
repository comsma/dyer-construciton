import {PageProps} from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {User} from "@/types/plan";
import {Head} from "@inertiajs/react";
import React from "react";
import PlanListItem from "@/Pages/Plans/Partials/PlanListItem";


export default function Index({auth, users}: PageProps<{ users: User }>) {

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-200 leading-tight">My Plans</h2>}
            >
                <Head title="My Plans"/>
                <div className={'max-w-5xl mx-auto mt-10 py-10 rounded-2xl bg-white'}>
                    {users.data[0].jobs && users.data[0].jobs.length > 0? <>
                        <div className="rounded-md m-5">
                            {users.data[0].jobs.map((job) => (
                                <div key={job.id} className="">
                                    <PlanListItem job={job} />
                                </div>
                            ))}
                        </div>
                    </>: <>
                        <div className={'flex place-content-center'}>
                            <p className={'my-5'}>No Plans Available</p>
                        </div>
                    </>}
                </div>
            </AuthenticatedLayout>
        </>
    )
}
