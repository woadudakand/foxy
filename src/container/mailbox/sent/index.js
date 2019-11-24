import React, { Fragment, Suspense, lazy } from 'react';
import LayoutMail from '../../../conponets/mailbox/layout';

const Layout = lazy(() => import('../../../layout/navbar'));
const MailboxCom = lazy(() => import('../../../conponets/mailbox/sent'));


const Sent = (props) => {

    return (
        <Fragment>
           <Suspense fallback={<div>Loading...........</div>}>
               <Layout>
                    <LayoutMail>
                        <MailboxCom />
                    </LayoutMail>
               </Layout>
           </Suspense>
        </Fragment>
    );
}

export default Sent;
