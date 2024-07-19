import {
    Layout,
} from 'antd';
import {
    CopyrightOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

function FooterSection() {
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'gray',
        fontSize: '10px',
    };

    return (
        <>
            <Footer style={footerStyle}>
                Copyright <CopyrightOutlined /> 2024 Tahsin Mazumdar
                <br />
                t: +1 519 721 2323 | e: <a style={{ color: "white" }} href="mailto:tahsin.mazumdar@gmail.com">tahsin.mazumdar@gmail.com</a>
            </Footer>
            
        </>
        
    );
};

export default FooterSection;