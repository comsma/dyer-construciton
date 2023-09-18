import {UserType} from "@/types/user";
import {Head, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import UpdateUserPasswordForm from "@/Pages/Admin/User/Partials/UpdateUserPasswordForm";
import {UpdateUserDetailsForm} from "@/Pages/Admin/User/Partials/UpdateUserDetailsForm";
import UserJobList from "@/Pages/Admin/User/Partials/UserJobList";


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
            <div className={'py-10'}>
                <div className={'max-w-5xl mx-auto bg-white py-10 rounded-2xl'}>
                    <div className="">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900 uppercase">{users.data[0].username}</h3>
                                    <UpdateUserDetailsForm user={users.data[0]} />
                                    <UpdateUserPasswordForm></UpdateUserPasswordForm>
                                    <UserJobList jobs={users.data[0].jobs}></UserJobList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>

    </>
)
}
