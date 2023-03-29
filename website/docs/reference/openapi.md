---
title: OpenAPI Integration
---

Jinjat tries to create OpenAPI specification for your dbt resources automatically. For all your dbt resources including `model`, `seed`, `source`, Jinjat automatically generates:

```
 `resource_type`.`[project_name](https://docs.getdbt.com/reference/project-configs/name)`.`name`.
```

Here is an example:

```yml
models.jaffle_project.customers
```

You can dynamically reference your resources in yml files as follows:

 ```yml
 property:
    $ref: "#/components/schemas/{{'model.' ~ project_name ~ '.customers'}}"
 ```

It's recommended to define the OpenAPI specification explicitly to secure your app in production. Here is how you can define the spec:

## dbt analysis

dbt analysis is mapped as OpenAPI Operation, you can learn about the properties that you can use [here](https://swagger.io/docs/specification/paths-and-operations/#:~:text=users/12.-,Operations,-For%20each%20path).


<File name='analyses/schema.yml'>

```yml
version: 2
analyses:
  - name: order_stats
    description: Example endpoint to demonstrate Jinjat
    config:
      jinjat:
        method: get
        [openapi](#/):
          parameters:
            - in: query
              name: status
              schema:
                type: string
                enum: ['placed', 'shipped', 'completed']
```

</File>

## dbt models & seeds & sources

You can define JSON Schema of your dbt resource columns. Here is how it works for models, seeds and sources also work the same way.

<File name='models/schema.yml'>

```yml
models:
  - name: customers
    description: This table has basic information about a customer, as well as some derived facts based on a customer's orders
    meta:
      jinjat:
        [schema](#/):
          x-pk: customer_id
    columns:
      - name: customer_id
        description: This is a unique identifier for a customer
        tests:
          - unique
          - not_null
        meta:
          jinjat:
            [schema](#/):
              type: integer
```

</File>

## Project configs

You can extend your OpenAPI schema using the `openapi` field in `jinjat_project.yml` file. Out of the [full list of properties here](https://swagger.io/specification/#schema), we only support `info`, `components`, `security`, `tags`, `externalDocs` as the rest is automatically generated.

<File name='jinjat_project.yml'>

```yml
version: 1
[openapi](#/):
  info:
    description: jinjat example project description
    contact:
      name: buremba
      email: owner@email.com
    license:
      name: Apache 2.0
      url: https://www.apache.org/licenses/LICENSE-2.0.html
  components:
    my_custom_schema:
        type: string
```

</File>
