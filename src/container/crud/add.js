import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Row, Col } from 'antd';
import { Redirect } from 'react-router-dom'
import CardFrame from '../../conponets/card/cardFrame';
import { Section} from './style';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { addCrud } from '../../redux/actions/crud';
import {
    Form,
    Input,      
    Button    
  } from 'antd';

const Layout = lazy(() => import('../../layout/navbar'));

const Add = (props) => {
  const [loading, setLoading] = useState(false);
    const handleSubmit = e => {        
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {                
                props.add(values);
                setLoading(true);
              }
            });
            
          };
          const { getFieldDecorator } = props.form;
          
          if(loading === true){           
            return <Redirect to='/view' />           
          }                  
          
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...........</div>}>
        <Layout>          
          <Section>
            <Row gutter={15}>
              <Col span={12} offset={6}>
                <CardFrame title="Add New">
                    <Form onSubmit={handleSubmit}>
                        <Form.Item label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your Name' }],
                        })(<Input />)}
                        </Form.Item> 
                                            
                        <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input style={{ width: '100%' }} />)}
                        </Form.Item>
                    
                        <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        </Form.Item>
                    </Form>
                    {loading && <div>Loading..........</div>}
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
      crud: state.crud
  }
}
const mapDispatchToProps = dispatch => {
  return {
      add: (data) => dispatch(addCrud(data))
  }
}

export default compose(firestoreConnect([{collection: "crud"}]), connect(mapStateToProps, mapDispatchToProps))(Form.create({ name: 'Add New' })(Add));
