import React, { Fragment, lazy, Suspense} from 'react';

const Layout = lazy(() => import('../../layout/navbar'));
const index = () => {
    return (
       <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
                <Layout>
                    <h3>Somthing is Ready ............</h3>
                </Layout>
           </Suspense>
       </Fragment>
    );
}

export default index;
