import {
    Avatar,
    Layout,
    Typography,
} from 'antd';

const { Sider } = Layout;
const { Text } = Typography;

function LeftSider() {
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'black',
    };

    return (
        <Sider width="25%" style={siderStyle}>
            <Text
                strong
                style={{
                    margin: 0,
                    color: "white",
                    fontSize: 48
                }}
            >
                Hi there!
            </Text>
            <br />
            <Text
                strong
                style={{
                    margin: 0,
                    color: "white",
                    fontSize: 48
                }}
            >
                I'm Tahsin
            </Text>
            <br />
            <Avatar src="./src/assets/tm-avatar.png" shape="square" size={64} />
            <br />
            <Text
                strong
                style={{
                    margin: 0,
                    color: "white",
                    fontSize: 24
                }}
            >
                I am a
            </Text>
            <br />
            <Text
                strong
                style={{
                    margin: 0,
                    color: "white",
                    fontSize: 24
                }}
            >
                Software Engineer
            </Text>
        </Sider>
    );
};

export default LeftSider;