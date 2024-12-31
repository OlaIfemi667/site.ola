---
title: "Projects"
draft: false
slug: projects
---

Voici quelque project sur lesquels j'ai travaillé ou je travaille.
[Contactez moi](/about#get-in-touch)

## Intruder

Jean

These are my most recent code contributions, if you're interested:

<!-- prettier-ignore-start -->
<!-- markdownlint-disable MD013 MD032 -->

{{ range recentPullRequests 10 }}
- [{{ .Title }}]({{ .URL }}) on [{{ .Repo.Name }}]({{ .Repo.URL }}) ({{ humanize .CreatedAt }})
{{- end }}

<!-- markdownlint-enable MD013 MD032 -->
<!-- prettier-ignore-end -->
