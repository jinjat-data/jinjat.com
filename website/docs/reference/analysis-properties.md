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
      tags:
        - [cors](#cors)
      jinjat:
        method: get
        [openapi](/reference/openapi#dbt-analysis): <dictionary>
        [fetch](#fetch): <bool>
        [transform_response](#transform-response): 
          - jmespath
        [transform_request](#transform-response): 
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

## cors

Jinjat will enable CORS for the analyses that have `cors` tag. If you want to enable CORS project level, here is how you can do it:


<File name='dbt_project.yml'>

```yml
name: 'jaffle_shop'
version: '1.0.0'
config-version: 2

models:
  jaffle_shop:
      +tags: 
        - "cors"
```

</File>

## fetch

Jinjat tries to fetch the query result when `fetch` is enabled, which is the default value.

## transform_response

