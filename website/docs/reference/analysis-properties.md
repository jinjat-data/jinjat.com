---
title: Analysis properties
---

## Related documentation
- [Using analyses](https://docs.getdbt.com/docs/build/analyses)
- [dbt analysis properties](https://docs.getdbt.com/reference/analysis-properties)

We recommend you define analysis properties in your `analyses/` directory, which is illustrated in the [`analysis-paths`](analysis-paths) configuration.

You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `analyses/` or `models/` directory.

Jinjat uses dbt analysis properties and this docs includes  

<File name='analyses/<filename>.yml'>

```yml
version: 2

analyses:
  - name: <analysis_name> # required
    config:
      jinjat:
        method: get
        body: <default_request_body>
        headers: <defailt_headers>
        [openapi](/reference/openapi#dbt-analysis): <dictionary>
        [fetch](#fetch): <bool>
        [transform_response](#transform-response): 
          - jmespath
        transform_request: 
          - jmespath
    columns:
      - name: <column_name>
        meta:
          jinjat:
            schema:
      - name: ... # declare properties of additional columns

  - name: ... # declare properties of additional analyses

```

</File>