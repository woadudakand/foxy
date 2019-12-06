import React, { Fragment, Suspense, lazy, useState } from 'react';
import { Row, Col } from 'antd';
import CardFrame from '../../conponets/card/cardFrame';
import { connect } from 'react-redux';

const Layout = lazy(() => import('../../layout/navbar'));
const GalleryFrame = lazy(() => import('../../conponets/card/gallery'));

const Gallery = props => {
  const { gallery } = props;
  const [data, setData] = useState(gallery);

  const deleteHandele = e => {
    const id = e.target.getAttribute('id') === null ? e.target.closest('a').getAttribute('id') : e.target.getAttribute('id');
    const filter = data.filter(item => {
      return item.id !== parseInt(id);
    });
    setData(filter);
  };

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...........</div>}>
        <Layout>
          <Row gutter={15}>
            <Col md={24}>
              <CardFrame title="Gallery">
                <Row gutter={30}>
                  {data.map(item => {
                    return (
                      <Col md={6} key={item.id}>
                        <Suspense fallback={<div>Loading...........</div>}>
                          <GalleryFrame src={item.img} title={item.title} id={item.id} click={deleteHandele} />
                        </Suspense>
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
    gallery: state.gallery,
  };
};
export default connect(mapStateToProps)(Gallery);
