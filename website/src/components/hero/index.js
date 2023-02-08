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
        file: '~/dbtproject/analysis/example_endpoint.sql',
        lang: 'sql',
        code: `{%- set payload = request().body %}

select count(*) from users 
where {{query.number}}`,
    },
    {
        name: '⒊ Define OpenAPI',
        file: '~/dbtproject/analysis/schema.yml',
        lang: 'yml',
        code: `version: 2
analyses:
  - name: example_endpoint
    description: Example endpoint to demonstrate Jinjat
    config:
      jinjat:
        openapi:
          get:
            requestBody:
              content:
                application/json:
                  schema:
                    type: object
                    properties:
                      number:
                        type: number
                        default: 1`
    }
]


const jinjatSteps = [
    {
        name: '⒋ Install Jinjat',
        lang: 'bash',
        file: '~zsh',
        code: `pip install jinjat`
    },
    {
        name: '⒌ Serve REST API',
        file: '~zsh',
        code: `% jinjat serve 
INFO     Registering \`example_endpoint\` route
INFO:    Uvicorn running on http://127.0.0.1:8581`
    },
    {
        name: `⒍ Expose UI <i>(optional)</i>`,
        file: '~zsh',
        lang: 'markdown',
        code: `% npm create refine-app@latest my-project
 ? Select your project type: 
 ❯ refine-jinjat

 ? Auth Provider:
 ❯ None
% npm run dev`
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

