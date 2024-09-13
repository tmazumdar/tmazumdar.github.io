import React from 'react';
import { Button, Card, Drawer, Grid, Timeline, theme } from 'antd';
import {
    ClockCircleOutlined,
    LaptopOutlined,
    RocketTwoTone,
    ToolOutlined,
} from '@ant-design/icons';
import getExperience from '../data/experience.js';

const { useState } = React;
const { useBreakpoint } = Grid;

function WorkTimeline({ siderCollapsed }) {
    const screens = useBreakpoint();
    const [open, setOpen] = useState(false);
    const [drawer, setDrawer] = useState({});
    const { token } = theme.useToken();

    const containerStyle = {
        position: 'relative',
        /*height: 200,*/
        paddingTop: 20,
        paddingLeft: 10,
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
            <Button type="dashed" size="small" onClick={() => showDrawer(data[id].drawer)}>
                {data[id].description}
            </Button>
        );
    };

    const getItems = (id) => {
        const items = {
            "FREE": {
                children: getItemButton(id),
                label: screens.lg ? 'January 2024' : null,
                color: 'green',
                dot: <LaptopOutlined />,
            },
            "YELP": {
                children: getItemButton(id),
                label: screens.lg ? 'August 2021' : null,
                color: 'red',
                dot: <LaptopOutlined />,
            },
            "MAK": {
                children: getItemButton(id),
                label: screens.lg ? 'June 2016' : null,
                color: 'blue',
                dot: <LaptopOutlined />,
            },
            "CDK": {
                children: getItemButton(id),
                label: screens.lg ? 'June 2012' : null,
                color: 'black',
                dot: <LaptopOutlined />,
            },
            "UW": {
                children: getItemButton(id),
                label: screens.lg ? 'April 2012' : null,
                dot: <ToolOutlined />,
            },
            "EE": {
                children: getItemButton(id),
                label: screens.lg ? 'September 2007' : null,
                dot: <ClockCircleOutlined />,
            },
            "CA": {
                children: getItemButton(id),
                label: screens.lg ? 'August 2007' : null,
                dot: <RocketTwoTone />,
            },
            "BD": {
                children: getItemButton(id),
                label: screens.lg ? '2005-07' : null,
                color: 'green'
            }
        };
        return items[id];
    };

    //const items = ["FREE", "YELP", "MAK", "CDK", "UW", "EE", "CA", "BD"].map(getItems);
    const items = ["YELP", "MAK", "CDK", "UW", "EE", "BD"].map(getItems);
    var reversedItems = items.reverse();

    const getDrawerWebTitle = (drawer) => {
        var weblink = () => {
            if (drawer.web)
                return (
                    <>
                        <br /><a href={drawer.web}>{drawer.web}</a>
                    </>
                );
        }
        return (
            <>
                {drawer.title}
                {weblink()}
            </>
        )
    };

    const getTimelineContent = () => {
        return (
            <div style={containerStyle}>
                <Timeline
                    pending="Looking for a new role.."
                    reverse={true}
                    mode={screens.lg ? "right" : "left"}
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
        );
    };

    const getScreenWidth = () => {
        if (screens.lg) {
            return "70vw";
        } else if (!screens.lg && siderCollapsed) {
            return "90vw";
        } else if (!screens.lg && !siderCollapsed) {
            return "65vw";
        }
    };

    return (
        <Card style={{ width: getScreenWidth() }} title="My Experience">
            {getTimelineContent()}
        </Card>
    );
};

export default WorkTimeline;