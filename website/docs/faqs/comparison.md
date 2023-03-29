---
title: "Comparison"
---

Jinjat has a new concept that has inspiration from a number of low-code application frameworks, metric stores, and backend libraries. This document explains the differences in between Jinjat and different projects.

## [dbt Server](https://github.com/dbt-labs/dbt-server)
dbt-server is the dbt's serving layer that lets you execute and execute SQL queries with Jinja syntax. Jinjat has a similar API to execute queries in [Admin API](/admin-api/docs) but it's mainly intended to be used for pre-written SQL templates instead. That way, we can directly serve to the end-user that lets us build customer-facing data applications.

## Metric stores - Metriql / Metricflow / Cube.js
Jinjat is developed by the creator of Metriql, a metric store that uses dbt. Jinjat's focus is not focusing on BI specific applications, instead more for generic data applications.

## Streamlit
Streamlit is a great Python framework to build data applications. Jinjat helps you do something similar with dbt instead of Python. dbt is mostly about SQL but with dbt's Python support, you can call Python from SQL. Another approach is that Jinjat is headless while Streamlit has in-built user interface. Jinjat can compile to both Streamlit and React with Refine, [read how front-end works in Jinjat](/docs/integration).

Do want to learn the difference in between your tool and Jinjat? [Create an issue here](https://github.com/jinjat-data/jinjat.com/issues) so that we add the comparison!