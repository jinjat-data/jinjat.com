---
title: "generate"
---

The `jinjat generate [macro_name]` command will generate analysis files in your dbt project for CRUD operations for your dbt resources. Here are the files it generates:


### Details

Usage: `jinjat generate [macro_name] --args "ref('my_model')" `

```
Options:
  --project-dir DIRECTORY   Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.
  -t, --target TEXT         Which profile to load. Overrides setting in dbt_project.yml.
  --help                    Show this message and exit.
```

:::note Note
You can execute `jinjat serve --help` to see all available arguments.
:::

### Examples

```
$ jinjat generate refine_crud

```
