---
title: "Developing ChatGPT Plugins with SQL using Jinjat"
description: ""
slug: develop-chatgpt-plugins-to-talk-your-database

authors: [buremba]

tags: [tutorial]
hide_table_of_contents: true

date: 2023-05-25
is_featured: true
---

ChatGPT plugins let you plug in your custom APIs to enable OpenAI talk to your company data and take actions via triggering API calls. The integration is pretty seamless; you write a manifest file and explain when ChatGPT should call your plugin. The manifest file has a reference to your OpenAPI spec which includes your API endpoints and ChatGPT *automagically* generates an API call and calls your API when you ask questions. 

The generative AI models usually don't have access to the real-time data, they need to be trained in advance. As of today, ChatGPT's cutoff date is [2021](https://community.openai.com/t/knowledge-cutoff-date-of-september-2021/66215) which means that it doesn't know what happened after 2021. The only way for it to access the real-time and private data is through the ChatGPT Plugins. Jinjat helps you connect your data in your data warehouse to ChatGPT. Here are the steps:

> You can find the source code here of our sample ChatGPT plugin here: https://github.com/jinjat-data/jaffle_shop_metrics

## Setup manifest file

Create the [following file](https://github.com/jinjat-data/jaffle_shop_metrics/blob/main/static/.well-known/ai-plugin.json) and edit the description about your data source. You can see the documentation about the properties [here](https://platform.openai.com/docs/plugins/getting-started/plugin-manifest). Jinjat will serve the files under `/static` directory by default so OpenAPI will hit our API running locally.

<File name='/static/.well-known/ai-plugin.json'>

```json
{
    "schema_version": "v1",
    "name_for_human": "ACME Company Data",
    "name_for_model": "acme_company_data",
    "description_for_human": "Plugin for fetching the company data including business metrics including website, marketing, finance data",
    "description_for_model": "Plugin for fetching the company data including business metrics including website, marketing, finance data",
    "auth": {
        "type": "none"
    },
    "api": {
        "type": "openapi",
        "url": "http://localhost:8581/current/openapi.json",
        "is_user_authenticated": false
    },
    "logo_url": "https://jinjat.com/img/logo.png",
    "contact_email": "support@example.com",
    "legal_info_url": "http://www.example.com/legal"
}
```

</File>

Next, we will enable CORS for OpenAI so that it can access to Jinjat that is running locally. 

<File name='jinjat_project.yml'>

```yml
cors:
  allowed_origins:
    - "http://127.0.0.1:3000"
    - "https://chat.openai.com"

```

</File>

That's all! Let's register our app in plugin store.

<center><b> 1. Plugin Store </b></center>

![Plugin Store](pathname:///img/blog/develop-chatgpt/plugin-store.png)

<center><b> 2. Enter Domain </b></center>

![Enter Domain](pathname:///img/blog/develop-chatgpt/enter-domain.png)

<center><b> Install Plugin </b></center>

![Install Plugin](/img/blog/develop-chatgpt/install-plugin.png)

![It's enabled](pathname:///img/blog/develop-chatgpt/enabled.png)

<center>Looking good, now we see our plugin in ChatGPT UI. 🚀 We're ready to ask our first question.</center>

##

![Conversation](pathname:///img/blog/develop-chatgpt/conversation.png)


Looks like magic, right? ChatGPT was smart enough to find the relevant analyses, generate the API query, fetch it from Jinjat and nicely format it for us. 
The data is from 2018 because [our source data](https://github.com/jinjat-data/jaffle_shop_metrics/blob/main/seeds/raw_orders.csv) doesn't actually include anything useful for this year so it's expected. ChatGPT also added a note about the `expenses` as we have the [relevant description](https://github.com/jinjat-data/jaffle_shop_metrics/blob/main/analyses/schema.yml#L22) for `expenses` below:

```yml
version: 2
analyses:
  ...
  - name: expenses
    description: Get product expenses for all the company
```

You can see all the API endpoints / dbt analyses [on Github](https://github.com/jinjat-data/jaffle_shop_metrics/tree/main/analyses), create new SQL files which will generate an endpoint automatically. Developing an plugin for OpenAI usually requires some prompt engineerig to tune for the queries that you expect because OpenAI can get confused if your API contract is complex, it's usually recommedded to add notes to your yml files. You can find relevant docs below:

* [Getting Started](https://jinjat.com/docs/getting-started)
* [Documenting your API endpoints](https://jinjat.com/reference/analysis-properties)
* [See the source code for `jaffle_shop`](https://github.com/jinjat-data/jaffle_shop_metrics)

> ChatGPT handles the cases where our API returns too much data as well. Jinjat returns [413 Status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413) which makes  OpenGPT breakdown the queries into two chunks and [merge them](https://share.cleanshot.com/88HQspGy).

