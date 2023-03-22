---
title: Exposure properties
---

## Related documentation
- [Using exposures](exposures)
- [Declaring resource properties](configs-and-properties)

## Overview
Exposures are defined in `.yml` files nested under an `exposures:` key. You may define `exposures` in YAML files that also define define `sources` or `models`.

You can name these files `whatever_you_want.yml`, and nest them arbitrarily deeply in subfolders within the `models/` directory.


<File name='models/<filename>.yml'>

```yml
version: 2

exposures:
  - name: <string_with_underscores>
    [description](description): <markdown_string>
    type: {dashboard, analysis, application}
    url: <string>
    maturity: {high, medium, low}
    [tags](https://docs.getdbt.com/reference/resource-configs/tags): [<string>]
    [meta](https://docs.getdbt.com/reference/resource-configs/meta): {<dictionary>}
    owner:
      name: <string>
      email: <string>
    
    depends_on:
      - ref('model')
      - ref('seed')
      - source('name', 'table')
      - metric('metric_name')
      
    label: "Human-Friendly Name for this Exposure!"
    [config](https://docs.getdbt.com/reference/resource-properties/config):
      enabled: true | false
      jinjat:
        [refine](/integration/refine):

  - name: ... # declare properties of additional exposures
```
</File>


## Example

<File name='models/jaffle/exposures.yml'>

```yaml
version: 2

exposures:

  - name: weekly_jaffle_metrics
    label: Jaffles by the Week       
    type: dashboard            

    owner:
      name: Callum McData
      email: data@jaffleshop.com
```

</File>
