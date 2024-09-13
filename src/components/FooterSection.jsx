import {
    Flex,
    Layout,
    Space,
} from 'antd';
import {
    CopyrightOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

function FooterSection() {
    const footerStyle = {
        padding: '20px',
        color: '#fff',
        backgroundColor: 'gray',
        fontSize: '10px',
        zIndex: 99
    };

    return (
        <>
            <Footer style={footerStyle}>
                <Flex justify="space-between">
                    <Flex vertical>
                        <Flex>Copyright&nbsp;<CopyrightOutlined />&nbsp;2024 Tahsin Mazumdar</Flex>
                        <Flex>e:&nbsp;<a style={{ color: "white" }} href="mailto:tahsin.mazumdar@gmail.com"> tahsin.mazumdar@gmail.com</a></Flex>
                    </Flex>
                    <Flex justify="space-evenly" vertical>
                        <Space size="middle">
                            <a href="https://github.com/tmazumdar" >
                                <GithubOutlined style={{ fontSize: "20px", color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/tahsinmazumdar/" >
                                <LinkedinOutlined style={{ fontSize: "20px", color: "white" }} />
                            </a>
                        </Space>
                    </Flex>
                </Flex>



            </Footer>

        </>

    );
};

export default FooterSection;