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
    version: 0.2-prerelease
```

Jinjat dbt package comes with a set of macros that lets you customize the API endpoints so it's optional if you just create endpoints that just execute static SQL queries. The most important macro is `jinjat.request()`, which has information about the current request.

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
0 analysis found with `jinjat` config
INFO:    Uvicorn running on [http://127.0.0.1:8581](http://127.0.0.1:8581)
```

Now visit your API page, you should see the following message:

```json
{
  "admin_api_docs": "http://127.0.0.1:8581/admin/docs",
  "magic": "https://jin.jat",
  ...
}
```

Congrats on deploying your first API!

## What to do next?

- [Create your first API Endpoint](/docs/getting-started)
