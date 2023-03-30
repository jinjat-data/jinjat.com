---
title: Model properties
---

## Related documentation
- [Using models](https://docs.getdbt.com/docs/build/models)
- [dbt model properties](https://docs.getdbt.com/reference/model-properties)

Models properties can be declared in `.yml` files in your `models/` directory (as defined by the [`model-paths` config](https://docs.getdbt.com/reference/project-configs/model-paths)).

You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `models/` directory.

<File name='models/<filename>.yml'>

```yml
version: 2

models:
  - name: <model name>
    meta:
      jinjat:
        [schema](reference/openapi#dbt-models--seeds--sources):
          x-pk: customer_id
    columns:
      - name: <column_name> # required
        meta:
          jinjat:
            [schema](reference/openapi#dbt-models--seeds--sources):
      - name: ... # declare properties of additional columns
```

The [JSON Schema](https://json-schema.org/) defined for both columns and models will be part of the OpenAPI schema.

</File>