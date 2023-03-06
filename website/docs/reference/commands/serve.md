---
title: "serve"
---

The `jinjat serve` command will:
- Parse dbt's `manifest.json` file
- Generate OpenAPI Spec from your API
- Expose your `analyses` as API endpoints

### Details

Usage: `jinjat serve [OPTIONS]`

```
Options:
  --project-dir DIRECTORY   Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.
  --profiles-dir DIRECTORY  Which directory to look in for the profiles.yml file. Defaults to ~/.dbt
  -t, --target TEXT         Which profile to load. Overrides setting in dbt_project.yml.
  --host TEXT               The host to serve the server on
  --port INTEGER            The port to serve the server on
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
