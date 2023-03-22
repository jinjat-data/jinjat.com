import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import CodeBlock from './codeblock/index';
import {useColorMode} from '@docusaurus/theme-common';


const dbtProjectSteps = [
    {
        name: '⒈ Add dependency',
        lang: 'yml',
        file: '~/dbtproject/packages.yml',
        code: `packages:
  - package: jinjat/jinjat
    version: 0.1.0`,
    },
    {
        name: '⒉ Write parametrized SQL',
        file: '~/dbtproject/analysis/order_stats.sql',
        lang: 'sql',
        code: `{%- set query_params = request().query %}

select  order_date, 
        count(*) as orders, 
        count(distinct customer_id) as users
from {{ ref('orders') }} 
group by order_date
where status = '{{query_params.status}}'`,
    },
    {
        name: '⒊ Define OpenAPI',
        file: '~/dbtproject/analysis/schema.yml',
        lang: 'yml',
        code: `version: 2
analyses:
  - name: order_stats
    description: Example endpoint to demonstrate Jinjat
    config:
      jinjat:
        method: get
        openapi:
          parameters:
            - in: query
              name: status
              schema:
                type: string
                enum: ['placed', 'shipped', 'completed']`
    }
]


const jinjatSteps = [
    {
        name: '⒋ Install Jinjat',
        lang: 'shell',
        file: '~zsh',
        code: `pip install jinjat`
    },
    {
        name: '⒌ Serve REST API',
        lang: 'shell',
        file: '~zsh',
        code: `% jinjat serve 
INFO     Registering \`order_stats\` route
INFO:    Uvicorn running on http://127.0.0.1:8581

% curl http://127.0.0.1:8581/0.1/jaffle_shop/order_stats?status=shipped
[
    {"order_date": "2018-01-07", "orders": 102, "users": 80}
]`
    },
    {
        name: `⒍ Generate UI`,
        file: '~zsh',
        lang: 'shell',
        code: `% jinjat serve --refine
INFO     Registering \`order_stats\` route
INFO:    Uvicorn running on http://127.0.0.1:8581

% open http://127.0.0.1:8581
`
    }
]


function Hero({heading, subheading, showGraphic = false}) {
    const {isDarkTheme} = useColorMode();
    const [currentDbtProjectStep, setCurrentDbtProjectStep] = useState(dbtProjectSteps[1]);
    const [currentJinjatStep, setCurrentJinjatStep] = useState(jinjatSteps[1]);

    return (
        <header className={` ${styles.Hero} container-fluid`}>
            <div className={`container`}>
                <div className="row justify-content-center">
                    <div className="col col--7">
                        <h1>{heading}</h1>
                        <p>{subheading}</p>
                    </div>

                    <div className="grid--2-col" style={{"marginTop": "50px"}}>
                        <div className="grid">
                            <div>
                                {dbtProjectSteps.map((item, i) =>
                                    <div key={i}
                                         className={`button button--homepage-steps ${currentDbtProjectStep == item ? "active" : ""}`}
                                         onClick={() => setCurrentDbtProjectStep(item)}
                                         dangerouslySetInnerHTML={{__html: item.name}}/>
                                )}
                            </div>
                            <CodeBlock fileName={currentDbtProjectStep.file} code={currentDbtProjectStep.code}
                                       language={currentDbtProjectStep.lang}/>
                        </div>
                        <div className="grid">
                            <div>
                                {jinjatSteps.map((item, i) =>
                                    <div key={i}
                                         className={`button button--homepage-steps ${currentJinjatStep == item ? "active" : ""}`}
                                         onClick={() => setCurrentJinjatStep(item)}
                                         dangerouslySetInnerHTML={{__html: item.name}}/>
                                )}
                            </div>
                            <CodeBlock fileName={currentJinjatStep.file} code={currentJinjatStep.code}
                                       language={currentJinjatStep.lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;

