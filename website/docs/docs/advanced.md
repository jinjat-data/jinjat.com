---
title: "Advanced"
---

# Tech Stack

Jinjat uses dbt Core under the hood. It uses FastAPI as web framework in backend and support Streamlit and Refine as front-end. The Refine integration generates a Refine project (which can be backed by Remix, Next.js as well) and uses JsonForm to generate the layout. Jinjat relies on your OpenAPI spec defined in dbt resources files for each operation. You can use `jinjat_project.yml` file to extend the OpenAPI spec for your needs.

# Request Flow

When you send a request to Jinjat, it will:

1. Validate the request with your OpenAPI spec.
    a. Jinjat returns exception with `400` status code in case the request is not valid.
2. Apply pre-hook tranformations if defined.
3. Compile Jinja in your dbt analysis.
    a. `request()` macro will return the validated request properties such as `query_params`, `body`, and `headers`.
4. Execute the SQL query in your dbt target.
5. Validate the response with your OpenAPI spec.
6. Apply post-hook tranformations if defined.
7. Return the result back to the user in JSON format.