import React, {useEffect} from 'react'


import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './styles.module.css'
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const customThemeColors = {
    'darkmode-background': '#121E24',
    'xp-primary-500': '#FFCC00',
    'xp-tertiaries': {
        'primary-ciel': '#63C2C7',
        'secondary-blue': '#006D8C',
    },
}

const Rapidoc = () => {
    const {isDarkTheme} = useColorMode();
    const {siteConfig} = useDocusaurusContext()

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            require('rapidoc')
        }
    }, [])


    return (
        <rapi-doc
            spec-url="https://jaffle-shop.jinj.at/admin/openapi.json"
            theme={isDarkTheme ? 'dark' : 'light'}
            bg-color={
                isDarkTheme ? customThemeColors['darkmode-background'] : '#fff'
            }
            nav-bg-color={isDarkTheme ? '#081014' : '#f7f7f7'}
            nav-text-color={isDarkTheme ? '#ffffff' : '#000000'}
            nav-accent-color={
                isDarkTheme
                    ? customThemeColors['xp-tertiaries']['primary-ciel']
                    : customThemeColors['xp-tertiaries']['secondary-blue']
            }
            nav-item-spacing="relaxed"
            primary-color="#DCBB0E" render-style="focused"
            show-method-in-nav-bar="as-colored-block"
            show-header="true"
            show-components="true"
            show-curl-before-try="true"
            style={{
                height: 'calc(100vh - 60px)',
                width: '100%',
                maxWidth: '100%',
            }}>

            <div slot="overview">
               <b>The URL above is a demo application. You can enter your Jinjat URL to see the relevant API doc for your version.<br/><br/></b> 
            </div>

        </rapi-doc>
    )
}

const RapidocWrapper = () => {
    return <Layout permalink="/">
        <Rapidoc/>
    </Layout>
}


export default RapidocWrapper