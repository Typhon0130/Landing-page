import React from 'react'
import Layout from '../../components/layout'

export default function MainPage() {
    const { Row } = Layout;
  return (
    <Layout gridColumnStart='2' gridColumnEnd='7' style = {{border: '1px solid red'}}>
        <Row backgroundImg>

        </Row>
        <Row>

        </Row>
    </Layout>
  )
}
