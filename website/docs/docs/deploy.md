---
title: Deploy
---

:::warning Note
Jinjat is still in alpha and it's not recommended to use it in production!
:::

Once you're ready to to go into production, you can use the Jinjat's Docker integration which exposes your analyses using `jinjat serve` command.

## Docker

```bash
docker run \
  --name jinjat-server \
  -p 8581:8581 \
  --network=host \
  --mount type=bind,source=path/to/project,target=/usr/app \
  --mount type=bind,source=path/to/profiles.yml,target=/root/.dbt/ \
  jinjat/jinjat
```