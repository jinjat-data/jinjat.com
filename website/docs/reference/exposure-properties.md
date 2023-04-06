---
title: Exposure properties
---

## Related documentation
- [Using exposures](https://docs.getdbt.com/docs/build/exposures)
- [dbt exposure properties](https://docs.getdbt.com/reference/exposure-properties)

## Overview

Exposures are defined in `.yml` files nested under an `exposures:` key. You may define `exposures` in YAML files that also define define `sources` or `models`.
You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `models/` directory.

:::info
Jinjat only renders the exposures that has `jinjat` property defined under [`meta`](https://docs.getdbt.com/reference/resource-configs/meta) dbt property.
:::

<File name='models/<filename>.yml'>

```yml
version: 2

exposures:
  - name: <string_with_underscores>
    type: application
    owner:
      name: <string>
      email: <string>
    meta:
      jinjat:
        [refine](#refine):
          menu_icon: <icon>
          actions: 
            <dictionary>
          resources:
            create: <analysis-name>
            list: <analysis-name>
            show: <analysis-name>
            edit: <analysis-name>
  - name: <string_with_underscores>
    type: analysis
    owner:
      name: <string>
      email: <string>
    meta:
      jinjat:
        [refine](#refine):
          button_label: <string>
          menu_icon: <icon-name>
  - name: ... # declare properties of additional exposures
```
</File>

## Refine

Jinjat generates a [Refine](/integrations/refine) page for your exposure. The config lets you customize the generated pages.

## Exposure types

### application

Generates a Refine CRUD page that lets you list, create, update, and optionally delete the data. The values for `actions` and `resources` are analysis names. You can generate the exposure using 

:::tip
 You can generate the scaffolding with `jinjat generate refine_app --args "{to: ref('customers'), name: customers}"`. [Learn more about how it works](https://github.com/jinjat-data/dbt_jinjat#refine_app-source) in Github.
:::

```yaml
exposures:
  - name: weekly_jaffle_metrics
    type: application            
    owner:
      name: Burak
      email: data@jaffleshop.com
    meta:
      jinjat:
        refine:
          menu_icon: AutoAwesome
          actions:
            delete: _delete_customers
          resources:
            create: _create_customers
            list: _list_customers
            show: _get_customer
            edit: _patch_customers
```

### analysis

Generates a form that calls the analysis when the form is submitted. `menu_icon` uses MUI icons, you can find list of available options [here](https://mui.com/material-ui/material-icons/).

```yml
exposures:
  - name: example_endpoint
    type: analysis
    owner:
      name: Burak
      email: data@jaffleshop.com
    meta:
      jinjat:
        refine:
          button_label: Perform action
          menu_icon: AutoAwesome
```

### dashboard

:::info
Dashboard type is not supported yet but the support is in progress.
:::