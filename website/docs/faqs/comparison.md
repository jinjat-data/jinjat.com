---
title: "Comparison"
---

Jinjat has a new concept that has inspiration from a number of low-code application frameworks, metric stores, and backend libraries. This document explains the differences in between Jinjat and different projects.

## [dbt Server](https://github.com/dbt-labs/dbt-server)
dbt-server is the dbt's serving layer that lets you execute and execute SQL queries with Jinja syntax. Jinjat has a similar API to execute queries in admin API but it's mainly intended to be used for pre-written SQL templates instead. That way, we can directly serve to the end-user 

## Metric stores - Metriql / Metricflow / Cube.js
Jinjat is developed by the creator of Metriql, a metric store that uses dbt. Jinjat's focus is not focusing on BI specific applications, instead more for generic data applications.

## Streamlit
Streamlit is a great Python framework to build data applications. Jinjat helps you for SQL

## Snowflake Application Framework
Jinjat is cloud-native, thanks to dbt. If you're using Snowpark to deploy Python function in Snowflake or use Javascript UDF in SQL, you can reference them in your SQL to do things that you can't do with SQL.
