---
title: "generate-crud"
---

The `jinjat generate-crud` command will generate analysis files in your dbt project for CRUD operations for your dbt sources. Here are the files it generates:

- _id/_create_[source_name]_[table_name].sql
- _id/_delete_[source_name]_[table_name].sql
- _id/_get_[source_name]_[table_name].sql
- _id/_patch_[source_name]_[table_name].sql
- _list_[source_name]_[table_name].sql

### Details

Usage: `jinjat serve [OPTIONS]`

```
Options:
  --project-dir DIRECTORY   Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.
  -t, --target TEXT         Which profile to load. Overrides setting in dbt_project.yml.
  --host TEXT               The host to serve the server on
  --source INTEGER          The port to serve the server on
  --help                    Show this message and exit.
```

:::note Note
You can execute `jinjat serve --help` to see all available arguments.
:::

### Examples

```
$ jinjat serve
INFO     Registering `order_stats` route
INFO:    Uvicorn running on http://127.0.0.1:8581
```
