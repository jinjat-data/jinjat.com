---
title: Analysis properties
---

We recommend you define analysis properties in your `analyses/` directory, which is illustrated in the [`analysis-paths`](analysis-paths) configuration.

You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `analyses/` or `models/` directory.

Jinjat uses dbt analysis properties and this docs includes  

<File name='analyses/<filename>.yml'>

```yml
version: 2

analyses:
  - name: <analysis_name> # required
    [description](description): <markdown_string>
    config:
      [jinjat](resource-configs/tags):
        method: get
        openapi: 
        body: 
        headers: 
        fetch: 
        transform_response: 
          - jmespath
        transform_request: 
          - jmespath
        response_model: 
        request_model: 
    columns:
      - name: <column_name>
        [description](description): <markdown_string>
      - name: ... # declare properties of additional columns

  - name: ... # declare properties of additional analyses

```

</File>