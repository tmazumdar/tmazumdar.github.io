import { useState } from 'react'
import { Layout, Card, Button, Flex } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: 'gray',
    };
    const contentStyle = {
        textAlign: 'center',
        height: '80vh',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'darkgray',
    };
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'black',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'gray',
    };
    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: 'calc(100% - 8px)',
        maxWidth: 'calc(100% - 8px)',
    };
    const boxStyle = {
        width: '100%',
        height: 120,
        borderRadius: 6,
        border: '1px solid #40a9ff',
    };
    return (
        <Layout style={layoutStyle}>
            <Sider width="25%" style={siderStyle}>
                <div style={{ padding: "20px" }}>
                    Hi there!<br />
                    I'm Tahsin...
                </div>
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    Welcome to my website
                </Header>
                <Content style={contentStyle}>
                    <div className="card">
                        <Card> My Resume
                            <Flex>
                            </Flex>
                            <Flex gap="middle" align="start" vertical>
                                <Flex style={boxStyle} justify={"space-evenly"} align={"center"}>
                                    <a href="https://tmazumdar.github.io/resume">
                                        View
                                    </a>
                                    <a href="files/TM-5S2.pdf" download>
                                        Download
                                    </a>
                                </Flex>
                            </Flex>
                        </Card>
                    </div>
                </Content>
                <Footer style={footerStyle}>TM Copyright 2024</Footer>
            </Layout>
        </Layout>
    )
}

export default App
