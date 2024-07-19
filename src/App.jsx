import {
    Button,
    Card,
    Flex,
    Layout,
    Space,
    Typography,
} from 'antd'
import {
    FileSearchOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import WorkTimeline from './WorkTimeline.jsx';
import './App.css'

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

function App() {
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
        height: '85vh',
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
        borderRadius: 4,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
    };
    const boxStyle = {
        width: '100%',
        height: 120,
        borderRadius: 6,
        border: '1px solid lightgray',
    };
    return (
        <Layout style={layoutStyle}>
            <Sider width="25%" style={siderStyle}>
                <div style={{ padding: "20px" }}>
                    <Text
                        strong
                        style={{
                            margin: 0,
                            color: "white",
                            fontSize: 32
                        }}
                    >
                        Hi there!<br />
                        I'm Tahsin...
                    </Text>
                </div>
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    Welcome to my website
                </Header>
                <Content style={contentStyle}>
                    <div className="card">
                        <Space direction="vertical">
                            <Card title="My Resume" size="small">
                                <Space>
                                    <Button href="https://tmazumdar.github.io/resume">
                                        <FileSearchOutlined />
                                        View
                                    </Button>
                                    <Button href="files/TM-5S2.pdf" download>
                                        <DownloadOutlined />
                                        Download
                                    </Button>
                                </Space>
                            </Card>
                            <Card>
                                <Flex gap="middle" align="start" vertical>
                                    <WorkTimeline></WorkTimeline>
                                </Flex>
                            </Card>
                        </Space>
                    </div>
                </Content>
                <Footer style={footerStyle}>TM Copyright 2024</Footer>
            </Layout>
        </Layout>
    )
};

export default App;
