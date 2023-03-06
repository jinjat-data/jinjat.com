---
title: "What is Jinjat?"
id: "introduction"
---

## About Jinjat

Jinjat turns your dbt projects into REST APIs using dbt's [analysis](/) feature. It creates an endpoint from each analysis that has `jinjat` config. Jinjat also creates OpenAPI specification for your API automatically, which you can customize using dbt's resource properties for analysis. In addition to the API, it has optional components to create user interfaces that uses your REST API. The idea is to create data applications with just SQL and OpenAPI spec without any requirement to learn any backend.

## Why 

The short answer is to empower analytics engineers to create customer facing applications with less friction. Most APIs talk to a database already and the business logic is often defined in SQL. Now that the cloud data-warehouses became single source of truth, it's possible to create applications directly on top of your data-warehouse. This concept is often called "data application". While analytics engineers know SQL extensively, developing backend and front-end applications is not easy for them. Jinjat aims to automate backend with dbt and OpenAPI, the most widely used tools for data transformation and defining REST APIs respectively. You can create front-end applications either using Refine or Streamlit once you create the API.

## Related docs

* Installation

