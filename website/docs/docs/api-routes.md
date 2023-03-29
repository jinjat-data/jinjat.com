---
title: Routing
---

Jinjat generates API routes from your directory structure of analyses. For the following dbt project:

```bash
$ tree
├── analyses
│   └── example_endpoint.sql
└── dbt_project.yml
```

<File name='dbt_project.yml'>

```yml
name: jaffle_shop
version: 0.1
analysis-paths: ["analyses"]
```

</File>

Jinjat will generate the following API endpoints:

```markdown
/0.1/jaffle_shop/example_endpoint
```

The files and directories that have `_` prefix is treated as path parameters. Let's say that you have the following file structure:

```bash
$ tree
├── analyses
│   ├── crud
│   │   ├── _create_customers.sql
│   │   ├── _id
│   │   │   └── _get_customer.sql
│   │   ├── _list_customers.sql
│   │   └── schema.yml
└── dbt_project.yml
```

<File name='analyses/crud/schema.yml'>

```yml
version: 2

analyses:
  - name: _create_customers
    config:
      jinjat:
        method: post
  - name: _get_customer
    config:
      jinjat:
        method: get
  - name: _list_customers
    config:
      jinjat:
        method: get
```

</File>

The endpoints will be mapped as follows:

```
GET  /0.1/jaffle_shop/crud       -->   _list_customers.sql
GET  /0.1/jaffle_shop/crud/[:id] -->   _id/_get_customer.sql
POST /0.1/jaffle_shop/crud       -->   _create_customers.sql
```

:::tip
You can access your path parameters as follows:

```sql
select * from users where id = {{ request().params.id }}
```

:::

:::tip

In order to secure your API, you should write OpenAPI specification for your analyses. [Read more aobut how OpenAPI integration works](/reference/openapi).

:::

### Static files

If you have a directory called `./static` in your dbt project directory, Jinjat will serve all the files inside the directory.