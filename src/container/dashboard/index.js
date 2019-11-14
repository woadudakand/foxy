import React, { Fragment, lazy, Suspense} from 'react';
import Notification from '../../conponets/notification';

const Layout = lazy(() => import('../../layout/navbar'));
const index = () => {
    return (
       <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
                <Layout>
                    <Notification />
                </Layout>
           </Suspense>
       </Fragment>
    );
}

export default index;
