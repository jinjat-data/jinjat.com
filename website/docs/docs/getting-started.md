---
title: Getting started
---

Jinjat creates REST API from your dbt project. The API endpoint has your dbt package version and name as prefix. Let's say that you have the following project:

<File name='dbt_project.yml'>

```yml
name: jaffle_shop
version: "0.1"
analysis-paths: ["analyses"]
```

</File>

And a [dbt analysis](https://docs.getdbt.com/docs/build/analyses) called `order_stats` as follows:

<File name='analyses/order_stats.sql' language="sql">

```sql
{%- set query_params = jinjat.request().query %}

select  order_date, 
        count(*) as orders, 
        count(distinct customer_id) as users
from {{ ref('orders') }} 
group by order_date
where status = '{{query_params.status}}'
```

</File>

The endpoint to execute the analysis becomes:

```shell
curl http://127.0.0.1:8581/0.1/jaffle_shop/order_stats?status=ordered
```

:::info
The `request()` macro comes from jinjat dbt package, you need to [install the package](/docs/installation#1-add-jinjat-as-a-dependency) before using the macro.
:::


Jinjat scans all the analysis resources in your dbt project and creates an API endpoint by mapping them to your analyses if they have `jinjat` config. If you have dependencies that has such analyses, they will also become available under the same API with their package prefix:

```shell
curl http://127.0.0.1:8581/[dependency_version]/[dependency_name]/[analysis_under_the_dependency]
```

Additionally, you can refine the OpenAPI specification for your analyses with resource configs:


<File name='analyses/order_stats.sql' language="sql">

```yml
version: 2
analyses:
  - name: order_stats
    description: Example endpoint to demonstrate Jinjat
    config:
      jinjat:
        method: get
        openapi:
          parameters:
            - in: query
              name: status
              schema:
                type: string
                enum: ['placed', 'shipped', 'completed']
```

</File>

You can learn more about the resource configs for dbt analyses [here](/reference/analysis-properties). Jinjat will generate API documentation and make sure that the API requests conform your OpenAPI definition.

dbt 

When you `dbt run`, `request` macro returns default parameters defined in your yml file so your compiles analysis files will have your test data enabled.

[Read more about the macros on documentation](/).
