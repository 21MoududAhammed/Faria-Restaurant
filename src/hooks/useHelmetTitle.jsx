import {Helmet} from 'react-helmet-async'

const useHelmetTitle = (title) =>{
    return(
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}


export default useHelmetTitle;