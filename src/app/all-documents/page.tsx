import DocumentList from '@/components/fileManagment/DocumentList'
import DocumentTable from '@/components/fileManagment/DocumentTable'
import React from 'react'
import "@/app/chat/chat.css";

function Page() {
  return (
    <div className='page-container'>
        <DocumentList />
        <DocumentTable isAllDocuments={true}/>
    </div>
  )
}

export default Page