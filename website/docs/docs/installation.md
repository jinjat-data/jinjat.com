---
title: "Installation"
id: "installation"
---

Jinjat works with your existing dbt projects. Once you have a working dbt project, here are the steps:

### 1. Add Jinjat as a dependency

Create a `package.yml` file in the main directory of your dbt project and add the following lines:

```yml
packages:
  - git: https://github.com/jinjat-data/dbt_jinjat
    version: 0.1
```

Jinjat dbt package comes with a set of macros that lets you customize the API endpoints so it's optional if you just create endpoints that just execute static SQL queries. The most important macro is `request()`, which has information about the current request. 

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


