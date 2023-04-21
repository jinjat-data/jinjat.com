---
title: "Advanced"
---

# Tech Stack

Jinjat uses [dbt Core](https://github.com/dbt-labs/dbt-core) under the hood. It uses [FastAPI](https://fastapi.tiangolo.com/) as web framework in backend and support [Streamlit](/docs/integrations/streamlit) and [Refine](/docs/integrations/refine) as front-end. The Refine integration generates a Refine project (which can be backed by Remix, Next.js as well) and uses [JsonForm](https://jsonforms.io) to generate the layout. Jinjat relies on your OpenAPI spec defined in dbt resources files for each operation. 

# Request Flow

When you send a request to Jinjat, it will:

1. Validate the request with your OpenAPI spec.
    a. Jinjat returns exception with `400` status code in case the request is not valid.
2. Apply pre-hook tranformations if defined.
3. Compile Jinja in your dbt analysis.
    a. `jinjat.request()` macro will return the validated request properties such as `query_params`, `body`, and `headers`.
4. Execute the SQL query in your dbt target.
5. Validate the response with your OpenAPI spec.
6. Apply post-hook tranformations if defined.
7. Return the result back to the user in JSON format.