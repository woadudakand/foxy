import React, { Fragment, Suspense, lazy } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import BlogFrame from '../../conponets/card/blog';
import { connect } from 'react-redux';

const Layout = lazy(() => import('../../layout/navbar'));

const Blog = props => {
  const { blogs } = props;
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...........</div>}>
        <Layout>
          <Row gutter={15}>
            <Col md={24}>
              <CardFrame title="Blog">
                <Row gutter={30}>
                  {blogs.map(blog => {
                    return (
                      <Col md={8} key={blog.id}>
                        <BlogFrame src={blog.img} title={blog.title} content={blog.content} />
                      </Col>
                    );
                  })}
                </Row>
              </CardFrame>
            </Col>
          </Row>
        </Layout>
      </Suspense>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  };
};
export default connect(mapStateToProps)(Blog);
