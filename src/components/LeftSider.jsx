import {
    Avatar,
    Grid,
    Layout,
    Typography,
} from 'antd';

const { useBreakpoint } = Grid;
const { Sider } = Layout;
const { Text } = Typography;

function LeftSider({ setCollapsed }) {
    const screens = useBreakpoint();
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'black',
    };

    const siderCallback = (collapsed, type) => {
        console.log(collapsed, type);
        setCollapsed(collapsed);
    };

    const getSiderContent = (fontSize) => {
        return (
            <>
                <Text
                    strong
                    style={{
                        margin: 0,
                        color: "white",
                        fontSize: fontSize * 2
                    }}
                >
                    Hi! <br />
                    I'm Tahsin
                </Text>
                <br />
                <Avatar src="https://i.postimg.cc/63ypXWKp/tm-avatar.png" shape="square" size={64} />
                <br />
                <Text
                    strong
                    style={{
                        margin: 0,
                        color: "white",
                        fontSize: fontSize
                    }}
                >
                    I am a <br />
                    Software Engineer
                </Text>
            </>
        )
    };

    return (
        <Sider
            onCollapse={siderCallback}
            width="25vw"
            breakpoint="lg"
            collapsedWidth="0"
            style={siderStyle}>
            {screens.lg ? getSiderContent(24) : getSiderContent(12)}
        </Sider>
    );
};

export default LeftSider;