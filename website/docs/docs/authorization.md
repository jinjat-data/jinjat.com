---
title: Authorization
---

:::warning Jinjat is not production-ready, yet.
Jinjat is still in alpha and it's not recommended to use it in production!
:::

Jinjat doesn't enable authorization by default. The following features are currently

## [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

<File name='jinjat_project.yml'>

```yml
openapi:
    security: 
        - basicAuth
    components:
        securitySchemes:
            basicAuth: 
            type: http
            scheme: basic
```

</File>

## Oauth 

[See how you can configure Oauth for Snowflake](https://docs.snowflake.com/en/user-guide/oauth-custom#step-2-call-the-oauth-endpoints).


<File name='jinjat_project.yml'>

```yml
openapi:
    security: 
    - oAuth:
        - write_pets
        - read_pets
    components:
        securitySchemes:
            oAuth:
                type: oauth2
                description: This API uses OAuth 2 with the implicit grant flow.
                flows:
                    implicit: 
                        authorizationUrl: https://api.example.com/oauth2/authorize
                        tokenUrl: https://api.example.com/oauth2/token
                        refreshUrl: https://api.example.com/oauth2/refresh
                        scopes:
                            read_pets: read your pets
                            write_pets: modify pets in your account
```

</File>