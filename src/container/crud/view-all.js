import React, { Fragment, lazy, Suspense } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { Section} from './style';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Table } from 'antd';
import { deleteCrud } from '../../redux/actions/crud'

const Layout = lazy(() => import('../../layout/navbar'));
const ViewAll = (props) => {

    const data = props.firestore;
    const deleteHandle = event => {
        const id = event.target.id;
        var result = window.confirm("Want to delete?");
        if (result) {            
            props.delete(id);
        }
    }
    const columns = [
        {
          title: 'SL',
          dataIndex: 'sl',
          key: 'sl',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
          }
      ];

      const dataSource = [
          data !== undefined && data.map((value, key) => { 
              const { id, name, phone } = value;
            return {
              key: key,
              sl: key+1,
              name: name,
              mobile: phone,
              action: (
                <Fragment>
                    <Button type="primary"><Icon type="eye" /></Button>                    
                    <Button type="primary"><Icon type="edit" /></Button>                    
                    <Button onClick={deleteHandle} id={id} type="danger"><Icon type="delete" /></Button>
                </Fragment>
              )
            }
          })
      ];
    const tableData = Array.from(dataSource[0]);
      
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...........</div>}>
        <Layout>          
          <Section>
            <Row gutter={15}>
              <Col md={24}>
                <CardFrame title="View">
                    {
                        data === undefined ? <div>Loading..........</div> : <Table dataSource={tableData} columns={columns} />
                    }
                </CardFrame>
              </Col>              
            </Row>
          </Section>          
        </Layout>
      </Suspense>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
      crud: state.crud,
      firebase: state.firebase,
      firestore: state.firestore.ordered.crud
  }
}
const mapDispatchToProps = dispatch => {
    return {
        delete: (data) => dispatch(deleteCrud(data))
    }
  }
export default compose(firestoreConnect([{collection: "crud"}]), connect(mapStateToProps, mapDispatchToProps))(ViewAll);
