import React, { useEffect, useState } from 'react'
import {delay} from '../utils/utils'
import { load_documents } from '../store/actions/document'
import { connect } from 'react-redux'

const Main = ({load_documents, documents}) => {
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        load_documents()
        await delay(750)
        setLoading(false)
    }
    useEffect(() => { if(loading) fetchData() },[])

    console.log(documents, "DOCS")
    if(!loading){
        return (
            <div>Main</div>
        )
    }else{ return(<div>Loading....</div> ) }
}

const mapStateToProps = state => ({
    documents: state.document.documents
})

export default connect(mapStateToProps, {load_documents})(Main)