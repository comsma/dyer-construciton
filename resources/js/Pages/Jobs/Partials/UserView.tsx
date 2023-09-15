export default function UserView() {
    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-6 text-gray-900">User Access</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">mary55</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    Remove
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">company55</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    Remove
                                </a>
                            </div>
                        </li>
                    </ul>
                </dd>
            </div>
        </>
    )
}
