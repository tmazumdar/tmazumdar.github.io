import React from 'react';
import { Button, Card, Drawer, Flex, Timeline, theme } from 'antd';
import {
    ClockCircleOutlined,
    LaptopOutlined,
    RocketTwoTone,
    ToolOutlined,
} from '@ant-design/icons';
import getExperience from '../data/experience.js'
const { useState } = React;



function WorkTimeline() {
    const [open, setOpen] = useState(false);
    const [drawer, setDrawer] = useState({});
    const { token } = theme.useToken();

    const containerStyle = {
        position: 'relative',
        /*height: 200,*/
        paddingTop: 20,
        overflow: 'hidden',
        borderRadius: token.borderRadiusLG,
    };

    const showDrawer = (data) => {
        setDrawer(data);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const getItemButton = (id) => {
        const data = getExperience();
        return (
            <Button type="link" size="small" onClick={() => showDrawer(data[id].drawer)}>
                {data[id].description}
            </Button>
        );
    };

    const getItems = (id) => {
        const items = {
            "FREE": {
                children: getItemButton(id),
                label: 'January 2024',
                color: 'green',
                dot: <LaptopOutlined />,
            },
            "YELP": {
                children: getItemButton(id),
                label: 'August 2021',
                color: 'red',
                dot: <LaptopOutlined />,
            },
            "MAK": {
                children: getItemButton(id),
                label: 'June 2016',
                color: 'blue',
                dot: <LaptopOutlined />,
            },
            "CDK": {
                children: getItemButton(id),
                label: 'June 2012',
                color: 'black',
                dot: <LaptopOutlined />,
            },
            "UW": {
                children: getItemButton(id),
                label: 'April 2012',
                dot: <ToolOutlined />,
            },
            "EE": {
                children: getItemButton(id),
                label: 'September 2007',
                dot: <ClockCircleOutlined />,
            },
            "CA": {
                children: getItemButton(id),
                label: 'August 2007',
                dot: <RocketTwoTone />,
            },
            "BD": {
                children: getItemButton(id),
                label: '2005-07',
                color: 'green'
            }
        };
        return items[id];
    };

    const items = ["FREE", "YELP", "MAK", "CDK", "UW", "EE", "CA", "BD"].map(getItems);
    var reversedItems = items.reverse();

    const getDrawerWebTitle = (drawer) => {
        var weblink = () => {
            if (drawer.web)
                return (
                    <>
                        <br /><a href={drawer.web}>{drawer.web}</a>
                    </>);
        }
        return (
            <>
                {drawer.title}
                {weblink()}
            </>
        )
    };

    return (
        <Card style={{ width: "70vw" }} size="small" title="My Experience">
            <div style={containerStyle}>
                <Timeline
                    pending="Looking for a new role.."
                    reverse={true}
                    mode="right"
                    items={reversedItems} />
                <Drawer
                    width="50%"
                    title={getDrawerWebTitle(drawer)}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    getContainer={false}
                >
                    <p><i>{drawer.time}</i></p>
                    <p>{drawer.description}</p>
                </Drawer>
            </div>
        </Card>
    );
};

export default WorkTimeline;