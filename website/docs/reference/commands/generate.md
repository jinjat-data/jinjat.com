---
title: "generate"
---

The `jinjat generate [macro_name]` command is similar to [run-operation](https://docs.getdbt.com/reference/commands/run-operation) command in dbt but it expects the macro to return a dictionary of file path to content as follows:

```sql
{% macro refine_app(to) %}
  {% set files = {
          "analyses/crud/_list_customers.sql": generate_jinjat_refine_app_list(to),
          "analyses/crud/_id/_get_customers.sql": generate_jinjat_refine_app_get(to),
          "analyses/crud/schema.yml": generate_refine_jinjat_app_yml(to, is_read_only),
      }
  %}

  {{ return(files)}}
{% endmacro %}
```

For the `refine_app` macro above, here is how it works when you call `generate` command:

```bash
$ jinjat generate refine_app --args '{to: ref("customers")}'                        
└── analyses
    └── crud
        ├── _list_customers.sql ✔️
        ├── _id
        │   └── _get_customers.sql ✔️
        └── schema.yml ✔️
3 files will be created. Type enter to continue:
```

This feature is useful for our Refine integration and automating [dbt-codegen](https://hub.getdbt.com/dbt-labs/codegen/latest/) that generates code for your dbt projects. [dbt_jinjat](https://github.com/jinjat-data/dbt_jinjat) package is a good package to look at for the examples.


### Details

Usage: `jinjat generate [macro_name]`

```
Options:
  --project-dir DIRECTORY   Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.
  -t, --target TEXT         Which profile to load. Overrides setting in dbt_project.yml.
  --args                    Supply arguments to the macro. This dictionary will be mapped to the
                            keyword arguments defined in the selected macro. This argument should
                            be a YAML string, eg. '{my_variable: my_value}
  --dry_run                 Only list the files that will be changed and exit
  --help                    Show this message and exit.
```

:::note Note
You can execute `jinjat generate --help` to see all available arguments.
:::