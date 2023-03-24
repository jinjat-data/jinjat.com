---
title: "Refine"
---

:::info
You can enable the UI with `jinjat serve --refine` command. It's not enabled by default.
:::

Jinjat generates user interfaces from your [dbt exposures](https://docs.getdbt.com/docs/build/exposures) with [Refine](https://refine.dev/), which is a Headless React Framework to build web applications. We support the following exposure types at the moment:

### application

Jinjat generates CRUD application from your dbt resources. 


```yml
exposures:
  - name: customer_crud
    type: application
    owner:
      name: Burak
      email: burak@email.com
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

:::tip
 You can generate the scaffolding with `jinjat generate refine_app --args '{args}'`
:::

### analysis

Your OpenAPI definition request and response JSON Schema definitions are rendered with [JsonForms](https://jsonforms.io/) automatically. When the user submits the form, we render a table from the query result of your dbt analysis run. You can customize the user interface with custom components.

```yml
exposures:
  - name: example_endpoint
    type: analysis
    meta:
      jinjat:
        refine:
          button_label: Perform action
          menu_icon: AutoAwesome
```

:::tip
 You can generate the scaffolding with `jinjat generate refine_app --args '{args}'`
:::


### dashboard

:::info
Support for `dashboard` exposure is in progress.
:::


## Component support

Refine integration uses [JsonForms](https://jsonforms.io) with [Material UI](https://mui.com/material-ui/). All [native JSON Schema types](https://json-schema.org/understanding-json-schema/reference/type.html) are mapped to Material UI Components. For example, `string` type is mapped to [Text Field](https://mui.com/material-ui/react-text-field/) in MUI. In addition to the default components, Jinjat supports you plug in custom components as follows:

```yml
 columns:
    - name: rating
      description: Movie's IMDB rating
      meta:
        jinjat:
        schema:
        type: number
        x-jsonforms:
            renderer: rating
```

Jinjat supports following components:



## Developing

You can 