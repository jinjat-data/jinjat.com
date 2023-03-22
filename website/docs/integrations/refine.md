---
title: "Refine"
---

Jinjat generates user interfaces from your [dbt exposures](https://docs.getdbt.com/docs/build/exposures) with [Refine](https://refine.dev/), which is a Headless React Framework to build web applications. We support the following exposure types at the moment:

### application

Jinjat generates CRUD application from your dbt resources. 

If you pass a source, (i.e. `source()`)

### analysis

Your OpenAPI definition request and response JSON Schema definitions are rendered with [JsonForms](https://jsonforms.io/) automatically. When the user submits the form, we render a table from the query result of your dbt analysis run. You can customize the user interface with custom components.

### dashboard

:::info
This feature is in-progress and not available yet.
:::


## Example

```yml

```


## Custom Components