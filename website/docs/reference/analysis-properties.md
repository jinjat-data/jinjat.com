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
        [openapi](/reference/openapi#dbt-analysis): <dictionary>
        [fetch](#fetch): <bool>
        [transform_response](#transform-response): <jmespath_expression>
    columns:
      - name: <column_name>
        meta:
          jinjat:
            schema:
      - name: ... # declare properties of additional columns

  - name: ... # declare properties of additional analyses

```

</File>

## fetch

Jinjat tries to fetch the query result when `fetch` is enabled, which is the default value. It's useful when you're executing DDL queries.

```yml
version: 2

analyses:
  - name: example_endpoint
    config:
      jinjat:
        fetch: false
```


## transform_response

You can transform the query result with this option. The default response for the analysis queries is an array with object with properties matching your column names. If you would like to return the first item in the array as a response, here is an example:

```yml
version: 2

analyses:
  - name: example_endpoint
    config:
      jinjat:
        transform_response: [0]
```

The expressions syntax is powered by [jmespath](https://jmespath.org). You can learn more about the jmespath expressions [here](https://jmespath.org/tutorial.html).