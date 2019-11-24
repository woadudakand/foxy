import React, { Fragment, Suspense, lazy } from 'react';
import LayoutMail from '../../conponets/mailbox/layout';
import MailboxCom from '../../conponets/mailbox';

const Layout = lazy(() => import('../../layout/navbar'));

const Mailbox = (props) => {

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


export default Mailbox;
