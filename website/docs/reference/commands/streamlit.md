---
title: streamlit
---

The `jinjat streamlit` command generates a Streamlit app from your dbt project. It includes:
* A UI to submit Jinja queries via Admin API for testing
* Automatic form generation from your OpenAPI specifications similar to [Refine](refine)

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
You can execute `jinjat streamlit --help` to see all available arguments.
:::