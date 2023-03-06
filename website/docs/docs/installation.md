---
title: "Installation"
id: "installation"
---

Jinjat works with your existing dbt projects. Once you have a working dbt project, here are the steps:

### 1. Add Jinjat as a dependency

Create a `package.yml` file in the main directory of your dbt project and add the following lines:

```yml
packages:
  - package: jinjat/jinjat
    version: 0.1.0
```

Jinjat package doesn't have any side effect in your dbt project. It comes with a set of macros that lets you customize the API endpoints so it's optional if you just create endpoints that just execute static SQL queries. The most important macro is `request()`, which has information about the current request.  

### Use `request()` macro in your analysis

Create a `.sql` file under `/analysis` directory (or use an existing one) and use the `request()` macro as follows:

```sql
{%- set query_params = request().query %}

select  order_date, 
        count(*) as orders, 
        count(distinct customer_id) as users
from {{ ref('orders') }} 
group by order_date
where status = '{{query_params.status}}'
```

When you `dbt run`, `request` macro returns default parameters defined in your yml file so your compiles analysis files will have your test data enabled.

[Read more about the macros on documentation](/).

### Install Jinjat

Execute following command to install Jinjat CLI:

```bash
pip install jinjat
```

### Serve REST API

Now, start the Jinjat server in your root directory of your dbt project:

```bash
jinjat serve
```

You should see logs similar to:

```
INFO     Registering `order_stats` route
INFO:    Uvicorn running on http://127.0.0.1:8581
```

Our `order_stats` analysis is now an API endpoint, congrats!


## What to do next?

* Learn how you can configure OpenAPI spec for your API
* Learn how to create user interface from your analysis


