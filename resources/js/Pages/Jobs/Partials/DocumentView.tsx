import {router, useForm} from "@inertiajs/react";
import React, {useState} from "react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import {InertiaFormProps} from "@inertiajs/react/types/useForm";
import {JobDocument} from "@/types/jobs";
import DangerButton from "@/Components/DangerButton";

type Props = {
    documents: [JobDocument],
    id: string
}
export default function DocumentView({documents, id}: Props ){
    const { data, setData, post, progress }: InertiaFormProps<{ title: string, document: File}> = useForm({
        title: "",
        document: null,
    })

    function deleteDocument(document_id: string) {
        router.delete(`/jobs/${id}/documents/${document_id}`)
    }

    function submit(e: React.FormEvent) {
        e.preventDefault()
        post(`/jobs/${id}/documents`)
        setData({
            title: "",
            document:null
        })
    }

    const [isUploadDocumentOpen, setIsDocumentOpen] = useState(false);
    return (
        <>
            <Modal show={isUploadDocumentOpen} onClose={() => setIsDocumentOpen(false)}>
                <div className={'p-5 m-5'}>
                    <form onSubmit={submit}>
                    <div className={'mt-5'}>
                        <InputLabel htmlFor={"title"} value={"Title"} />
                        <div className="mt-2">
                            <input
                                type="text"
                                id="title"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                value={data.title}
                                onChange={e => setData("title", e.target.value)} />
                        </div>
                    </div>
                        <div className="mt-5">
                        {data.document? <>
                            <div className={'flex flex-row items-center'}>
                                <p className={'whitespace-nowrap px-3 py-4 text-sm text-gray-500'}>{data.document.name}</p>
                                <button className={'bg-red-600 text-white p-2 rounded-lg aspect-square hover:bg-red-500'} onClick={() => setData("document", null)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                        </> : <>
                            <InputLabel htmlFor={"file"} value={"File"} />
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-slate-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-600 focus-within:ring-offset-2 hover:text-slate-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                onChange={e => setData("document", e.target.files[0])}
                                                className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PDF or ZIP up to 10MB</p>
                                </div>
                            </div>
                        </>}


                    </div>

                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}

                    <div className="mt-5 flex mx-auto">
                        <PrimaryButton>
                            Upload Document
                        </PrimaryButton>
                    </div>

                </form>

                </div>
            </Modal>


            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-6 text-gray-900">Documents</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <button onClick={() => setIsDocumentOpen(true)} className={'my-5 p-5 flex flex-row justify-center items-center w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'}>
                        <div className={'ml-4'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className={'ml-4'}>
                            <p className={'font-semibold'}>Upload a Document</p>
                        </div>
                    </button>
                    {documents && documents.length > 0 ?
                        <>
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                {documents.map((document: any) => (

                                    <li key={document.id} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            {/*<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">{document.title}</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href={`/jobs/${id}/documents/${document.id}`} target={'_blank'} className="font-medium text-slate-600 hover:text-slate-500">
                                                Download
                                            </a>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a onClick={() => deleteDocument(document.id)} className="font-medium text-red-600 hover:text-red-500">
                                                Remove
                                            </a>
                                        </div>
                                    </li>

                                ))}
                            </ul>
                        </> :
                        <></>}

                </dd>
            </div>

        </>
    )
}
