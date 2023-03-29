---
title: Model properties
---

## Related documentation
- [Using models](https://docs.getdbt.com/docs/build/models)
- [dbt model properties](https://docs.getdbt.com/reference/model-properties)

Models properties can be declared in `.yml` files in your `models/` directory (as defined by the [`model-paths` config](model-paths)).
You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `models/` directory.

<File name='models/<filename>.yml'>

```yml
version: 2

models:
  - [name](model_name): <model name>
    columns:
      - name: <column_name> # required
        [description](description): <markdown_string>
        [meta](meta):


      - name: ... # declare properties of additional columns

```

</File>

<!---
FAQs
- Do I need to declare every column for it to render in documentation?
--->
