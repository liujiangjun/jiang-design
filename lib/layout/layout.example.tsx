import React, {Fragment} from 'react';
import './layout.example.scss';
import {Header, Layout, Content, Footer, Aside} from "../index";


const LayoutExample: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{height: 400, width: 600}}>
                    <Header className="x">header</Header>
                    <Content className="y">content</Content>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{height: 400, width: 600}}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Aside className="z">aside</Aside>
                        <Content className="y">content</Content>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                    <Layout style={{height: 400, width: 600}}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Content className="y">content</Content>
                        <Aside className="z">aside</Aside>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                    <Layout style={{height: 400, width: 600}}>
                    <Aside className="z">aside</Aside>
                    <Layout>
                        <Header className="x">header</Header>
                        <Content className="y">content</Content>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </Fragment>
    )
}

export default LayoutExample
