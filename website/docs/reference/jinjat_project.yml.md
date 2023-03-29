---
title: jinjat_project.yml
---

:::info jinjat_project.yml
Jinjat uses dbt under the hood which requires `dbt_project.yml` file. This file is also used by Jinjat for the project version and name. `jinjat_project.yml` is different than this file and it's optional. 
:::

`jinjat_project.yml` includes metadata about your dbt project that is relevant to Jinjat. While it's optional, it's recommended. Here are the list of configurations available:

<File name='jinjat_project.yml'>

```yml
[query](#query):
  max_limit: <50000>
  default_limit: <1000>

refine:
  [importmaps](#import-maps):
    - https://www.unpkg.com/@mui/material@5.11.15
  [jsonforms](#jsonforms):
    renderers:
      rating: "@mui/material/Rating"

[openapi](openapi#project-configs):
    info:
        description: "My custom project"
```

</File>

### Query

By default, Jinjat passes your queries to `limit_query` macro before executing them in your database.

### Import Maps

### JsonForms
