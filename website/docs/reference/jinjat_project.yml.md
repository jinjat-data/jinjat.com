---
title: jinjat_project.yml
---

Jinjat projects have an optional `jinjat_project.yml` file that lets you assign metadata about your dbt project. While it's optional, it's recommended.

The following is a list of all available configurations in the `jinjat_project.yml` file.

:::info jinjat_project.yml
Jinjat uses dbt under the hood which requires `dbt_project.yml` file. This file is also used by Jinjat for the project version and name. `jinjat_project.yml` is different than this file and it's optional. It only includes metadata about your dbt project that is relevant to Jinjat.

<File name='jinjat_project.yml'>

```yml
max_limit: 
default_limit: 
[refine](project-configs/name): string
[openapi](project-configs/config-version): 2
```

</File>
