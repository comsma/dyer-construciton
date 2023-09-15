import {UserType} from "@/types/user";
import {Head, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";


type props = {
    users: {
        data:[UserType]
    }
}
export default function User({users, auth}: PageProps<props>) {

return (
    <>
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={users.data[0].username}/>

            <div className={'max-w-5xl mx-auto bg-white my-10 py-10 rounded-2xl'}>
                <div className="">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">{users.data[0].username}</h3>
                            </div>
                        </div>
                    </div>
                    {/*<div className="border-t border-gray-100 mt-8 flow-root">*/}
                    {/*    <dl className="divide-y divide-gray-100">*/}
                    {/*        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">*/}
                    {/*            <dt className="text-sm font-medium text-gray-900">City</dt>*/}
                    {/*            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job.data[0].city}</dd>*/}
                    {/*        </div>*/}
                    {/*        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">*/}
                    {/*            <dt className="text-sm font-medium text-gray-900">State</dt>*/}
                    {/*            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{job.data[0].state}</dd>*/}
                    {/*        </div>*/}
                    {/*        <DocumentView id={job.data[0].id} documents={job.data[0].documents} />*/}
                    {/*        <UserView />*/}
                    {/*    </dl>*/}
                    {/*</div>*/}
                </div>
            </div>
        </AuthenticatedLayout>

    </>
)
}
