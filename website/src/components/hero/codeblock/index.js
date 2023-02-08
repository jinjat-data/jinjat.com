import styles from "./styles.module.css";
import Highlight, {defaultProps} from "prism-react-renderer";
import React from "react";
import {usePrismTheme} from "@docusaurus/theme-common";

function CodeBlock({fileName, language, code}) {
    const prismTheme = usePrismTheme();

    return (
        <div className={`${styles.CodeBlock} code-block`}>
            <div className={styles.CodeBlockInline}>
                <div className={styles.CodeBlockHeader}>
                    <div className={styles.CodeBlockCloser}></div>
                    <div className={styles.CodeBlockCloser}></div>
                    <div className={styles.CodeBlockCloser}></div>
                </div>
                <div className={styles.CodeBlockAli}>
                    <input type="text" spellCheck="false" disabled tabIndex="-1" value={fileName}
                           className={styles.CodeBlockFilename}/></div>
            </div>
            <Highlight {...defaultProps} theme={prismTheme} code={code} language={language}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={{...style, background: 'transparent'}}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})} />
                                ))}
                            </div>
                        ))}
                      </pre>
                )}
            </Highlight>
        </div>
    )
}

export default CodeBlock;
