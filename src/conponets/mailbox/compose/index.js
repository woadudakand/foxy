import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col } from 'antd';
import { Wraper } from './styled';
import { Editor } from '@tinymce/tinymce-react';

const Compose = (props) => {  

    const handleEditorChange = (e) => {
        console.log(e.target.getContent());
      }

    return (
        <Fragment>
            <Row gutter={15}>
                <Col md={24}>
                    <Wraper>
                        <Input placeholder="To" />
                        <Input placeholder="CC" />
                        <Input placeholder="Subject" />
                        
                        <Editor
                            apiKey="API_KEY"
                            init={{ 
                                plugins: 'link table',
                                height: 400
                            }}
                            onChange={handleEditorChange}
                        />
                        <button className="btn">Send</button>
                    </Wraper>
                </Col>
            </Row>
        </Fragment>
    );
}
const mapStateToProps = state => {
    return {
        mail : state.mail
    }
}
export default connect(mapStateToProps)(Compose);
